import './App.css';
import SLNavBarHeader from "./ui-components/SLNavBarHeader"
import ProfilePageDetails from "./ui-components/ProfilePageDetails"
import StudyGroupCardCollection from "./ui-components/StudyGroupCardCollection"
import { SLStudyGroupCard } from './ui-components/SLStudyGroupCard';
import MemberDetailsPopup from './MemberDetailsPopup';
import { API, Auth } from 'aws-amplify';
import React, { useEffect, useState, useHistory } from 'react';
import {Button, View } from "@aws-amplify/ui-react";
import { listMemberCards, getStudyGroupCard } from './graphql/queries';
import { useNavigateAction } from './ui-components/utils';
import { useParams } from 'react-router-dom';
// import { useNavigateAction } from "./utils";
// import SLNavBarHeader from './ui-components/SLNavBarHeader';
import MemCardCollection from './ui-components/SLMemCardCollection';
import { getProfileCard } from './graphql/queries';
// import { CreateAnnouncementForm } from './ui-components';
// import { PostCommentForm } from './ui-components';
import CreateAnnouncementForm from './ui-components/CreateAnnouncementForm';
import PostCommentForm from './ui-components/PostCommentForm';
// import { AnnouncementCollection } from './ui-components';
import CreateInvite from './ui-components/CreateInvite';
import AnnouncementCollection from './ui-components/SLAnnouncementCollection';
// imports for notes uploading and display
import { Storage } from 'aws-amplify';

// import for the notes preview
import ImageSlider from "./ImageSlider"

const buttonStyle = {
    marginTop: '20px',
    display: 'inline-block',
    padding: '5px 10px',
    width: '200px',
    fontSize: '24px',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    outline: 'none',
    color: '#fff',
    backgroundColor: '#047D95',
    border: 'none',
    borderRadius: '5px',
    fontWeight: "bold",
    margin: "10px 20px"
}
const smallerButtonStyle = {
    marginTop: '20px',
    display: 'inline-block',
    padding: '5px 8px', // Adjusted padding for a smaller size
    width: '150px', // Adjusted width for a smaller size
    fontSize: '18px', // Adjusted font size for a smaller size
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    outline: 'none',
    color: '#fff',
    backgroundColor: '#047D95',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    margin: '10px 20px',
  };
  
const announcementStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '5px',
    marginBottom: '30px', // Add padding below
};


function StudyGroup() {
    const [announcementFormOpen, setAnnouncementFormOpen] = useState(false);
    const [commentFormOpen, setCommentFormOpen] = useState(false);
  
    const handleAnnouncementFormOpen = () => {
      setAnnouncementFormOpen(true);
    };
  
    const handleAnnouncementFormClose = () => {
      setAnnouncementFormOpen(false);
    };
  
    const handleCommentFormOpen = () => {
      setCommentFormOpen(true);
    };
  
    const handleCommentFormClose = () => {
      setCommentFormOpen(false);
    };
    const [profileCard, setProfileCard] = useState(null);
    const [profileImage, setProfileImage] = useState("");
    const { id } = useParams();
    const [members, setMembers] = useState([]);
    const [studyGroupCard, setStudyGroupCard] = useState(null);
    const [openCreateInvite, setOpenCreateInvite] = useState(false);
    const uuid = require('uuid');
    // for notes
    // const toolbarPluginInstance = toolbarPlugin();
    // const { Toolbar } = toolbarPluginInstance;
    const [fileData, setFileData] = useState(null);
    const [fileStatus, setFileStatus] = useState(false);

    const [selectedMember, setSelectedMember] = useState(null);
    const [isMemberDetailsOpen, setMemberDetailsOpen] = useState(false);

    const [groupMembers, setGroupMembers] = useState([]);
    
    const uploadFile = async () => {
        let n = id + "/" + fileData.name
        console.log(n);
        const result = await Storage.put(n, fileData);
        setFileStatus(true);
    };

    // const history = useHistory();
    const handleChatButtonClick = useNavigateAction({
        type: "url",
        url: `/chat/${id}`
    });

    // const handleChatButtonClick = () => {
    //     // Navigate to the '/chat' route when the button is clicked
    //     history.push('/chat');
    // };

    const handleClickOpenCreateInvite = () => {
        setOpenCreateInvite(true);
      };
    
      const toggleCreateInvite= () => {
        setOpenCreateInvite(!openCreateInvite);
      };

    const createProfileCardDetails = async () => {
        const user = await Auth.currentAuthenticatedUser();
        try {
            const response = await API.graphql({
                query: getProfileCard,
                variables: { id: user.attributes.sub }
            });
            const fetchedProfileCard = response.data.getProfileCard;
            setProfileCard(fetchedProfileCard);
            setProfileImage(fetchedProfileCard.image);
            console.log("FINAL PROFILE", fetchedProfileCard);
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    useEffect(() => {
        createProfileCardDetails();
    }, []); 

    const updateProfileImage = (newImage) => {
        setProfileImage(newImage);
    };
    const CreateMemberCardMutation = `
      mutation createMemberCard($input: CreateMemberCardInput!) {
        createMemberCard(input: $input) {
          id
          username
          studyGroupId
          userId
        }
      }
    `;

    // Function to determine the initial value for isJoined
    const determineInitialIsJoined = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();

            const existingMembersResponse = await API.graphql({
                query: listMemberCards,
                variables: {
                    filter: {
                        studyGroupId: {
                            eq: id,
                        },
                        userId: {
                            eq: user.attributes.sub,
                        },
                    },
                },
            });

            const existingMembers = existingMembersResponse.data.listMemberCards.items;
            console.log("members", existingMembers);
            return existingMembers.length > 0;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    // Additional state to track whether the initial check is complete
    const [initialCheckComplete, setInitialCheckComplete] = useState(false);

    const [isJoined, setIsJoined] = useState(false);

    const fetchMembers = async () => {
        try {
            const response = await API.graphql({
                query: listMemberCards,
                variables: {
                    filter: {
                        studyGroupId: {
                            eq: id,
                        },
                    },
                },
            });

            const membersData = response.data.listMemberCards.items;
            console.log("Membersssss", membersData);
            setMembers(membersData);
            setGroupMembers(membersData);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    };

    
    useEffect(() => {
        determineInitialIsJoined().then((result) => {
            setIsJoined(result);
            setInitialCheckComplete(true);
        });
    }, [id]);

    useEffect(() => {
        async function fetchStudyGroupCard() {
            try {
                const response = await API.graphql({
                    query: getStudyGroupCard,
                    variables: { id: id },
                });

                const fetchedStudyGroupCard = response.data.getStudyGroupCard;
                setStudyGroupCard(fetchedStudyGroupCard);
            } catch (error) {
                console.error('Error fetching study group card:', error);
            }
        }

        fetchStudyGroupCard();
    }, [id]);

    async function addMember() {
        try {
            const user = await Auth.currentAuthenticatedUser();
            console.log(user);

            const existingMembersResponse = await API.graphql({
                query: listMemberCards,
                variables: {
                    filter: {
                        studyGroupId: {
                            eq: id,
                        },
                        userId: {
                            eq: user.attributes.sub,
                        },
                    },
                },
            });
            const existingMemberList = [existingMembersResponse.data.listMemberCards.items]
            console.log("MEMBER LISTTTTT", existingMemberList);
            const existingMembers = existingMembersResponse.data.listMemberCards.items;

            if (existingMembers.length > 0) {
                setIsJoined(true);
                console.log('Member card already exists for the user in this study group.');
            } else {
                const newMember = {
                    id: uuid.v4(),
                    username: user.attributes.email,
                    userId: user.attributes.sub,
                    studyGroupId: id,
                };

                console.log('NEW MEMBER', newMember);

                await API.graphql({
                    query: CreateMemberCardMutation,
                    variables: { input: newMember },
                });

                console.log('created');

                setIsJoined(true);

                // Call fetchMembers after the user joins the group
                fetchMembers();
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        // Save the joined state to localStorage whenever it changes
        localStorage.setItem(`joined-${id}`, JSON.stringify(isJoined));
        console.log('Saved joined state:', isJoined);

        // Call fetchMembers only once after the user joins the group
        if (isJoined) {
            fetchMembers();
        }
    }, [id, isJoined]);

    // Render conditionally based on whether the initial check is complete
    if (!initialCheckComplete) {
        return <div>Loading...</div>;
    }

    const handleMemberImageClick = (member) => {
        console.log("THIS IS MEMBER DETAILS,", member);
        setSelectedMember(member);
        setMemberDetailsOpen(true);
      };
      

    return (
        <div className="studyGroupPage">
            <SLNavBarHeader profileImage={profileImage} setProfileImage={setProfileImage} />
            
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start", overflow: "hidden"}}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '75%',}}> 
                    {studyGroupCard && <SLStudyGroupCard studyGroupCard={studyGroupCard} marginTop='10px' />}
                    {/* <div className="dashed-line" style={{ borderTop: '1px dashed #000', marginTop: '10px', paddingBottom: '10px' }} /> */}
                    <div style={announcementStyle}>
                        Announcements
                    </div>
                    {isJoined?(
                    <AnnouncementCollection studyGroupId={id}/>
                    ): null}
                    
                    <div style={announcementStyle}>
                        Notes
                    </div>
                    <div>                    
                        {isJoined?(
                        <View display="flex" direction="column" justifyContent="center" alignItems="center" marginTop="10px">
                            <ImageSlider id={id} />
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={(e) => {
                                    const selectedFile = e.target.files[0];
                                    if (selectedFile && selectedFile.type !== "application/pdf") {
                                        // Notify the user that only PDF files are accepted
                                        alert("Please select a PDF file.");
                                        // Clear the input value to reset the selection
                                        e.target.value = null;
                                    } else {
                                        // Set the file data if it's a PDF
                                        setFileData(selectedFile);
                                    }
                                }}
                            />

                            <Button onClick={uploadFile} style={smallerButtonStyle}>
                                Upload Files
                            </Button>
                            {fileStatus && (
                                <div >
                                    <p marginBottom>File Uploaded Successfully</p>
                                </div>
                            )}
                        </View>
                    ):null}
</div>
                </div>
                <div className="sidebar" style={{ height: '100%', width: '25%',}}>
                    {!isJoined ? (
                        <>
                        <button style={buttonStyle} onClick={addMember}>Join Group</button>
                        </>
                    ) : (
                        <>
                        <button disabled style={buttonStyle} >Joined</button>
                        {isJoined && (<Button onClick={handleClickOpenCreateInvite} style={buttonStyle}>
                            Invite Member
                        </Button>)}
                        {openCreateInvite && (
                        <CreateInvite open={openCreateInvite} toggleForm={toggleCreateInvite} studygroupid={id}/>
                        )}
                        <button style={buttonStyle} onClick={handleAnnouncementFormOpen}>Make Annoucement</button>
                        <CreateAnnouncementForm open={announcementFormOpen} handleClose={handleAnnouncementFormClose} studyGroupId={id}/>
                        <button style={buttonStyle} onClick={handleChatButtonClick}>Chat</button>
                        </>
                    )}
                    {isJoined?(
                        <>
                            <h1 style={{ color: '#047D95' }}>Member Usernames</h1>
                            <MemCardCollection studyGroupId={id} onMemberImageClick={handleMemberImageClick} />
                            <MemberDetailsPopup isOpen={isMemberDetailsOpen} onClose={() => setMemberDetailsOpen(false)} member={selectedMember} />
                        </>
                    ): null}
                    
                </div>
            </div>
        </div>
    );

}

export default StudyGroup;