/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function SLLandingPage1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Eyebrow: {},
        Heading: {},
        Body: {},
        Message: {},
        HeroMessage: {},
        Left: {},
        image: {},
        Right: {},
        SLLandingPage1: {},
      },
      variantValues: { mode: "Light" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="100%"
      height="auto" // Set height to 'auto' to accommodate content
      marginTop="50px"
      display="flex"
      justifyContent="center"
      direction="row" // Ensure a horizontal layout
      position="relative"
      padding="0px" // Adjust padding as needed
      {...getOverrideProps(overrides, "SLLandingPage1")}
      {...rest}
    >
      <Flex
        gap="10px"
        width="75%"
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="flex-start" // Align text to the start of the container
        padding="0px 20px" // Add padding for spacing
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="50vw"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Flex
            gap="16px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="40px"
              fontWeight="700"
              color="rgba(64,170,191,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="StudyLink"
              {...getOverrideProps(overrides, "Eyebrow")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Welcome to StudyLink: Your path to study success"
              {...getOverrideProps(overrides, "Heading")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              letterSpacing="0.01px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="At StudyLink, we understand that success in your academic journey often comes through collaboration. That’s why we’ve created a platform that empowers students like you to create &#xA;and discover study groups tailored to your major and college. &#xA;With StudyLink, you’ll have the tools and support you need to excel in your studies."
              {...getOverrideProps(overrides, "Body")}
            ></Text>
          </Flex>
        </Flex>
        <Image
          width="50%"
          display="block"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          src="https://t3.ftcdn.net/jpg/02/55/22/68/360_F_255226859_Rhqr5hflr2esVXHQE1sS1bWxmZxs0gWI.jpg"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </View>
  );
}
