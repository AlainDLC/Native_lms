import { StyleSheet, Text, View } from "react-native";

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import LoginScreen from "./App/Screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import Tabnavigation from "./App/Navigations/Tabnavigation";
const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
export default function App() {
  return (
    <ClerkProvider publishableKey={key || ""}>
      <View style={styles.container}>
        <SignedIn>
          <Tabnavigation />
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
