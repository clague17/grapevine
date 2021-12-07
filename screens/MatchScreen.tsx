import React from "react"

import { Center, Box } from "native-base"

const MatchScreen = () => {
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
    </Center>
  )
}

export default MatchScreen
