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
  useNavigateAction,
} from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function SLLandingPage3(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Join StudyLink Today": {},
        "Unlock your academic potential and boost your learning experience. Sign up for StudyLink now and make your studies more engaging and effective.":
          {},
        "Main Body": {},
        Button: {},
        "Type Lock Up": {},
        SLLandingPage3: {},
      },
      variantValues: { colorMode: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const buttonOnClick = useNavigateAction({ type: "url", url: "/dashboard/" });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="100%"
      height="50%"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="50px 15px 50px 15px"
      backgroundColor="rgba(233,249,252,1)"
      display="flex"
      {...getOverrideProps(overrides, "SLLandingPage3")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
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
          display="flex"
          {...getOverrideProps(overrides, "Main Body")}
        >
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
            children="Join StudyLink Today"
            {...getOverrideProps(overrides, "Join StudyLink Today")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Unlock your academic potential and boost your learning experience. Sign up for StudyLink now and make your studies more engaging and effective."
            {...getOverrideProps(
              overrides,
              "Unlock your academic potential and boost your learning experience. Sign up for StudyLink now and make your studies more engaging and effective."
            )}
          ></Text>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Get started"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
