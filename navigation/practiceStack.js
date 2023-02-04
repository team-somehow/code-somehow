import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
enableScreens();

import PracticeScreen from '../pages/practice';

const Stack = createStackNavigator();

function PracticeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Practice"
            screenOptions={{
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: '#000',
                headerTitleStyle: { fontWeight: 'bold' },
                headerBackTitle: ' ',
            }}>
            <Stack.Screen
                name="Practice"
                component={PracticeScreen}
                options={{
                    title: 'My Profile',
                    headerShown: false
                }}
            />
            {/* <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{
                    title: 'Edit Profile',
                    headerShown: false
                }}
            /> */}
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

export default PracticeStack;