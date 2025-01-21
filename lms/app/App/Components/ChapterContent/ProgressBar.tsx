import { View, Text } from "react-native";
import React from "react";
import Color from "../../Utils/Color";

type ProgressBarProps = {
  contentLength: number;
  contentIndex: number;
};

export default function ProgressBar({
  contentLength,
  contentIndex,
}: ProgressBarProps) {
  const arrSize = Array.from(
    { length: contentLength },
    (_, index) => index + 1
  );

  const width = 100 / contentLength;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        padding: 20,
      }}
    >
      {arrSize?.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: `${
              index <= contentIndex ? Color.PRIMARY : Color.LIGHT_PRIMARY
            }`,
            width: `${width}%`,
            borderRadius: 10,
            height: 10,
            margin: 5,
            flex: 1,
          }}
        ></View>
      ))}
    </View>
  );
}
