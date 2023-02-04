import React, { useEffect, useState } from "react";
import {
	TouchableOpacity,
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	StatusBar,
	Image,
	Dimensions,
	ScrollView,
	ImageBackground,
	FlatList,
	Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
import MarkdowPreviewer from "../component/MarkdownPreviewer";

// const copy = `# h1 Heading 8-)

// **This is some bold text!**

// This is normal text
// `;

const HomeScreen = ({ navigation, route }) => {
	return (
		<SafeAreaView style={styles.container}>
			{/* <MarkdowPreviewer data={copy} /> */}
			<Text>HomeScreen</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: "#eaeaea",
	},
});

export default HomeScreen;
