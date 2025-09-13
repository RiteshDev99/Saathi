import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack initialRouteName="welcome">
            <Stack.Screen name="welcome" options={{ headerShown: false }} />
            <Stack.Screen name="sign-in" options={{ headerShown: false }} />
            <Stack.Screen name="otp" options={{ headerShown: false }} />
        </Stack>
    );
};

export default Layout;
