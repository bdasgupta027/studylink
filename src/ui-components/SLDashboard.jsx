/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import SLNavBarHeader2 from "./SLNavBarHeader2";
import { DataStore } from 'aws-amplify';
import { useState, useEffect } from "react";

function Dashboard() {
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
      <SLNavBarHeader></SLNavBarHeader>
    </div>
  );
}

export default withAuthenticator(Dashboard);