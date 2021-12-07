import React from "react"

import { Center, Box, Button } from "native-base"
import { MatchScreenNavigationProp } from "../util/types"

const MatchScreen = ({ navigation }: MatchScreenNavigationProp) => {
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
        The MatchScreen
      </Box>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </Center>
  )
}

export default MatchScreen
