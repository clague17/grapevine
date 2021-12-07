/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react"
import { StyleSheet, useColorScheme } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

// styles
import { NativeBaseProvider, extendTheme } from "native-base"
// navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Tabs from "./components/Tabs"

const theme = extendTheme({
  colors: {
    // Add thematic colors
    gPurple: {
      50: "#f7e4ff",
      100: "#e2b3ff",
      200: "#cd81fd",
      300: "#ba4ffc",
      400: "#a721fb",
    },
    sRed: {
      50: "#ffe5e5",
      100: "#fababa",
      200: "#f18f8f",
      300: "#e96262",
      400: "#e23737",
    },
    oOrange: {
      50: "#fff5df",
      100: "#ffe1b3",
      200: "#fecc83",
      300: "#feb852",
      400: "#fea11b",
    },
  },
})

const App = () => {
  const isDarkMode = useColorScheme() === "dark"

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const Stack = createNativeStackNavigator()

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Tabs />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
})

export default App
