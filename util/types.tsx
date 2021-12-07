import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack"

type RootStackParamList = {
  Login: undefined
  Match: undefined
  Matches: { sort: "latest" | "top" } | undefined
  Profile: { userId: string }
}

export type MatchScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Match"
>

export type MatchesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Matches"
>

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Profile"
>
