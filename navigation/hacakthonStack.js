import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
enableScreens();

import HackScreen from '../pages/viewHack';
import HackInDetailScreen from '../pages/hackInDetail';

const Stack = createStackNavigator();

function HackStack() {
    return (
        <Stack.Navigator
            initialRouteName="Hackathon "
            screenOptions={{
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: '#000',
                headerTitleStyle: { fontWeight: 'bold' },
                headerBackTitle: ' ',
            }}>
            <Stack.Screen
                name="Hackathon"
                component={HackScreen}
                options={{
                    title: 'Hackathon',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="HackDetail"
                component={HackInDetailScreen}
                options={{
                    title: 'Edit Profile',
                    headerShown: false
                }}
            />
            {/* <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                    title: 'Home Page',
                    headerShown: false
                }}
            /> */}
        </Stack.Navigator>
    );
}

export default HackStack;