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
	TextInput
} from "react-native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
	SimpleLineIcons,
	MaterialCommunityIcons,
	FontAwesome,
} from "@expo/vector-icons";
import Config from "react-native-config";

const { width, height } = Dimensions.get("window");
const Chat = () => {
	const [question, setQuestion] = useState("");
	const [answer,setAnswer]=useState("")

	const handleSubmit =async () => {
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer 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",
			},
		};
		const data = {
			model: "text-davinci-003",
			prompt: question,
			temperature: 0,
			max_tokens: 4000,
			top_p: 1,
			frequency_penalty: 0.5,
			presence_penalty: 0,
		};
		const result=await axios.post("https://api.openai.com/v1/completions",data, config);
        console.log(JSON.parse(result.request["_response"]).choices[0].text)
        setAnswer(JSON.parse(result.request["_response"]).choices[0].text)
	};

	return (
		<SafeAreaView style={styles.container}>
			<TextInput
				onChangeText={setQuestion}
				style={styles.input}
				value={question}
				placeholderTextColor="#50545F"
				placeholder="Enter your query here"
				onSubmitEditing={() => handleSubmit()}
			></TextInput>

			<Text selectable style={{ color: "#D7E2FF", fontSize: 16, fontWeight: '400', textAlign: 'left'}}>
                {answer}
            </Text>


			{/* <TouchableOpacity onPress={handleSubmit} style={{ borderColor: '#FFB188', borderWidth: 1, width: width-80, borderRadius: 100, padding: 16}}>
				<Text style={{ color: '#D7E2FF', fontSize: 18, fontWeight: '600', textAlign: 'center'}}>Submit</Text>
			</TouchableOpacity> */}
		</SafeAreaView>
	);
};

export default Chat;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: "#16171a",
		alignItems: "center",
	},
	input: {
		padding: 16,
		width: width-48,
		borderRadius: 8,
		borderWidth: 0,
		borderColor: '#4d4e59',
		padding: 10,
		color: '#D7E2FF',
		backgroundColor: '#202226'
	},
});
