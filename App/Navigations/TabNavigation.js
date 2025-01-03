import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Ongoing from '../Screens/Ongoing';


export default function TabNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            
            <Tab.Screen name="Ongoing" component={Ongoing} />            
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})

//please work

