import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack"

type RootStackParamList = {
  Tabs: undefined
  Login: undefined
  Match: undefined
  Matches: { sort: "latest" | "top" } | undefined
  Profile: { userId: string }
}

export interface LoginScreenNavigationProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">
}

export interface MatchScreenNavigationProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "Match">
}

export interface MatchesScreenNavigationProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "Matches">
}

export interface ProfileScreenNavigationProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "Profile">
}
