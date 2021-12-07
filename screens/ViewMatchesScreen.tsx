import React from "react"

import { Center, Box } from "native-base"

const ViewMatchesScreen = () => {
  return (
    <Center flex={1} px="3">
      <Box
        bg="gPurple.50"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "gPurple.400",
          letterSpacing: "lg",
        }}
      >
        The ViewMatchesScreen
      </Box>
    </Center>
  )
}

export default ViewMatchesScreen
