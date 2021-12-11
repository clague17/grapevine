import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import screenOptions from "./CustomTabIcons"

//screens
import ViewMatchesScreen from "../screens/ViewMatchesScreen"
import MatchScreen from "../screens/MatchScreen"
import ProfileScreen from "../screens/ProfileScreen"

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen name="Match" component={MatchScreen} />
      <Tab.Screen name="Matches" component={ViewMatchesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default Tabs
