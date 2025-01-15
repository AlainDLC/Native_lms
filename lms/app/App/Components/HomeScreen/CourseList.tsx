import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services";
import SubHeading from "./SubHeading";
import Color from "../../Utils/Color";

interface LevelProps {
  level: string | undefined;
}

interface Course {
  id: string;
  name: string;
  level: string;
  price: string | number;
  time: string;
  author: string;
  banner: { url: string } | null;
  capters: { id: string }[];
}

export default function CourseList({ level }: LevelProps) {
  const [courseList, setCourseList] = useState<Course[]>([]);
  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = () =>
    getCourseList(level).then((resp: any) => {
      setCourseList(resp?.courses);
    });

  return (
    <View style={{ padding: 20 }}>
      <SubHeading
        text={level + " Courses"}
        color={level == "Basic" ? Color.WHITE : Color.PRIMARY}
      />
      <FlatList
        horizontal={true}
        data={courseList}
        showsHorizontalScrollIndicator={false} // ta bort slidern
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              backgroundColor: Color.WHITE,
              marginRight: 25,
              borderRadius: 15,
            }}
          >
            <Image
              source={{ uri: item?.banner?.url }}
              style={{
                width: 210,
                height: 150,
                borderRadius: 15,
              }}
            />
            <View style={{ padding: 7 }}>
              <Text style={{ fontSize: 17, color: Color.PRIMARY }}>
                {item.name}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  padding: 7,
                }}
              >
                <Ionicons name="book-outline" size={18} color={Color.PRIMARY} />
                <Text style={{ color: Color.PRIMARY }}>
                  {item?.capters?.length} Chapters
                </Text>
              </View>
              <View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    padding: 7,
                  }}
                >
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={18}
                    color={Color.PRIMARY}
                  />
                  <Text style={{ color: Color.PRIMARY }}>{item?.time} Hr</Text>
                </View>
              </View>
            </View>
            <Text style={{ padding: 7 }}>
              {item?.price == 0 ? "Free" : item.price} 💵
            </Text>
          </View>
        )}
      />
    </View>
  );
}
