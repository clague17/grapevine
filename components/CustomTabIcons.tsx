import React from "react"
import GrapeIcon from "./GrapeIcon"

const screenOptions = (route: any, color: any) => {
  let iconName
  var icon = React.Component
  switch (route.name) {
    case "Match":
      console.log("THIS ONE")
      return <GrapeIcon color={color} size={24} />
    case "Browse":
      iconName = "appstore-o"
      break
    case "Library":
      iconName = "folder1"
      break
    default:
      break
  }

  return
}

export default screenOptions
