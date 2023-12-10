/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import SLNavBarHeader from "./SLNavBarHeader";
import { DataStore, Auth, API } from 'aws-amplify';
import { useState, useEffect } from "react";
// import ProfilePageDetails from "./ui-components/SLProfilePageDetails";
import ProfilePageDetails from "./SLProfilePageDetails";
import { getProfileCard } from "../graphql/queries";
// import { getProfileCard } from './graphql/queries';

import StandardCardCollection from "./SLStandardCardCollectionB";


function Dashboard() {
  const [profileCard, setProfileCard] = useState(null);
  const [profileImage, setProfileImage] = useState("");

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
  return (
    <div>
      <SLNavBarHeader profileImage={profileImage} setProfileImage={setProfileImage} marginBottom="10vh" />
      <div style={{ backgroundColor:'#D9F3FA' ,padding:"20px" }}>
        <StandardCardCollection />
      </div>
    </div>
  );
}

export default withAuthenticator(Dashboard);