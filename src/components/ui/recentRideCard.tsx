import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { DriverPostRideData} from "@/types/type";
import { getStatusStyle } from "@/src/utils/statusUtils";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import React from "react";


type Props = {
    item: DriverPostRideData;
    onPress: () => void;
}

const RecentRideCard = ({ item, onPress }: Props) => {

    const { image } = getStatusStyle(item.service ?? "");

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
                        style={{ width: 55, height: 55, borderRadius: 6 }}
                        contentFit="cover"
                        transition={300}
                    />
                    <View className=''>

                        <View className="flex-row items-center gap-6">
                            <Text className="text-base font-bold text-gray-800">{item.pickupLocation}</Text>
                            <Ionicons
                                size={20}
                                name="arrow-forward"
                                color="black"
                            />
                            <Text className="text-base font-bold text-gray-800">{item.dropLocation}</Text>

                        </View>
                        <Text className=" text-sm text-gray-600 font-medium">{item.totalHours}</Text>
                    </View>
                </View>
                <MaterialIcons size={20} name="arrow-forward-ios" color="#9CA3AF" />
            </View>
        </TouchableOpacity>
    );

};

export default RecentRideCard;
