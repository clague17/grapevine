import React from "react"
import { Center, Box, Button, VStack } from "native-base"
import { LoginScreenNavigationProp } from "../util/types"
import { Dimensions } from "react-native"

const deviceWidth = Dimensions.get("window").width //full width
const deviceHeight = Dimensions.get("window").height //full height

const LoginScreen = ({ navigation }: LoginScreenNavigationProp) => {
  // TODO: Once i make the backend actually authenticate with firebase :)
  const login = () => {
    //blah blah api calls meh
    navigation.navigate("Tabs")
  }

  const register = () => {
    //blah blah register app blah
    console.log("let's register!")
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
      <VStack height="100%">
        <Box
          bg="sRed.100"
          height="25%"
          position="relative"
          top="0"
          width={deviceWidth}
        ></Box>
        <Box
          position="relative"
          bg="oOrange.100"
          height="25%"
          width={deviceWidth}
        ></Box>
        <Box
          position="relative"
          bottom="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="50%"
          width={deviceWidth}
          bg="gPurple.100"
        >
          <Box w={"60%"} display="flex">
            <Button mb={5} bg="white">
              Get started
            </Button>
            <Button onPress={login} bg={"gPurple.400"}>
              Log in
            </Button>
          </Box>
        </Box>
      </VStack>
    </Center>
  )
}

export default LoginScreen
