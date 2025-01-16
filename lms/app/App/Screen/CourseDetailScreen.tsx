import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import Color from "../Utils/Color";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Course } from "@/interface/course";
import DetailSection from "../Components/HomeScreen/CourseDetailScreen/DetailSection";
import ChapterSection from "../Components/HomeScreen/CourseDetailScreen/ChapterSection";

export type RootStackParamList = {
  "course-detail": { course: Course };
};

type CourseDetailRouteProp = RouteProp<RootStackParamList, "course-detail">;

export default function CourseDetailScreen() {
  const navigation = useNavigation();
  const params = useRoute<CourseDetailRouteProp>().params;

  useEffect(() => {
    if (params?.course) {
    }
  }, [params?.course]);

  return (
    params?.course && (
      <View style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={40} color={Color.LIGHT_PRIMARY} />
        </TouchableOpacity>
        <DetailSection course={params?.course} />
        <ChapterSection />
      </View>
    )
  );
}
