import { Stack} from "expo-router";
import {StatusBar} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Calendar from "@/src/components/calendar";

export default function CalendarScreen () {

    return(
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                    animation: "fade_from_bottom",
                }}
            />

            <StatusBar backgroundColor="#2E8BC0" barStyle="dark-content" />
            <SafeAreaView className='flex-1 bg-gray-100'>
                <Calendar/>
            </SafeAreaView>


        </>
    )

}
