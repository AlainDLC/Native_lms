import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/HomeScreen/Header";
import Color from "../Utils/Color";

export default function HomeScreen() {
  return (
    <View>
      <View
        style={{ backgroundColor: Color.PRIMARY, height: 250, padding: 20 }}
      >
        <Header />
      </View>
    </View>
  );
}
