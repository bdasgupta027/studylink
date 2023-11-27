/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { API, Auth } from 'aws-amplify';
import { getProfileCard } from "../graphql/queries";
import ProfilePageDetails from "./SLProfilePageDetails";
import { getProfileCardByEmail } from "../graphql/queries";
import { listMemberCards } from "../graphql/queries";
import { getMemberCardByUsername } from "../graphql/queries";
export default function MemberCard(props) {
  const { memberCard,onMemberImageClick, overrides, ...rest } = props;
  const [profileCard, setProfileCard] = useState(null);
    const [profileImage, setProfileImage] = useState("");
  const createProfileCardDetails = async () => {
      // const user = await Auth.currentAuthenticatedUser();
      try {
          const response = await API.graphql({
              query: getProfileCard,
              variables: { id: memberCard?.userId }
          });
          const fetchedProfileCard = response.data.getProfileCard;
          console.log("PROFILE:", fetchedProfileCard);
          setProfileCard(fetchedProfileCard);
          if (fetchedProfileCard.image === null) {
            setProfileImage("https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png");
          } else {
            setProfileImage(fetchedProfileCard.image);
          }
          // setProfileImage(fetchedProfileCard.image);
          console.log("FINAL PROFILE", fetchedProfileCard);
      } catch (err) {
        setProfileImage("https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png");
          console.log(err);
          return false;
      }
  };
    useEffect(() => {
      // fetchMembers();
        createProfileCardDetails();
      }, []); 

      const updateProfileImage = (newImage) => {
        setProfileImage(newImage);
      };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="267px"
      height="76px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MemberCard")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="568px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Profile")}
      >
        <Image
          width="38px"
          height="39px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="32.5px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={profileImage}
          onClick={() => onMemberImageClick(memberCard)}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${memberCard?.username}${""}`}
          {...getOverrideProps(overrides, "Rene Brandel")}
        ></Text>
      </Flex>
    </Flex>
  );
}
