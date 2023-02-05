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
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

import problemStatments from "../constants/data";

const Item = ({ title, navigation, difficulty, item }) => (
	<TouchableOpacity
		onPress={() => navigation.navigate("Problem", { ...item })}
		style={{
			backgroundColor: "#202226",
			padding: 8,
			paddingHorizontal: 24,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			width: width - 48,
			borderRadius: 8,
			elevation: 6,
			flexDirection: "row",
			marginBottom: 16,
		}}
	>
		<Text
			style={{
				color: "#D7E2FF",
				fontSize: 16,
			}}
		>
			{title.substring(0, 15)} {title.length >= 15 && '...'}
		</Text>
		<View
			style={{
				backgroundColor: "#16171a",
				padding: 8,
				borderRadius: 8,
				elevation: 8
			}}
		>
			<Text
				style={{
					color: "#D7E2FF",
					fontSize: 12,
				}}
			>
				Time limit -{item.time_limit_per_test}s
			</Text>
		</View>
	</TouchableOpacity>
);

const PracticeScreen = ({ navigation, route }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading}>Questions</Text>
			<FlatList
				data={problemStatments}
				keyExtractor={item=>item.title}
				renderItem={({ item }) => (
					<Item
						title={item.title}
						difficulty={item.difficulty}
						navigation={navigation}
						item={item}
					/>
				)}
			></FlatList>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: "#16171a",
		// alignItems: "left",
	},
	heading: {
		textAlign: 'left',
		color: "#D7E2FF",
		fontSize: 24,
		fontWeight: "600",
		letterSpacing: 0.8,
		marginBottom: 24,
	},
});

export default PracticeScreen;
