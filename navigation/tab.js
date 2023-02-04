import * as React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
enableScreens();

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from "../pages/home";
import EditorScreen from "../pages/editor";

import ProfileStack from "./profileStack";
// import HackStack from './hacakthonStack';
import PracticeStack from "./practiceStack";
import HomeStack from "./homeStack";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: "#FFB188",
				// inactiveBackgroundColor: '#16171a',
				// activeBackgroundColor: '#16171a',
				tabBarBackgroundColor: "#16171a",
				tabBarInactiveTintColor: "#d7e2ff",
				lazy: "false",
				tabBarHideOnKeyboard: true,
				tabBarStyle: {
					borderTopWidth: 0.2,
					paddingVertical: 8,
					backgroundColor: "#16171a",
					borderColor: "#4d4e59",
					height: 64,
					paddingBottom: 8,
				},
				headerShown: false,
				tabBarLabelStyle: { fontSize: 12, letterSpacing: 0.2 },
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarLabel: "HomeTabs",
					tabBarIcon: ({ color, size }) => (
						<Feather name="home" color={color} size={size} />
					),
				}}
			/>
			{/* <Tab.Screen
                name="HackStack"
                component={HackStack}
                options={{
                    tabBarLabel: 'Hackthons',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="code" size={size} color={color} />
                    ),
                }} /> */}
			<Tab.Screen
				name="Editor"
				component={EditorScreen}
				options={{
					tabBarLabel: "Editor",
					tabBarIcon: ({ color, size }) => (
						// <FontAwesome5 name="laptop-code" size={size} color={color} />
						<AntDesign name="codesquareo" size={size} color={color} />
					),
				}}
			/>

			<Tab.Screen
				name="PracticeTab"
				component={PracticeStack}
				options={{
					tabBarLabel: "Practice",
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="book" size={size} color={color} />
					),
				}}
			/>

			{/* <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'My Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name="user-o"
                            size={size + 1}
                            color={color}
                        />
                    ),
                }} /> */}
		</Tab.Navigator>
	);
};

export default TabNavigation;
