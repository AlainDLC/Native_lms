import { StatusBar } from "expo-status-bar";

import "react-native-reanimated";

import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View>
      <Text>Nu händer det</Text>
      <StatusBar style="auto" />
    </View>
  );
}
