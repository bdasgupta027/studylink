/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API, Storage, Auth } from "aws-amplify";
import { updateProfileCard } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import MyIcon from "./MyIcon";
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
import axios from 'axios';
import { getProfileCard } from "../graphql/queries";
import SLEditProfile from "./SLEditProfile.css"

export default function EditProfile(props) {
  const { profileCard, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveZeroSixTwoEightValue,
    setTextFieldThreeEightFiveZeroSixTwoEightValue,
  ] = useState("");


  // Initialize the profileImage state with the default image only if it's falsy
  const [profileImage, setProfileImage] = useState("https://th.bing.com/th/id/OIP.ncOCV5LVCL8j70Edjgyn6QHaGy?rs=1&pid=ImgDetMain"
  );
  const [forceUpdate, setForceUpdate] = useState(false);

  const [currentUser, setCurrentUser] = useState(null); // Add this line to declare the user variable

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setCurrentUser(user);
        const response = await API.graphql({
          query: getProfileCard,
          variables: { id: user.attributes.sub }
        });
  
        const fetchedProfileCard = response.data.getProfileCard;
        // Check if the user already has a profile image
        if (fetchedProfileCard.image) {
          setProfileImage(fetchedProfileCard.image);
        }
      } catch (error) {
        console.error('Error fetching profile image:', error);
      }
    };
  
    fetchProfileImage();
  }, []); // Empty dependency array to run the effect only once on component mount
  
  const handleImageUpload = async (event) => {
    if (event.target && event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      try {
        const uploadResult = await Storage.put(file.name, file, {
          contentType: 'image/jpeg',
        });

        const imageUrl = await Storage.get(uploadResult.key);
        console.log(imageUrl);
        const imageUrlWithoutParams = imageUrl.split('?')[0];
        
        console.log(imageUrlWithoutParams);
        console.log("before profile imae:", profileImage);
        setProfileImage(imageUrlWithoutParams + `?timestamp=${Date.now()}`);
        console.log("after profile image:", profileImage);
        console.log("url is", imageUrlWithoutParams + `?timestamp=${Date.now()}`);
        // props.updateProfileImage(imageUrlWithoutParams + `?timestamp=${Date.now()}`);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const buttonOnClick = async () => {
    const user = await Auth.currentAuthenticatedUser();
  
    // Fetch the existing profile card
    const response = await API.graphql({
      query: getProfileCard,
      variables: { id: user.attributes.sub }
    });
  
    const fetchedProfileCard = response.data.getProfileCard;
  
    // Prepare the updated input
    const updatedProfile = {
      userId: user.attributes.sub,
      id: fetchedProfileCard.id,
      firstName: textFieldTwoNineSevenSixSixNineTwoTwoValue || fetchedProfileCard.firstName,
      lastName: textFieldTwoNineSevenSixSixNineTwoThreeValue || fetchedProfileCard.lastName,
      email: textFieldTwoNineSevenSixSixNineTwoFourValue || fetchedProfileCard.email,
      major: textFieldThreeEightFiveZeroSixTwoEightValue || fetchedProfileCard.major,
    };
  
    // Check if there's an uploaded image
    if (profileImage) {
      updatedProfile.image = profileImage;
    }
  
    try {
      // Update the profile card
      await API.graphql({
        query: updateProfileCard.replaceAll("__typename", ""),
        variables: {
          input: updatedProfile,
        },
      });
  
      // Update the state to force a re-render
      setForceUpdate(prevState => !prevState);
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };
  
  
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EditProfile")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >

        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile29766913")}
        >
          <Link to="/Profile">
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
              {...getOverrideProps(overrides, "MyIcon")}
            ></MyIcon>
          </Link>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children=""
            {...getOverrideProps(overrides, "Edit Profile29766916")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="45px"
            height="45px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={`${profileImage}?${new Date().getTime()}`}
            alt="profile image"
            key={profileImage}
            {...getOverrideProps(overrides, "image")}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="imageInput"
          />
          <label htmlFor="imageInput">
            <span
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="22px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              textDecoration="underline"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Upload New Image"
              onClick={handleImageUpload}
              class="uploadButton"
              {...getOverrideProps(overrides, "Upload New Image")}
            ></span>
          </label>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="First Name"
            placeholder="John"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Last Name"
            placeholder="Doe"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Email"
            placeholder={currentUser ? currentUser.attributes.email : "Loading..."}
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Major"
            placeholder="Major"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveZeroSixTwoEightValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveZeroSixTwoEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3850628")}
          ></TextField>
        </Flex>
        <Link to="/Profile">
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        </Link>
      </Flex>
    </Flex>
  );
}