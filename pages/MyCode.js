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
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("window");

const MyCode = ({ navigation, route }) => {

	// getting data
	const getUser = async () => {
		try {
			const userData = await JSON.parse(await AsyncStorage.getItem("savedProbsMock"));
            console.log(userData);
      if (userData===null) return [];
			return userData;
		} catch (error) {
			console.log(error);
		}
	};

    const [data, setData] = useState([]);

    useEffect(() => {
        const getInfo = async () => {
            console.log(await getUser())
            setData(await getUser());
        }
        getInfo();
        
    }, [])

	return (
		<SafeAreaView style={styles.container}>
			<Text>My Submissions</Text>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<Text>{item}</Text>
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

export default MyCode;
