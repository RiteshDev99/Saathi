import React from 'react';
import { View, Text,  StatusBar, SafeAreaView } from 'react-native';
import { Stack } from "expo-router";

export default function HomeScreen() {

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#2E8BC0" }}>
                <StatusBar backgroundColor="#2E8BC0" barStyle="light-content" />

                <View style={{ flex: 1, }}>
                    <View style={{flex:1, backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 24, marginTop:30,  }}>
                        <View className='flex-row justify-center items-center'>
                            <Text>Welcome To home</Text>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </>
    );
}
