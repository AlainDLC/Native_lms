import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./App/LoginScreen";
import {
  ClerkProvider,
  ClerkLoaded,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";

export default function App() {
  const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider publishableKey={key || ""}>
      <View style={styles.container}>
        <SignedIn>
          <Text>You are Sign in</Text>
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
