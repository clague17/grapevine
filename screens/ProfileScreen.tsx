import React from "react"

import { Center, Box } from "native-base"
import ProfileScreenNavigationProp from "../util/types"

const ProfileScreen = ({ navigation: ProfileScreenNavigationProp }) => {
  return (
    <Center flex={1} px="3">
      <Box
        bg="oOrange.100"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "oOrange.400",
          letterSpacing: "lg",
        }}
      >
        The Profile Screen
      </Box>
    </Center>
  )
}

export default ProfileScreen
