import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import RenderHtml from "react-native-render-html";
import Color from "../../Utils/Color";

interface ContentItemProps {
  description: string;
  output: string;
}

export default function ContentItem({ description, output }: ContentItemProps) {
  const [isRun, setIsRun] = useState(false);
  const { width } = useWindowDimensions();
  const source = {
    html: description,
  };
  const sourceOutput = {
    html: output,
  };

  const toggleRun = () => {
    setIsRun((prevState) => !prevState); // Växla mellan true och false
  };

  return (
    <View>
      <RenderHtml contentWidth={width} source={source} tagsStyles={tagStyles} />
      {output != null ? (
        <TouchableOpacity onPress={toggleRun}>
          <Text
            style={{
              padding: 12,
              backgroundColor: Color.PRIMARY,
              borderRadius: 10,
              fontSize: 14,
              color: Color.WHITE,
              textAlign: "center",
              width: 100,
            }}
          >
            Run
          </Text>
        </TouchableOpacity>
      ) : null}

      {isRun ? (
        <RenderHtml
          contentWidth={width}
          source={sourceOutput}
          tagsStyles={tagStyles}
        />
      ) : null}
    </View>
  );
}

const tagStyles = {
  body: {
    fontSize: 16,
  },
  ul: {},
};
