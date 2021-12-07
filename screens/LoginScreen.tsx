import React from "react"
import { Center, Box, Button } from "native-base"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

const LoginScreen = ({ navigation: any }) => {
  // TODO: Once i make the backend actually authenticate with firebase :)
  const login = () => {
    //blah blah api calls meh
    navigation.navigate("Tab")
  }

  return (
    <Center flex={1} px="5">
      <Box
        bg="sRed.50"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "sRed.400",
          letterSpacing: "lg",
        }}
      >
        The LoginScreen
      </Box>
      <Box bg="sRed.50"></Box>
      <Box bg="oOrange.50"></Box>
      <Box
        position="absolute"
        bottom="0"
        height="50%"
        w="100%"
        bg="gPurple.50"
      ></Box>

      <Button.Group direction={"column"}>
        <Button size="sm">PRIMARY</Button>
        <Button size="sm" colorScheme="secondary">
          SECONDARY
        </Button>
      </Button.Group>
    </Center>
  )
}

export default LoginScreen
