import { Text, View } from "react-native";
import { Course } from "@/interface/course";
import Ionicons from "@expo/vector-icons/Ionicons";
import Color from "@/app/App/Utils/Color";

export default function ChapterSection({ capters }: Course) {
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              justifyContent: "space-between",
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 10,
              borderColor: "#8b8686ce",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: "#8b8686ce" }}>
                {index + 1}.
              </Text>
              <Text key={item.id} style={{ fontSize: 15, color: "#8b8686ce" }}>
                {item.tilte}
              </Text>
            </View>
            <Ionicons name="lock-closed" size={20} color="#8b8686ce" />
          </View>
        ))}
      </View>
    )
  );
}
