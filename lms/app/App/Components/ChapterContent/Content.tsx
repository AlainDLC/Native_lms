import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import ProgressBar from "./ProgressBar";
import { ContentProps } from "@/interface/course";
import ContentItem from "./ContentItem";

export default function Content({ content }: ContentProps) {
  return (
    <View style={{}}>
      <ProgressBar contentLength={content?.length} contentIndex={1} />
      <FlatList
        data={content}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item, index }) => (
          <View
            style={{ width: Dimensions.get("screen").width, padding: 20 }}
            key={index}
          >
            <Text style={{ fontSize: 20, marginTop: 12 }}>{item?.heading}</Text>
            <ContentItem
              description={item.description?.html}
              output={item.output?.html}
            />
          </View>
        )}
      />
    </View>
  );
}
