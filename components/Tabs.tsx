import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//screens
import ViewMatchesScreen from "../screens/ViewMatchesScreen"
import MatchScreen from "../screens/MatchScreen"
import ProfileScreen from "../screens/ProfileScreen"

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Match" component={MatchScreen} />
      <Tab.Screen name="Matches" component={ViewMatchesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default Tabs
