import { View, Text } from "react-native";
import React from "react";

import Markdown from "react-native-markdown-display";


export default function MarkdowPreviewer({data}) {
	return (
		<View>
			<Markdown>{data}</Markdown>
			<Text>markdowPreviewer</Text>
		</View>
	);
}
