/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import SocialPost from "./SocialPost";
import { View } from "@aws-amplify/ui-react";
export default function AnnouncementCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="960px"
      height="297px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AnnouncementCard")}
      {...rest}
    >
      <SocialPost
        display="flex"
        gap="16px"
        direction="column"
        width="960px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="calc(50% - 148.5px - 0px)"
        left="0%"
        right="0%"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SocialPost")}
      ></SocialPost>
    </View>
  );
}
