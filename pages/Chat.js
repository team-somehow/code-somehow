import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Config from "react-native-config";

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
			max_tokens: 60,
			top_p: 1,
			frequency_penalty: 0.5,
			presence_penalty: 0,
		};
		const result=await axios.post("https://api.openai.com/v1/completions",data, config);
        console.log(JSON.parse(result.request["_response"]).choices[0].text)
        setAnswer(JSON.parse(result.request["_response"]).choices[0].text)
	};

	return (
		<View>
			<Text>AI Assistant</Text>

			<TextInput
				onChangeText={setQuestion}
				style={styles.input}
				value={question}
			></TextInput>

            <Text>
                {answer}
            </Text>


			<TouchableOpacity onPress={handleSubmit}>
				<Text>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Chat;

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});
