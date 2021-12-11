import React from "react"
import { Image } from "native-base"
const grapes = require("../assets/grapes.png")

const GrapeIcon = (color, size: number) => {
  return (
    <Image
      source={grapes}
      height={size}
      alt={"grapes"}
      display="flex"
      resizeMode={"contain"}
    />
  )
}

export default GrapeIcon
