import * as React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../pages/home';
import HackScreen from '../pages/hack';
import EditorScreen from '../pages/editor';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#ff4411',
                // inactiveBackgroundColor: '#fffaed',
                // activeBackgroundColor: '#fffaed',
                tabBarBackgroundColor: '#fffefd',
                tabBarInactiveTintColor: '#565656',
                lazy: 'false',
                tabBarHideOnKeyboard: true,
                tabBarStyle: { borderTopWidth: 0.2, paddingTop: 4, backgroundColor: '#f9f9f9' },
                headerShown: false,
                tabBarLabelStyle: { fontSize: 12, letterSpacing: -0.4 },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name="home"
                            color={color}
                            size={size + 2}
                        />
                    ),
                }} />
            <Tab.Screen
                name="HackStack"
                component={HackScreen}
                options={{
                    tabBarLabel: 'Hackthons',
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name="box"
                            size={size + 2}
                            color={color}
                        />
                    ),
                }} />
            <Tab.Screen
                name="Editor"
                component={EditorScreen}
                options={{
                    tabBarLabel: 'Editor',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="appstore-o"
                            color={color}
                            size={size + 2}
                        />
                    ),
                }} />
            {/* <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Store',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="storefront-outline"
                            color={color}
                            size={size + 6}
                        />
                    ),
                }} />
            <Tab.Screen
                name="MyAccount"
                component={MyAccountScreen}
                options={{
                    tabBarLabel: 'Account',
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
}

export default TabNavigation;