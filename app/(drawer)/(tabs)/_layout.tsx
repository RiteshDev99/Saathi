import { Tabs } from 'expo-router';
import {FontAwesome6, Octicons} from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#2E8BC0',
                tabBarInactiveTintColor: '#666',
                tabBarShowLabel: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 80,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <View
                            style={{
                                backgroundColor: focused ? "#2E8BC0" : "transparent",
                                width: 55,
                                height: 29,
                                borderRadius: 16,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Octicons
                                size={20}
                                name="home"
                                color={focused ? "#fff" : color}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <View
                            style={{
                                backgroundColor: focused ? "#2E8BC0" : "transparent",
                                width: 55,
                                height: 29,
                                borderRadius: 16,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <FontAwesome6
                                size={20}
                                name="user"
                                color={focused ? "#fff" : color}
                            />
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}
