import {View, Text, StatusBar} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import {postData} from "@/src/components/users/rideSearch";
import PostCardDetails from "@/src/components/ui/postCardDetails";
import React from "react";
const BookingDetails = () => {
    const { id } = useLocalSearchParams();
    const booking = postData.find((bookingId) => bookingId.id === id);

    if (!booking) {
        return (
            <View className="h-full w-full items-center justify-center">
                <Text className="text-lg font-bold text-red-500">Booking not found</Text>
            </View>
        );
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "Ride Post Details",
                    headerTitleStyle:{
                        fontSize:18,
                    },
                    headerTitleAlign: "center",
                    animation: "flip",
                }}

            />

            <StatusBar backgroundColor="#2E8BC0" barStyle="dark-content" />

            <View className="h-full w-full items-center">
                <PostCardDetails item={booking} />
            </View>
        </>

    );
};

export default BookingDetails;
