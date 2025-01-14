import { StyleSheet, TextInput, View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Color from "../../Utils/Color";
import teacher from "../../../../assets/images/esco.jpeg";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function Header() {
  const { user, isLoaded, isSignedIn } = useUser();
  return (
    isLoaded && (
      <View>
        <View style={[{ justifyContent: "space-between" }, styles.rowStyle]}>
          <View style={styles.rowStyle}>
            <Image
              source={{ uri: user?.imageUrl }}
              style={{ width: 50, height: 50, borderRadius: 99 }}
            />
            <View>
              <Text style={{ color: Color.WHITE }}>Welcome</Text>
              <Text style={styles.mainText}>{user?.fullName}</Text>
            </View>
          </View>
          <View>
            <Image
              source={teacher}
              style={{ width: 100, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: Color.WHITE,
            padding: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 40,
            paddingRight: 15,
            marginTop: 25,
          }}
        >
          <TextInput placeholder="Search Courses" style={{ fontSize: 18 }} />
          <EvilIcons name="search" size={40} color={Color.PRIMARY} />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  mainText: { color: Color.WHITE, fontSize: 20 },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
