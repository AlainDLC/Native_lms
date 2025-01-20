import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Course } from "@/interface/course";
import Color from "@/app/App/Utils/Color";
import OptionItems from "./OptionItems";

interface DetailSectionProps {
  course: Course;
  enrollCourse: () => void;
  userEnrolledCourse: any;
}

export default function DetailSection({
  course,
  enrollCourse,
  userEnrolledCourse,
}: DetailSectionProps) {
  console.log(userEnrolledCourse);
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
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 24, marginTop: 10, color: Color.PRIMARY }}>
          {course?.name}
        </Text>
        <View>
          <View style={styles.rowStyle}>
            <OptionItems
              icon="book-outline"
              value={course?.capters?.length + " Chapter "}
            />
            <OptionItems icon="time-outline" value={course?.time + "Hr "} />
          </View>
          <View style={styles.rowStyle}>
            <OptionItems icon="person-circle-outline" value={course?.author} />
            <OptionItems icon="cellular-outline" value={course?.level} />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: 160 }}
          >
            <Text style={{ fontSize: 20 }}>Description</Text>
            <Text style={{ color: Color.LIGHT_PRIMARY }}>
              {course?.description?.markdown}
            </Text>
          </ScrollView>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-evenly",
          }}
        >
          {userEnrolledCourse?.length === 0 && userEnrolledCourse ? (
            <TouchableOpacity
              onPress={() => enrollCourse()}
              style={{
                padding: 10,
                backgroundColor: Color.PRIMARY,
                borderRadius: 15,
              }}
            >
              <Text style={{ color: Color.WHITE, textAlign: "center" }}>
                Enroll for free
              </Text>
            </TouchableOpacity>
          ) : null}

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: Color.LIGHT_PRIMARY,
              borderRadius: 15,
            }}
          >
            <Text style={{ color: Color.WHITE, textAlign: "center" }}>
              Membership $12.90/Mon
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
