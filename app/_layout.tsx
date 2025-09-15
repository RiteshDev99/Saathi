import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "@/global.css";

export default function Layout() {
    return (
        <>
            <StatusBar backgroundColor="#000" barStyle="dark-content" />

            <Stack>
                {/*<Stack.Screen name="(auth)" options={{ headerShown: false }} />*/}
                {/*<Stack.Screen name="(drawer)" options={{ headerShown: false, headerBackTitle:'Back'  }} />*/}
                <Stack.Screen name="(drawer)" options={{ headerShown: false, headerBackTitle:'Back'  }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
        </>
    );
}
