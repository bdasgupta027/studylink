import './App.css';
import SLNavBarHeader from "./ui-components/SLNavBarHeader"
import ProfilePageDetails from "./ui-components/SLProfilePageDetails"
import StudyGroupCardCollection from "./ui-components/StudyGroupCardCollection"
import StandardCardCollection from "./ui-components/StandardCardCollection"
import { API, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { getProfileCard } from './graphql/queries';
import EditProfile from './ui-components/SLEditProfile';
// import { API } from "aws-amplify";
import * as mutations from "./graphql/mutations";


function Chat({ user, signOut }) {
    const [chats, setChats] = React.useState([]);
    // console.log(user);
    return (
      <div>
        <div className="flex justify-end px-4 py-2">

        </div>
        <div className="flex justify-center items-center h-screen w-full">
          <div className={`w-3/4 flex flex-col`}>
            {chats}
            <div>
              <div className="relative mt-2 flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  onKeyUp={async (e) => {
                    if (e.key === "Enter") {
                    //   setChats([...chats, e.target.value]);
                    await API.graphql({
                        query: mutations.createChat,
                        variables: {
                          input: {
                            text: e.target.value,
                            email: user.attributes.email,
                          },
                        },
                      });
                      e.target.value = "";
                    }
                  }}
                  className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                    Enter
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Chat;