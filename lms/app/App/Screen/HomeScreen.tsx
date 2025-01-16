import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/HomeScreen/Header";
import Color from "../Utils/Color";
import CourseList from "../Components/HomeScreen/CourseList";

export default function HomeScreen() {
  return (
    <View>
      <View
        style={{
          backgroundColor: Color.LIGHT_PRIMARY,
          height: 250,
          padding: 20,
        }}
      >
        <Header />
      </View>
      <View>
        <View style={{ marginTop: -80 }}>
          <CourseList level="Basic" />
        </View>
      </View>
    </View>
  );
}
