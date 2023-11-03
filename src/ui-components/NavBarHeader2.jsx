import React, { useState } from "react";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
// import { Auth } from "../../amplify/backend/auth"; // Replace with your authentication library
// import { Auth } from 'aws-amplify';
// import NavBarHeader2 from "./NavBarHeader2";


export default function NavBarHeader2(props) {
  // const [isSigningUp, setIsSigningUp] = useState(false);
  // const [username, setUsername] = useState(""); // Set an initial value
  // const [password, setPassword] = useState(""); // Set an initial value

  // const handleSignUp = async () => {
  //   try {
  //     setIsSigningUp(true);
  //     const { user } = await Auth.signUp({ username, password });
  //     console.log(user);
  //   } catch (error) {
  //     console.log("error signing up:", error);
  //   } finally {
  //     setIsSigningUp(false);
  //   }
  // };

  const { overrides, ...rest } = props;

  return (
    <Flex
      gap="10px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="16px 32px 16px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...overrides["NavBarHeader2"]}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...overrides["Frame 5"]}
      >
        <View
          width="34.55px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...overrides["Amplify Mark"]}
        >
          {/* Icon rendering code here */}
        </View>
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          {...overrides["Home"]}
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Contact"
          {...overrides["Contact"]}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...overrides["actions"]}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Log in"
          {...overrides["Button39493466"]}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          // children={isSigningUp ? "Signing up..." : "Sign up"}
          // onClick={handleSignUp}
          {...overrides["Button39493467"]}
        ></Button>
      </Flex>
    </Flex>
  );
}


export { NavBarHeader2 };