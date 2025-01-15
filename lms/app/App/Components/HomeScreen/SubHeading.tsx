import { View, Text } from "react-native";
import React from "react";

interface SubHeadingProps {
  text: string;
  color?: string;
}

export default function SubHeading({ text, color }: SubHeadingProps) {
  return (
    <View>
      <Text style={{ fontSize: 24, color: color }}>{text}</Text>
    </View>
  );
}
