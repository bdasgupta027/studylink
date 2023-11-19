import './App.css';
import SLNavBarHeader from "./ui-components/SLNavBarHeader"
import ProfilePageDetails from "./ui-components/ProfilePageDetails"
import StudyGroupCardCollection from "./ui-components/StudyGroupCardCollection"
import { StudyGroupCard } from './ui-components';
import { API, DataStore, Amplify, Auth, Hub } from 'aws-amplify'
import React, { useEffect, useState } from 'react';
import { listMemberCards, getStudyGroupCard } from './graphql/queries';
import { useParams } from 'react-router-dom';



function StudyGroup() {

    const CreateMemberCardMutation = `
        mutation createMemberCard($input: CreateMemberCardInput!) {
        createMemberCard(input: $input) {
            id
            username
            studyGroupId
            }
        }
    `

    const { id } = useParams();
    const [members, setMembers] = useState([]);
    const [studyGroupCard, setStudyGroupCard] = useState(null);

    useEffect(() => {
      async function fetchStudyGroupCard() {
        try {
          const response = await API.graphql({
            query: getStudyGroupCard,
            variables: { id: id }
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
            const newMember = {
                id: user.attributes.sub,
                username: user.attributes.email,
                studyGroupId: id,
            }
            await API.graphql({
                query: CreateMemberCardMutation,
                variables: { input: newMember }
            });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function fetchMembers() {
            try {
                const response = await API.graphql({
                    query: listMemberCards,
                    variables: {
                        filter: {
                            studyGroupId: {
                                eq: id
                            }
                        }
                    }
                });

                const membersData = response.data.listMemberCards.items;
                setMembers(membersData);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        }

        fetchMembers();
    }, [id]);


    return (
        <div className="Profile">
            {studyGroupCard && (
        <StudyGroupCard studyGroupCard={studyGroupCard} />
            )}
            <button onClick={addMember}>Join Group</button>
            <h1>Member Usernames</h1>
            <ul>
                {members.map((member) => (
                    <li key={member.id}>{member.username}</li>
                ))}
            </ul>
        </div>

    );
}

export default StudyGroup;
