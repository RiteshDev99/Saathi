import React from 'react';
import {StatusBar} from 'react-native';
import { Stack, useLocalSearchParams} from "expo-router";
import DriverRegistration from "@/src/components/form/driverRegistration";
import {SafeAreaView} from "react-native-safe-area-context";

import RideSearch from "@/src/components/users/rideSearch";

export default function RideScreen() {

    const { title } = useLocalSearchParams<{ title: string }>();

    return (
        <>
            <Stack.Screen options={{headerShown: false }} />
            <StatusBar backgroundColor="#2E8BC0" barStyle="dark-content" />
            <SafeAreaView className='flex-1 bg-gray-100'>
                {title === 'register' && <DriverRegistration />}
                {title === 'rideSearch' && <RideSearch />}

            </SafeAreaView>


        </>
    );
}
