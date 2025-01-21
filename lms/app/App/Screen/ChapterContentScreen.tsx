import { View } from "react-native";
import React from "react";
import Content from "../Components/ChapterContent/Content";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ContentProps } from "@/interface/course";

export type RootStackParamList = {
  ChapterContentScreen: { content: string | undefined };
};

export default function ChapterContentScreen(): JSX.Element | null {
  const route =
    useRoute<RouteProp<RootStackParamList, "ChapterContentScreen">>();

  const { content } = route.params;

  if (!content) {
    return null;
  }

  return (
    <View>
      <Content content={content as any} />
    </View>
  );
}
