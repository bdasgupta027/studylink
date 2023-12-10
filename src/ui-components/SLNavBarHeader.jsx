/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, Button } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import { API } from 'aws-amplify';
import { graphqlOperation } from 'aws-amplify';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from "react";
import StudyGroupForm from "./StudyGroupForm";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Notifications from "./Notifications";
import { listInvites } from '../graphql/queries';

export default function SLNavBarHeader(props) {
  const { profileCard, profileImage, overrides, ...rest } = props;
  const [openCreateStudyGroupForm, setOpenCreateStudyGroupForm] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [user, setUser] = useState(null);
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    const fetchInvites = async () => {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user.attributes.email);
      try {
        const filter = {
          receiver: {
            eq: user.attributes.email
          }
        };
        const result = await API.graphql(
          graphqlOperation(listInvites, {
            filter,
          })
        );
        const invites = result.data.listInvites.items;
        setInvites(invites);
      } catch (error) {
        console.error('Error fetching invites:', error);
      }
    }
    fetchInvites();
  }, [openNotifications]);

  const handleClickOpenCreateStudyGroupForm = () => {
    setOpenCreateStudyGroupForm(true);
  };

  const handleClickOpenNotifications = () => {
    setOpenNotifications(true);
  };

  const toggleCreateStudyGroupForm = () => {
    setOpenCreateStudyGroupForm(!openCreateStudyGroupForm);
  };

  const toggleNotifications = () => {
    setOpenNotifications(!openNotifications);
  };

  const updateProfileImage = (newImage) => {
    setProfileImage(newImage);
  };
  const dashboardOnClick = useNavigateAction({
    type: "url",
    url: "/dashboard",
  });
  const createaNewStudyGroupOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const contactOnClick = useNavigateAction({ type: "url", url: "/contact" });
  // const { overrides, ...rest } = props;

  const logoutOnClick = async () => {
    try {
      await Auth.signOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Flex
      gap="40px"
      direction="row"
      width="100vw"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SLNavBarHeader")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Dashboard"
          onClick={() => {
            dashboardOnClick();
          }}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Create Study Group"
          onClick={handleClickOpenCreateStudyGroupForm}
        ></Button>
          {openCreateStudyGroupForm && (
            <StudyGroupForm open={openCreateStudyGroupForm} toggleForm={toggleCreateStudyGroupForm} />
          )}
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Contact"
          onClick={() => {
            contactOnClick();
          }}
        ></Button>
        
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
      {invites.length > 0 && (<Text>
        {invites.length} Notification{invites.length>1?"s":""}
      </Text>)}
        <IconButton aria-label="notifications" size="large" color={invites.length>0 ? "primary" : "default"}
        onClick={handleClickOpenNotifications}>
          {invites.length === 0 && (
              <NotificationsNoneIcon
                width="32px"
                height="32px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="notification"
                {...getOverrideProps(overrides, "MyIcon")}
              ></NotificationsNoneIcon>
          )}
          {invites.length > 0 && (
              <NotificationsActiveIcon
                width="32px"
                height="32px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="notification"
                {...getOverrideProps(overrides, "MyIcon")}
              ></NotificationsActiveIcon>
          )}
        </IconButton>
      {openNotifications && (
            <Notifications open={openNotifications} toggleForm={toggleNotifications} userEmail={user} />
          )}
      < Link to="/profile">
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
        </Link>
        <Link to="/">
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Log Out"
          onClick={logoutOnClick}
        ></Button>
        </Link>
      </Flex>
    </Flex>
  );
}