import 'react-native-gesture-handler';
import React, { useEffect, useState, useRef } from "react";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigation/tab';
// import AppLoading from 'expo-app-loading';
// import { useFonts } from 'expo-font';

export default props => {
  return (
    <>
      <StatusBar
        barStyle="light"
        hidden={false}
        backgroundColor="#16171a"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </>
  );
};
