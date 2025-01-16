import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services";
import SubHeading from "./SubHeading";
import Color from "../../Utils/Color";
import CourseItem from "./CourseItem";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { Course } from "@/interface/course";

interface LevelProps {
  level: string | undefined;
}

export type RootStackParamList = {
  "course-detail": { course: Course };
};
export default function CourseList({ level }: LevelProps) {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = () =>
    getCourseList(level).then((resp: any) => {
      setCourseList(resp?.courses);
    });

  return (
    <View style={styles.container}>
      <SubHeading
        text={level + " Courses"}
        color={level === "Basic" ? Color.WHITE : Color.PRIMARY}
      />
      <FlatList
        horizontal={true}
        data={courseList}
        showsHorizontalScrollIndicator={false} // ta bort slidern
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("course-detail", { course: item })
            }
          >
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
