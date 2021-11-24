

import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function TabBarIcon({ name, color ,size,focused}) {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={focused? 'tomato': color}
    />
  )
}
