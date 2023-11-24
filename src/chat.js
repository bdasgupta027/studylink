import "./chat.css"
import SLNavBarHeader from "./ui-components/SLNavBarHeader"
import ProfilePageDetails from "./ui-components/SLProfilePageDetails"
import StudyGroupCardCollection from "./ui-components/StudyGroupCardCollection"
import StandardCardCollection from "./ui-components/StandardCardCollection"
import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { getProfileCard } from './graphql/queries';
import EditProfile from './ui-components/SLEditProfile';
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";
import intlFormatDistance from "date-fns/intlFormatDistance";


function Chat() {
    const [chats, setChats] = React.useState([]);
    const [user, setUser] = React.useState();
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
          next: ({ provider, value }) =>
            setChats((prev) => [...prev, value.data.onCreateChat]),
          error: (err) => console.log(err),
        });
        return () => sub.unsubscribe();
      }, []);

    React.useEffect(() => {
        async function fetchChats() {
          const allChats = await API.graphql({
            query: queries.listChats,
          });
          console.log(allChats.data.listChats.items);
          setChats(allChats.data.listChats.items);
        }
        fetchChats();
      }, []);
    // console.log(user);
    return (
      <div>
        <div className="fullchat">
          <div className={`class2`}>
            
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
                            studyGroupId: "a1d13dce-ba38-44b2-8c65-7cc6c3199d2d",
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