import React from 'react';
import {View, Text,} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {router, useLocalSearchParams} from "expo-router";


export default function RideSearch() {
    const { fromLocation, toLocation } = useLocalSearchParams();


    return (
        <>
            <View style={{flex: 1, backgroundColor: "white",}}>
                <View className="flex-row  justify-center items-center pt-4 pb-2 border-b border-gray-200">
                    <View className="absolute left-[15px]">
                        <Ionicons
                            size={28}
                            name="arrow-back-outline"
                            color="black"
                            onPress={() => router.dismiss()}
                        />
                    </View>
                    <View className='flex-row justify-center items-center gap-x-3'>
                        <Text className="text-xl font-semibold text-black">
                            {fromLocation}
                        </Text>
                        <Ionicons
                            size={20}
                            name="arrow-forward"
                            color="#9CA3AF"
                            onPress={() => router.dismiss()}
                        />
                        <Text className="text-xl font-semibold text-black">
                             {toLocation}
                        </Text>
                    </View>

                </View>

            </View>
        </>
    );
}
