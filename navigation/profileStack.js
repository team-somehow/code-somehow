import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
enableScreens();

import ProfileScreen from '../pages/p';
import EditProfileScreen from '../pages/editProfile';

const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: '#000',
                headerTitleStyle: { fontWeight: 'bold' },
                headerBackTitle: ' ',
            }}>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'My Profile',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
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

export default ProfileStack;