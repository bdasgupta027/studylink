import "./chat.css"
import SLNavBarHeader from "./ui-components/SLNavBarHeader"
import ProfilePageDetails from "./ui-components/SLProfilePageDetails"
import StudyGroupCardCollection from "./ui-components/StudyGroupCardCollection"
import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { getProfileCard } from './graphql/queries';
import EditProfile from './ui-components/SLEditProfile';
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";
import intlFormatDistance from "date-fns/intlFormatDistance";
import { useParams, Link, useNavigate  } from 'react-router-dom';
import MyIcon from "./ui-components/MyIcon";


function Chat() {
    const [chats, setChats] = React.useState([]);
    const [user, setUser] = React.useState();
    const { id } = useParams();
    const navigate = useNavigate();
    const getUserDetails = async () => {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
    }
    getUserDetails();
    // const userInfo = getUserDetails();
    // console.log("userInfo is", userInfo);

    React.useEffect(() => {
      const sub = API.graphql(
        graphqlOperation(subscriptions.onCreateChat)
      ).subscribe({
        next: async ({ value }) => {
          console.log("Subscription Payload:", value); // Log the entire payload
          const newChat = value.data.onCreateChat;
          
          // Log the studyGroupId of the new chat
          console.log("New Chat Study Group ID:", newChat.studyGroupId);
    
          // Ensure that the new chat belongs to the current study group
          if (newChat.studyGroupId === id) {
            console.log("Updating state with new chat:", newChat);
            setChats((prev) => [...prev, newChat]);
          }
        },
        error: (err) => console.log(err),
      });
    
      return () => sub.unsubscribe();
    }, [id]);
    
    
    
    

      React.useEffect(() => {
        async function fetchChats() {
          try {
            console.log("fetching chats for", id);
            const allChats = await API.graphql({
              query: queries.listChats,
              variables: {
                filter: { studyGroupId: { eq: id } },
              },
            });
            console.log(allChats.data.listChats.items);
            setChats(allChats.data.listChats.items);
          } catch (error) {
            console.error("Error fetching chats:", error);
          }
        }
        fetchChats();
      }, [id]);
    // console.log(user);
    return (
      <div>
        <div className="fullchat">
          <div className={`class2`}>
          <div onClick={() => navigate(-1)}>
      <MyIcon
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="close"
      ></MyIcon>
    </div>
            
          {chats
            .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
            .map((chat) => (
              <div
                key={chat.id}
                className={`flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200 width34 my-2 ${
                  chat.email === user.attributes.email && "self-end bg-gray-200"
                }`}
              >
                <div>
                  <div className="flex justify-between gap-x-4">
                    <div className="py05 text-xs leading-5 text-gray-500">
                      <span className="font-medium text-gray-900">
                        {chat.email.split("@")[0]}
                      </span>{" "}
                    </div>
                    <time
                      dateTime="2023-01-23T15:56"
                      className="flex-none py05 text-xs leading-5 text-gray-500"
                    >
                      {intlFormatDistance(new Date(chat.createdAt), new Date())}
                    </time>
                  </div>
                  <p className="text-sm leading-6 text-gray-500">{chat.text}</p>
                </div>
              </div>
            ))}

          <div>
            <div>
              <div className="relative mt-2 flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  onKeyUp={async (e) => {
                    if (e.key === "Enter") {
                    //   setChats([...chats, e.target.value]);
                    
                    const user = await Auth.currentAuthenticatedUser();
                    console.log(user);

                    await API.graphql({
                        query: mutations.createChat,
                        variables: {
                          input: {
                            text: e.target.value,
                            email: user.attributes.email,
                            userId: user.attributes.sub,
                            studyGroupId: id,
                          },
                        },
                      });
                      e.target.value = "";
                    }
                  }}
                  className="block w-full rounded-md border-0 py15 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 flex py15 pr15">
                  <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                    Enter
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  export default Chat;