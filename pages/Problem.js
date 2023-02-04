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
import MarkdownPreviewer from "../component/MarkdownPreviewer";
const { width, height } = Dimensions.get("window");

const Problem = ({ route, props,navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsHorizontalScrollIndicator={false}>
				<Text
					style={{
						fontSize: 24,
						fontWeight: "800",
						letterSpacing: 1.8,
						color: "#D7E2FF",
					}}
				>
					{route.params.title}
				</Text>
				<Text
					style={{
						fontSize: 16,
						fontWeight: "800",
						letterSpacing: 1.8,
						color: "#D7E2FF",
					}}
				>
					Time limit- {route.params.time_limit_per_test}s
				</Text>
				<View
					style={{
						backgroundColor: "#363940",
						marginVertical: 20,
						width: "100%",
						padding: 16,
						borderRadius: 8,
					}}
				>
					<Text
						style={{
							color: "#D7E2FF",
							fontSize: 16,
							fontWeight: "800",
							marginBottom: 10,
						}}
					>
						Problem Statement
					</Text>
					<Text
						style={{
							color: "#D7E2FF",
						}}
					>
						{route.params.problemStatment}
					</Text>
				</View>
				<View
					style={{
						backgroundColor: "#363940",
						marginVertical: 20,
						width: "100%",
						padding: 16,
						borderRadius: 8,
					}}
				>
					<Text
						style={{
							color: "#D7E2FF",
							fontSize: 16,
							fontWeight: "800",
							marginBottom: 10,
						}}
					>
						Input Format
					</Text>
					<Text
						style={{
							color: "#D7E2FF",
						}}
					>
						{route.params.input}
					</Text>
				</View>
				<View
					style={{
						backgroundColor: "#363940",
						marginVertical: 20,
						width: "100%",
						padding: 16,
						borderRadius: 8,
					}}
				>
					<Text
						style={{
							color: "#D7E2FF",
							fontSize: 16,
							fontWeight: "800",
							marginBottom: 10,
						}}
					>
						Output Format
					</Text>
					<Text
						style={{
							color: "#D7E2FF",
						}}
					>
						{route.params.output}
					</Text>
				</View>
				<View
					style={{
						backgroundColor: "#363940",
						marginVertical: 20,
						width: "100%",
						padding: 16,
						borderRadius: 8,
					}}
				>
					<Text
						style={{
							color: "#D7E2FF",
							fontSize: 16,
							fontWeight: "800",
							marginBottom: 10,
						}}
					>
						Input Format
					</Text>
					<Text
						style={{
							color: "#D7E2FF",
						}}
					>
						{route.params.input}
					</Text>
				</View>
				<View
					style={{
						backgroundColor: "#363940",
						marginVertical: 20,
						width: "100%",
						padding: 16,
						borderRadius: 8,
					}}
				>
					<Text
						style={{
							color: "#D7E2FF",
							fontSize: 16,
							fontWeight: "800",
							marginBottom: 10,
						}}
					>
						Testcase
					</Text>
					<Text
						style={{
							color: "#D7E2FF",
							fontSize: 12,
							fontWeight: "600",
						}}
					>
						Input:
					</Text>
					<View
						style={{
							backgroundColor: "#202226",
							padding: 16,
							width: "100%",
							borderRadius: 16,
							elevation: 4,
							marginVertical: 16,
							borderWidth: 0.3,
							borderColor: "#dddd11",
						}}
					>
						<Text
							style={{
								color: "#D7E2FF",
								fontWeight: "600",
								fontSize: 16,
								marginBottom: 4,
								fontFamily: "monospace",
							}}
						>
							Input:
						</Text>
						<Text
							style={{
								color: "#D7E2FF",
								fontWeight: "600",
								fontSize: 18,
								fontFamily: "monospace",
							}}
						>
							{route.params.examples[0].input.toString()}
						</Text>
					</View>
					<View
						style={{
							backgroundColor: "#202226",
							padding: 16,
							width: "100%",
							borderRadius: 16,
							elevation: 4,
							marginVertical: 16,
							borderWidth: 0.3,
							borderColor: "#25ff88",
						}}
					>
						<Text
							style={{
								color: "#D7E2FF",
								fontWeight: "600",
								fontSize: 16,
								marginBottom: 4,
								fontFamily: "monospace",
							}}
						>
							Output:
						</Text>
						<Text
							style={{
								color: "#D7E2FF",
								fontWeight: "600",
								fontSize: 18,
								fontFamily: "monospace",
							}}
						>
							{route.params.examples[0].output.toString()}
						</Text>
					</View>
				</View>
				<View
					style={{
						// backgroundColor: "#363940",
						marginVertical: 20,
						width: "100%",
						padding: 16,
						borderRadius: 8,
						justifyContent:"center",
						alignItems:"center"
					}}
				>
					
					<TouchableOpacity onPress={()=>navigation.navigate('Editor')} style={{ borderColor: '#FFB188', borderWidth: 1, width: width - 80, borderRadius: 100, padding: 16, alignSelf: 'center' }}>
          <Text
            style={{
              ...{
                color: '#D7E2FF', fontSize: 18, fontWeight: '600', textAlign: 'center'
              },
            }}
          >
            Go to editor
          </Text>
        </TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: "#16171a",
		alignItems: "center",
	},
});

export default Problem;
