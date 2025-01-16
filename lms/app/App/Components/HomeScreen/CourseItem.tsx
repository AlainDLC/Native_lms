import { View, Text, Image } from "react-native";
import React from "react";
import Color from "../../Utils/Color";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { CourseItemProps } from "@/interface/course";

export default function CourseItem({ item }: CourseItemProps) {
  return (
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
        <Text style={{ fontSize: 17, color: Color.PRIMARY }}>{item.name}</Text>
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
            <Text style={{ color: Color.PRIMARY }}>{item?.time}</Text>
          </View>
        </View>
      </View>
      <Text style={{ padding: 7, color: Color.PRIMARY }}>
        💵 {item?.price == 0 ? "Free" : item.price}$
      </Text>
    </View>
  );
}
