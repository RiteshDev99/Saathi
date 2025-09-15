import React from 'react';
import { StatusBar } from 'react-native';
import { Stack } from "expo-router";
import RideBookingScreen from "@/src/components/home";

export default function HomeScreen() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false, }}/>
            <StatusBar backgroundColor="#2E8BC0" barStyle="light-content" />
            <RideBookingScreen />
        </>
    );
}
