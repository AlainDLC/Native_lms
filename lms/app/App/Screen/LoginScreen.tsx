import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import app from "../../../assets/images/kaw.jpg";
import google from "../../../assets/images/google.png";
import Color from "../Utils/Color";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Handle sign-in/sign-up process here if needed
      }
    } catch (err) {
      // Log and display a simple error message for debugging
      console.error("Login error:", err);
      alert("An error occurred while logging in. Please try again.");
    }
  }, [startOAuthFlow]);

  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image
        source={app}
        style={{
          width: 250,
          height: 500,
          objectFit: "contain",
          marginTop: -100,
        }}
      />
      <View
        style={{
          height: 400,
          backgroundColor: Color.PRIMARY,
          width: "100%",
          marginTop: 100,
          padding: 40,
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
          BASHATA SENSUAL
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: Color.WHITE,
            fontStyle: "normal",
          }}
        >
          Let’s make every move unforgettable.
        </Text>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: Color.WHITE,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            borderRadius: 99,
            justifyContent: "flex-start",
            padding: 10,
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Image
            source={google}
            style={{
              width: 35,
              height: 35,
              marginLeft: 10,
            }}
          />

          <Text
            style={{
              alignItems: "center",
              fontSize: 20,
              color: Color.PRIMARY,
              fontStyle: "normal",
            }}
          >
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
