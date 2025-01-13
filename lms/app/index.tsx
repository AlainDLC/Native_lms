import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./App/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <LoginScreen />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
