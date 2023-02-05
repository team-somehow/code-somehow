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
import AsyncStorage from '@react-native-async-storage/async-storage';
import CodeToken from "./CodeToken";

const { width, height } = Dimensions.get("window");

const MyCode = ({ navigation, route }) => {

	// getting data
	const getUser = async () => {
		try {
			const userData = await JSON.parse(await AsyncStorage.getItem("savedProbsMock"));
      if (userData===null) return [];
			return userData;
		} catch (error) {
			console.log(error);
		}
	};

    const [data, setData] = useState([]);

    useEffect(() => {
        const getInfo = async () => {
			// console.log(await getUser());
            setData(await getUser());
        }
		
        getInfo();
    })
	  

	return (

		<View style={styles1.container}>
			<Text style={styles1.heading}>My Submissions</Text>
			<FlatList
			data={data}
			keyExtractor={item => item}
			renderItem={({ item })=> (
				<CodeToken token={item}/>
			)}
			/>
		</View>
	
	);
};


const styles1 = StyleSheet.create({
	container: {
	  flex: 1,
	  padding: 24,
	  backgroundColor: "#16171a",
	  // alignItems: "center",
	},
	card: {
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
	},
	heading: {
	  textAlign: 'left',
	  color: "#D7E2FF",
	  fontSize: 24,
	  fontWeight: "600",
	  letterSpacing: 0.8,
	  marginBottom: 24,
	},
	linkTitle: {
	  color: "#D7E2FF",
	  marginVertical: 10,
	  fontSize: 16,
	},
  });
  

export default MyCode;
