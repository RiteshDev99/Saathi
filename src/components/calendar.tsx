import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";

export default function Calendar() {
    const [date, setDate] = useState<Date>(new Date());
    const [showPicker, setShowPicker] = useState<boolean>(false);

    useEffect(() => {
        setShowPicker(true);
    }, []);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        if (event.type === "dismissed") {
            setShowPicker(false);
            return;
        }

        if (selectedDate) {
            setDate(selectedDate);

            router.push({
                pathname: "/(drawer)/(tabs)",
                params: { date: formatDate(selectedDate) },
            });
        }

        setShowPicker(Platform.OS === "ios");
    };

    const formatDate = (date: Date): string => {
        return date.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <View className="flex-1 mb-5 bg-white">
            <View className="flex-row justify-center items-center pt-4 pb-2 border-b border-gray-200">
                <View className="absolute left-[15px]">
                    <Ionicons
                        size={28}
                        name="arrow-back-outline"
                        color="black"
                        onPress={() => router.dismiss()}
                    />
                </View>
                <Text className="text-xl font-semibold">Schedule a Date</Text>
            </View>
            <View className="flex-1 justify-center items-center">

                {showPicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        </View>
    );
}
