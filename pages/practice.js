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

const dummyData = [
	{
		id: 1,
		title: "Presents",
		difficulty: 100,
		question: `# Foobar

        Foobar is a Python library for dealing with word pluralization.
        
        ## Installation
        
        Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.
        
        `,
	},
	{
		id: 2,
		title: "Presents",
		difficulty: 200,
		question: `# Foobar

        Foobar is a Python library for dealing with word pluralization.
        
        ## Installation
        
        Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.
        
        `,
	},
	{
		id: 3,
		title: "Presents",
		difficulty: 100,
		question: `# Foobar

        Foobar is a Python library for dealing with word pluralization.
        
        ## Installation
        
        Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.
        
        `,
	},
];

const Item = ({ title, navigation, difficulty, item }) => (
	<TouchableOpacity onPress={() => navigation.navigate("Problem", item)}>
		<View>
			<Text>{title}</Text>
			<Text>{difficulty}</Text>
		</View>
	</TouchableOpacity>
);

const PracticeScreen = ({ navigation, route }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Questions</Text>
			<FlatList
				data={dummyData}
				renderItem={({ item }) => (
					<Item
						title={item.title}
						difficulty={item.difficulty}
						navigation={navigation}
						item={item}
					/>
				)}
				keyExtractor={(item) => item.id}
			></FlatList>
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

export default PracticeScreen;
