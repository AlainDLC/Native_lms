import { Image, Text, View } from "react-native";
import React, { Component } from "react";
import app from "./../../assets/images/kaw.jpg";
import Color from "./Utils/Color";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={{ display: "flex", alignItems: "center" }}>
        <Image
          source={app}
          style={{
            width: 250,
            height: 500,
            objectFit: "contain",
            marginTop: 70,
          }}
        />
        <View
          style={{
            height: 400,
            backgroundColor: Color.PRIMARY,
            width: "100%",
            marginTop: -100,
            padding: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 35,
              color: Color.WHITE,
              fontStyle: "italic",
            }}
          >
            LMS
          </Text>
        </View>
      </View>
    );
  }
}
