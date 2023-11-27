/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import SLNavBarHeader from "./ui-components/SLNavBarHeader"
import { DataStore } from 'aws-amplify';
import { useState, useEffect } from "react";

function Dashboard() {
  const [profileCard, setProfileCard] = useState(null);
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    createProfileCardDetails();
  }, []); 

  const updateProfileImage = (newImage) => {
    setProfileImage(newImage);
  };
  // const [studygroups, setStudygroups] = useState(null);

  // useEffect(() => {
  //   async function queryStudygroups() {

  //     const groups = await DataStore.query(StudyGroupCard)
  //     console.log(groups);
  //     setStudygroups(groups);
  //   }
  //   queryStudygroups();
  // }, [])
  // queryStudygroups();
  // console.log("hello?");
  
  return (
    <div>
      <SLNavBarHeader profileImage={profileImage} setProfileImage={setProfileImage} />
    </div>
  );
}

export default withAuthenticator(Dashboard);