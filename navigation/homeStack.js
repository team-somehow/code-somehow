import HomeScreen from "../pages/home";
import Resource from "../pages/Resource";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../pages/Chat";

const Stack = createStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName="Chat"
			screenOptions={{
				headerStyle: { backgroundColor: "#fff" },
				headerTintColor: "#000",
				headerTitleStyle: { fontWeight: "bold" },
				headerBackTitle: " ",
			}}
		>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'HomeScreen',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Resource"
                component={Resource}
                options={{
                    title: 'Resource',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Chat"
                component={Chat}
                options={{
                    title: 'Chat',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
	);
}
