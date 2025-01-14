import { View, Text } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import MyCourse from "../Screen/MyCourse";
import LeaderBoard from "../Screen/LeaderBoard";
import Profil from "../Screen/ProfilScreen";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
export default function Tabnavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="my-course"
        component={MyCourse}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="video" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="leaderboard"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profil"
        component={Profil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-details-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
