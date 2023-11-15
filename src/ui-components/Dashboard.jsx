/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import SLNavBarHeader2 from "./SLNavBarHeader2";
import SLNavBarHeader from "./SLNavBarHeader";
import { DataStore } from 'aws-amplify';
import { useState, useEffect } from "react";
import StudyGroupCardCollection from "./StandardCardCollection";

function Dashboard() {

  return (
    <div>
      <SLNavBarHeader></SLNavBarHeader>
      <StudyGroupCardCollection />
    </div>
  );
}

export default withAuthenticator(Dashboard);