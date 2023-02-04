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
import EditorScreen from '../pages/editor';

import ProfileStack from './profileStack';
import HackStack from './hacakthonStack';
import PracticeStack from './practiceStack';

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
                component={HackStack}
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

            <Tab.Screen
                name="PracticeTab"
                component={PracticeStack}
                options={{
                    tabBarLabel: 'Practice',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name="user-o"
                            size={size + 1}
                            color={color}
                        />
                    ),
                }} />

            <Tab.Screen
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
                }} />
        </Tab.Navigator>
    );
}

export default TabNavigation;