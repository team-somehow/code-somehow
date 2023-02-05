import React, { useState } from 'react';
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
import axios from 'axios';
const { width, height } = Dimensions.get("window");


function CodeToken(props) {
  const [data, setData] = useState("");

  function fetchCode(token) {
		const options1 = {
		  method: "GET",
		  url:
			"https://judge0-ce.p.rapidapi.com/submissions/" +
			token,
		  params: { base64_encoded: "false", fields: "*" },
		  headers: {
			'X-RapidAPI-Key': 'd9c008a226mshfa14a911cfe2a58p1298f2jsn3e4bd10a7367',
			'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
		  },
		};
	
		axios
		.request(options1)
		.then(function (res) {
		  // console.log(res.data);
      setData(res.data.source_code)
		  if (res.data?.status?.description!=null && res.data?.status?.description==="Accepted") {
	
		  }
		  return;
		})
		.catch(function (error) {
		  console.error(error);
		});
	  }

  return (

      	<TouchableOpacity style={styles1.card} onPress={() => {
          if (data.length===0) fetchCode(props.token)
        }}>
					<Text style={styles1.linkTitle}>{props.token}</Text>
					<Text style={styles1.linkTitle}>{data}</Text>
				</TouchableOpacity>
  )
}

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
	  alignItems: 'center',
	  justifyContent: 'space-between',
	  width: width - 48,
	  borderRadius: 8,
	  elevation: 6,
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

export default CodeToken
