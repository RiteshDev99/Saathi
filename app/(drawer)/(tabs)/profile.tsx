import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { FontAwesome5, Ionicons, Feather } from '@expo/vector-icons';
import { router, Stack } from "expo-router";

export default function ProfileScreen() {
    const menuItems = [
        { icon: FontAwesome5, name: "car", title: "Rides", onPress: () => router.push('/') },
        { icon: Ionicons, name: "globe-outline", title: "App Language" },
        { icon: Feather, name: "log-out", title: "Logout", onPress: () => router.push('/(auth)/sign-in') },
    ];

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 24, marginTop:30 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 60,
                                    backgroundColor: '#2E8BC0',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>R</Text>
                            </View>

                            <View style={{ marginLeft: 16, flex: 1 }}>
                                <Text style={{ fontSize: 20, fontWeight: '600', color: '#333', marginBottom: 4 }}>
                                    Ritesh
                                </Text>
                                <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
                                    riteshchaudhary63430@gmail.com
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 14, color: '#2E8BC0', fontWeight: '500' }}>
                                        View Profile
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingHorizontal: 20,
                                        paddingVertical: 16,
                                        borderBottomWidth: index === menuItems.length - 1 ? 0 : 0.5,
                                        borderBottomColor: '#e0e0e0',
                                    }}
                                    onPress={item.onPress}
                                >
                                    <Icon name={item.name} size={20} color="#666" />
                                    <Text
                                        style={{
                                            marginLeft: 16,
                                            fontSize: 16,
                                            color: '#333',
                                            flex: 1,
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text style={{ color: '#ccc', fontSize: 18 }}>›</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}
