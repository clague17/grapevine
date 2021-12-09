import React from "react"
import { Center, View, Box, Button, VStack, Image, Text } from "native-base"
import { LoginScreenNavigationProp } from "../util/types"
import { Dimensions } from "react-native"
const grapes = require("../assets/grapes.png")
const orange = require("../assets/orange.png")
const strawberry = require("../assets/strawberry.png")

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
      <VStack height="100%">
        <Box
          bg="sRed.100"
          height="25%"
          position="relative"
          top="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={deviceWidth}
        >
          <Image
            source={strawberry}
            alt={"strawberry"}
            flex={1}
            aspectRatio={0.42}
            resizeMode={"contain"}
          />
        </Box>

        <Box
          position="relative"
          bg="oOrange.100"
          height="25%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={deviceWidth}
        >
          <Image
            source={orange}
            alt={"orange"}
            flex={1}
            aspectRatio={0.59}
            resizeMode={"contain"}
          />
        </Box>
        <Box
          position="relative"
          bottom="0"
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="50%"
          width={deviceWidth}
          bg="gPurple.100"
        >
          <Image
            source={grapes}
            aspectRatio={0.42}
            alt={"grapes"}
            display="flex"
            resizeMode={"contain"}
          />
          <Text
            color={"gPurple.500"}
            fontFamily="masthead"
            fontWeight={700}
            fontSize={"40px"}
          >
            GRAPEVINE.
          </Text>
          <Box w={"60%"} display="flex" mt={1}>
            <Button my={5} bg="white">
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
