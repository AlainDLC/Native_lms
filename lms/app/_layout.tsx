import { StyleSheet, Text, View } from "react-native";

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import LoginScreen from "./App/Screen/LoginScreen";

import Tabnavigation from "./App/Navigations/Tabnavigation";
const KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
export default function App() {
  return (
    <ClerkProvider publishableKey={KEY || ""}>
      <View style={styles.container}>
        <Tabnavigation />
      </View>
    </ClerkProvider>
  );
}

/* <ClerkProvider publishableKey={KEY || ""}>
      <View style={styles.container}>
        <SignedIn>
          <Tabnavigation />
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
});
