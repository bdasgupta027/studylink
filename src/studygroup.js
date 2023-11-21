import './App.css';
import SLNavBarHeader from "./ui-components/SLNavBarHeader"
import ProfilePageDetails from "./ui-components/ProfilePageDetails"
import StudyGroupCardCollection from "./ui-components/StudyGroupCardCollection"
import { SLStudyGroupCard } from './ui-components/SLStudyGroupCard';
import { API, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { listMemberCards, getStudyGroupCard } from './graphql/queries';
import { useParams } from 'react-router-dom';
// import SLNavBarHeader from './ui-components/SLNavBarHeader';
import MemCardCollection from './ui-components/MemCardCollection';

function StudyGroup() {
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

    const { id } = useParams();
    const [members, setMembers] = useState([]);
    const [studyGroupCard, setStudyGroupCard] = useState(null);
    const uuid = require('uuid');

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

    return (
        <div className="studyGroupPage">
            <SLNavBarHeader />
            <MemCardCollection />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                {studyGroupCard && <SLStudyGroupCard studyGroupCard={studyGroupCard} style={{ marginTop: '20px' }} />}
                <div className="sidebar" style={{ backgroundColor: '#666464', height: '100%'}}>
                    {!isJoined ? (
                        <button
                            style={{
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
                                borderRadius: '15px',
                                boxShadow: '0 9px #999',
                            }}
                            onClick={addMember}
                        >
                            Join Group
                        </button>
                    ) : (
                        <button
                            style={{
                                marginTop: '20px',
                                display: 'inline-block',
                                padding: '5px 10px',
                                width: '150px',
                                fontSize: '24px',
                                cursor: 'pointer',
                                textAlign: 'center',
                                textDecoration: 'none',
                                outline: 'none',
                                color: '#fff',
                                backgroundColor: '#047D95',
                                border: 'none',
                                borderRadius: '15px',
                                boxShadow: '0 9px #999',
                            }} disabled>Joined</button>
                    )}
                    <h1>Member Usernames</h1>
                    <ul>
                        {members.map((member) => (
                            <li key={member.id}>{member.username}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default StudyGroup;