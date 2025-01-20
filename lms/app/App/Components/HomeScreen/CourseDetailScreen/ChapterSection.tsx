import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { Course } from "@/interface/course";
import Ionicons from "@expo/vector-icons/Ionicons";
import Color from "@/app/App/Utils/Color";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  "content-chapter": {
    content: {
      heading: string;
      description: { markdown: string };
      output: { markdown: string };
    };
  };
};

export default function ChapterSection({
  capters,
  userEnrolledCourse,
}: Course) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const togglrColor =
    userEnrolledCourse?.length === 0 && userEnrolledCourse
      ? "#8b8686ce"
      : "#23f68d";

  const OnChapterPress = (content: {
    heading: string;
    description: { markdown: string };
    output: { markdown: string };
  }) => {
    if (userEnrolledCourse?.length === 0) {
      ToastAndroid.show("Please Enroll First", ToastAndroid.SHORT);
      return;
    } else {
      navigation.navigate("content-chapter", { content: content });
    }
  };

  return (
    capters && (
      <View
        style={{
          padding: 15,
          backgroundColor: Color.WHITE,
          marginTop: 10,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 20 }}>Chapters</Text>
        {capters?.map((item, index) => (
          <TouchableOpacity
            onPress={() => OnChapterPress(item?.content)}
            key={index}
            style={[
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                justifyContent: "space-between",
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
                borderColor: togglrColor,
              },
            ]}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text
                style={[
                  {
                    fontSize: 20,
                    color: togglrColor,
                  },
                ]}
              >
                {index + 1}.
              </Text>
              <Text
                key={item.id}
                style={{
                  fontSize: 15,
                  color:
                    userEnrolledCourse?.length === 0 && userEnrolledCourse
                      ? "#8b8686ce"
                      : Color.LIGHT_PRIMARY,
                }}
              >
                {item.tilte}
              </Text>
            </View>
            {userEnrolledCourse?.length === 0 && userEnrolledCourse ? (
              <Ionicons name="lock-closed" size={20} color="#8b8686ce" />
            ) : (
              <Ionicons name="play" size={20} color="#23f68d" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    )
  );
}
