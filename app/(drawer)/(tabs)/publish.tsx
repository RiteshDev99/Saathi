import React from 'react';
import {StatusBar} from 'react-native';
import {Stack} from "expo-router";
import RidePostScreen from "@/src/components/driver/driverRide";

export default function Profile() {
    return (
        <>
            <Stack.Screen options={{headerShown: false}}/>
            <StatusBar backgroundColor="#2E8BC0" barStyle="dark-content"/>
            <RidePostScreen/>
        </>
    );
}
