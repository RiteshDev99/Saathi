import {View, Text} from "react-native";
import {Image} from "expo-image";
import {DriverPostRideData} from "@/types/type";
import {getStatusStyle} from "@/src/utils/statusUtils";
import React from "react";

type Props = {
    item: DriverPostRideData;
};

const PostCardDetails = ({item}: Props) => {

    const {image} = getStatusStyle(item.service ?? "");


    return (
        <View className='h-full w-full flex-col items-center mt-5 gap-5 '>
            <View
                className="h-[9vh] w-[90vw] bg-white rounded-2xl shadow-md px-5 overflow-hidden flex-row items-center gap-8">
                <Image
                    source={image}
                    style={{width: 46, height: 26}}
                    contentFit="cover"
                    transition={300}
                />

                <View className="flex-row items-start py-2">
                    <View className="flex-1 flex-col justify-between">
                        <View>
                            <Text className="text-lg font-semibold">{item.pickupTime}</Text>
                            <Text className="text-[9px] font-light text-gray-500">{item.totalHours}</Text>
                        </View>
                        <Text className="text-lg font-semibold mt-1">{item.DropTime}</Text>
                    </View>
                </View>
            </View>
            <View className="min-h-[9vh] h-auto w-[90vw] bg-white rounded-2xl shadow-md px-7 overflow-hidden">
                <Text className="mt-4 text-[#848a94]">Day & Date</Text>

                <View className="flex-row mt-4 gap-6">
                    <Text className='text-lg font-semibold'>{item.day}</Text>
                    <Text className='text-lg font-semibold'>{item.date}</Text>
                </View>
            </View>

            <View className="min-h-[18vh] h-auto w-[90vw] bg-white rounded-2xl shadow-md px-7 overflow-hidden gap-2">
                <Text className="mt-4 text-[#848a94]">Booking Locations</Text>

                <View className="flex-col mt-4 gap-8">
                    <View className="flex-row gap-5">
                        <Image
                            source={require('@/assets/icons/target.png')}
                            style={{width: 18, height: 18, tintColor: '#036c99', marginTop: 2}}
                            contentFit="cover"
                            transition={300}
                        />
                        <Text
                            className="text-sm font-semibold flex-1"
                            numberOfLines={3}
                            ellipsizeMode="tail"
                        >
                            {item.pickupLocation}
                        </Text>
                    </View>


                    <View className="flex-1 border-l border-gray-400 "/>


                    <View className="flex-row gap-5 pb-5">
                        <Image
                            source={require('@/assets/icons/point.png')}
                            style={{width: 18, height: 18, tintColor: '#b31717', marginTop: 2}}
                            contentFit="cover"
                            transition={300}
                        />
                        <Text
                            className="text-sm font-semibold flex-1"
                            numberOfLines={3}
                            ellipsizeMode="tail"
                        >
                            {item.dropLocation}
                        </Text>
                    </View>
                </View>
            </View>
            <View className="min-h-[14vh] h-auto w-[90vw] bg-white rounded-2xl shadow-md px-7 overflow-hidden gap-2">
                <Text className="mt-4 text-[#848a94]">Description</Text>

                <View className="flex-col mt-4 gap-8">
                    <Text>{item.description}</Text>
                </View>
            </View>
        </View>
    );
};

export default PostCardDetails;
