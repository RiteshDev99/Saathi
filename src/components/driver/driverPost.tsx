import React from 'react';
import {View, Text,} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";



export default function driverPost() {

    return (
        <>
            <SafeAreaView style={{flex: 1, backgroundColor: "white",}}>
                <View className="flex-row justify-center items-center pt-4 pb-2 border-b border-gray-200">
                    <Text className="text-xl font-semibold text-black">
                        Post Your Ride
                    </Text>
                </View>




            </SafeAreaView>
        </>
    );
}
