import {View, Text, Image, TouchableOpacity} from "react-native";
import {DriverPostRideData} from "@/types/type";
import {getStatusStyle} from "@/src/utils/statusUtils";
import React from "react";

type DriverPostData = {
    item: DriverPostRideData;
    onPress?: () => void;
};

const PostCard = ({item, onPress}: DriverPostData) => {
    const {image} = getStatusStyle(item.service ?? "");

    return (
        <TouchableOpacity
            className="h-[20vh] w-[90vw] bg-white rounded-2xl shadow-md px-3 overflow-hidden"
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View className="flex-row justify-between px-4  py-5 border-b border-gray-200">
                <View className="flex-row gap-x-6 flex-1">
                    <View className="flex-col justify-between">
                        <View className="flex-col">
                            <Text className="text-lg font-semibold">{item.pickupTime}</Text>
                            <Text className="text-[9px] font-light text-gray-500">{item.totalHours}</Text>
                        </View>
                        <Text className="text-lg font-semibold mt-1">{item.DropTime}</Text>
                    </View>

                    <View className="items-center justify-center py-2">
                        <Image
                            source={require('@/assets/icons/target.png')}
                            className="w-3 h-3"
                        />
                        <View className="flex-1 border-l border-gray-400"/>
                        <Image
                            source={require('@/assets/icons/location-pin.png')}
                            className="w-3 h-3"
                        />
                    </View>

                    <View className="flex-col justify-between flex-1 pr-4">
                        <Text
                            className="text-base font-medium"
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {item.pickupLocation}
                        </Text>
                        <Text
                            className="text-base font-medium"
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {item.dropLocation}
                        </Text>
                    </View>
                </View>

                <Text className="text-xl font-bold text-green-600 ml-2">₹{item.price}</Text>
            </View>

            <View className="flex-1 flex-row items-center justify-between p-4">
                <View className="flex-row items-center gap-x-4">
                    <Image
                        source={image}
                        className="h-14 w-14"
                    />
                    <View className="h-10 w-10 bg-gray-300 rounded-full justify-center items-center">
                        <Image
                            source={require("@/assets/icons/person.png")}
                            className="h-6 w-6"
                        />
                    </View>
                    <View>
                        <Text className="text-base font-semibold">{item.name}</Text>
                        <Text className="text-sm text-gray-500">{item.rating}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PostCard;
