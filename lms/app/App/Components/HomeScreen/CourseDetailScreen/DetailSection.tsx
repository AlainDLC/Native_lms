import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Course } from "@/interface/course";
import Color from "@/app/App/Utils/Color";

interface DetailSectionProps {
  course: Course;
}

export default function DetailSection({ course }: DetailSectionProps) {
  return (
    <View
      style={{ padding: 10, borderRadius: 15, backgroundColor: Color.WHITE }}
    >
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get("screen").width * 0.84,
          height: 190,
          borderRadius: 15,
        }}
      />
      <Text style={{ fontSize: 24, marginTop: 10, color: Color.PRIMARY }}>
        {course?.name}
      </Text>
    </View>
  );
}
