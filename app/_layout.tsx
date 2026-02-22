import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "@/global.css";
import {Provider} from "react-redux";
import {store} from "@/src/store/store";

export default function Layout() {
    return (
        <>
       <Provider store={store}>
            <StatusBar backgroundColor="#000" barStyle="dark-content" />
            <Stack>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(drawer)" options={{ headerShown: false, headerBackTitle:'Back'  }} />
            </Stack>
       </Provider>
        </>
    );
}
