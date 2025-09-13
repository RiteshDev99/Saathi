import React from 'react';
import { View, Text,  StatusBar, SafeAreaView } from 'react-native';
import { Stack } from "expo-router";

export default function RidePostScreen() {

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

                <View style={{ flex: 1, }}>
                    <View style={{flex:1, backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 24, marginTop:30,  }}>
                        <View className='flex-row justify-center items-center'>
                            <Text>Welcome To RidePost</Text>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </>
    );
}
