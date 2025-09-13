import { Tabs } from 'expo-router';
import {FontAwesome6, Ionicons, Octicons} from "@expo/vector-icons";
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
                    tabBarIcon: ({ color }) => (
                        <Octicons size={20} name="home" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="ridePost"
                options={{
                    title: 'Publish',
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={28} name="add-circle-outline" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 size={20} name="circle-user" color={color} />
                    ),
                }}
            />

        </Tabs>
    );
}
