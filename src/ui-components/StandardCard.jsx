/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, SwitchField, Text } from "@aws-amplify/ui-react";
export default function StandardCard(props) {
  const {
    openGroup = "accepting ",
    studyGroupCard,
    overrides,
    ...rest
  } = props;
  const standardCardOnClick = useNavigateAction({
    type: "url",
    url: studyGroupCard?.id,
  });
  const viewGroupOnClick = useNavigateAction({
    type: "url",
    url: `${"/studygroup/"}${studyGroupCard?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="336px"
      height="329px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        standardCardOnClick();
      }}
      {...getOverrideProps(overrides, "StandardCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="196px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={studyGroupCard?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="0"
        direction="column"
        width="336px"
        height="169px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="132px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
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
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={studyGroupCard?.groupName}
            {...getOverrideProps(overrides, "Pooja\u2019s Group")}
          ></Text>
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
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={studyGroupCard?.className}
            {...getOverrideProps(overrides, "CSE 103")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
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
            children={studyGroupCard?.groupOwner}
            {...getOverrideProps(overrides, "p@ucsc.edu")}
          ></Text>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="16px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="174px"
              height="18px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Accepting Members"
              {...getOverrideProps(overrides, "Accepting Members")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="16px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children=" "
              {...getOverrideProps(overrides, "Text")}
            ></Text>
            <SwitchField
              width="unset"
              height="unset"
              shrink="0"
              label="On"
              size="default"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="start"
              openGroup={
                studyGroupCard?.acceptingMembers == "True" ? openGroup : group
              }
              {...getOverrideProps(overrides, "SwitchField")}
            ></SwitchField>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
