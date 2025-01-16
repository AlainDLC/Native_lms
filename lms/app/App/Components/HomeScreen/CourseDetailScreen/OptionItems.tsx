import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Color from "@/app/App/Utils/Color";
import { OptionItemProps } from "@/interface/course";

export default function OptionItems({ icon, value }: OptionItemProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 7,
      }}
    >
      <Ionicons name={icon as any} size={18} color={Color.PRIMARY} />
      <Text style={{ color: Color.PRIMARY }}>{value}</Text>
    </View>
  );
}
