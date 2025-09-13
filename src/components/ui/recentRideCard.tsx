import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { BookingProps } from "@/types/type";
import { getStatusStyle } from "@/src/utils/statusUtils";
import {MaterialIcons} from "@expo/vector-icons";
import React from "react";

type BookingCardProps = {
    item: BookingProps;
    onPress?: () => void;
};

const RecentRideCard = ({ item, onPress }: BookingCardProps) => {

    const { image } = getStatusStyle(item.status ?? "", item.service ?? "");

    return (
        <TouchableOpacity
            className=" h-[7vh] w-[89vw] rounded-2xl  flex-col justify-center px-3"
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View className="flex-row items-center justify-between ">
                <View className="flex-row items-center gap-6">
                    <Image
                        source={image}
                        style={{ width: 46, height: 30, borderRadius: 6 }}
                        contentFit="cover"
                        transition={300}
                    />
                    <View>

                        <Text className="text-base font-bold text-gray-800">{item.location}</Text>
                        <Text className=" text-sm text-gray-600 font-medium">{item.time}</Text>
                    </View>
                </View>
                <MaterialIcons size={20} name="arrow-forward-ios" color="#9CA3AF" />
            </View>
        </TouchableOpacity>
    );

};

export default RecentRideCard;
