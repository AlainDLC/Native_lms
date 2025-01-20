import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import Color from "../Utils/Color";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Course } from "@/interface/course";
import DetailSection from "../Components/HomeScreen/CourseDetailScreen/DetailSection";
import ChapterSection from "../Components/HomeScreen/CourseDetailScreen/ChapterSection";
import { ScrollView } from "react-native-gesture-handler";
import { enrollCourse, getEnrollCourse } from "../Services";
import { useUser } from "@clerk/clerk-expo";

export type RootStackParamList = {
  "course-detail": { course: Course };
};

type CourseDetailRouteProp = RouteProp<RootStackParamList, "course-detail">;

export default function CourseDetailScreen() {
  const [userEnrolledCourse, setUserEnrolledCourse] = useState([]);
  const navigation = useNavigation();
  const params = useRoute<CourseDetailRouteProp>().params;
  const { user } = useUser();

  useEffect(() => {
    if (user && params?.course) {
      GetEnrolledCourse();
    }
  }, [params?.course, user]);

  const UserEnrolledCourse = () => {
    enrollCourse(
      params?.course?.id,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      if (user && resp) {
        ToastAndroid.show("Course Enrolled successfylly!", ToastAndroid.SHORT);
        GetEnrolledCourse();
      }
    });
  };

  const GetEnrolledCourse = () => {
    getEnrollCourse(
      params?.course?.id,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      setUserEnrolledCourse(resp?.userEnrolledCourses);
    });
  };
  return (
    params?.course && (
      <ScrollView style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={40} color={Color.LIGHT_PRIMARY} />
        </TouchableOpacity>
        <DetailSection
          course={params?.course}
          enrollCourse={() => UserEnrolledCourse()}
          userEnrolledCourse={userEnrolledCourse}
        />
        <ChapterSection
          capters={params?.course?.capters}
          userEnrolledCourse={userEnrolledCourse}
        />
      </ScrollView>
    )
  );
}
