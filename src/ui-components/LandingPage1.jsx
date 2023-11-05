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
import NavBarHeader2 from "./NavBarHeader2"

export default function LandingPage1(props) {
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
        LandingPage1: {},
      },
      variantValues: { mode: "Light" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <div>
      <NavBarHeader2/>
      <Flex
        width="100vw"
        marginTop="10px"
        display="flex"
        justifyContent="space-between"
        position="relative"
        {...getOverrideProps(overrides, "LandingPage1")}
        {...rest}
      >
        <Flex
          gap="10px"
          direction="column"
          width="60vw"
          height="40vh"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          top="0px"
          left="0px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Left")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
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
              width="unset"
              height="unset"
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
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
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
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
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
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
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
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="35vw"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          top="0px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Right")}
        >
          <Image
            width="90%"
            // height="100%"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="unset"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
      </Flex>
    </div>
  );
}
