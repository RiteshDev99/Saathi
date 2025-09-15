import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView, FlatList,
} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {BookingProps} from "@/types/type";
import RecentRideCard from "@/src/components/ui/recentRideCard";
import {router, useLocalSearchParams} from "expo-router";

export const BookingData: BookingProps[] = [
    {
        id: "1",
        price: 910,
        time: "Sat 20 Sept, 1 passenger",
        service: "Car",
        status: "Cancelled",
        area: "T1 Cab Pickup - Gates 8 to 10, Indira Gandhi International Airport, New Delhi, Terminal 3 Departures Roadway",
        location: "Jaunpur Bus Stand → Gorakhpur",
    },
    {
        id: "2",
        price: 730,
        time: "Sat 23 Sept, 1 passenger",
        service: "Bike",
        status: "Ongoing",
        area: "T2 Cab Pickup - Gates 23 to 10 Cab Pickup - Gates 8 to 10, Indira Gandhi",
        location: "Basti  → Jaunpur",
    },
    {
        id: "3",
        price: 180,
        time: "Sat 2 Sept, 1 passenger",
        service: "Car",
        status: "Completed",
        area: "T2 Cab Pickup - Gates 23 to 10 Near Main Market, Opposite Central Mall,",
        location: "Jaunpur Bus Stand → Gorakhpur",
    },
    {
        id: "4",
        price: 310,
        time: "Thu, Aug 30 - 11:18am",
        service: "Commercial",
        status: "Ongoing",
        area: "T2 Cab Pickup - Gates 23 to 10 T2 Cab Pickup - Gates 2",
        location: "Punjab Station Road Gates 23 to 10 Cab Pickup - Gates 8",
    },
    {
        id: "5",
        price: 110,
        time: "Thu, Aug 30 - 11:18am",
        service: "Auto",
        status: "Cancelled",
        area: "T2 Cab Pickup - Gates 23 to 10",
        location: "Punjab Station Road",
    },
    {
        id: "6",
        price: 530,
        time: "Thu, Aug 30 - 11:18am",
        service: "Car",
        status: "Completed",
        area: "T2 Cab Pickup - Gates 23 to 10",
        location: "Punjab Station Road",
    },
];

export default function RideBookingScreen() {
    const [passengerCount, setPassengerCount] = useState(1);
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');

    const { PickupLocation, DropLocation } = useLocalSearchParams<{
        PickupLocation?: string;
        DropLocation?: string;
    }>();

    useEffect(() => {
        if (PickupLocation) {
            setPickupLocation(PickupLocation);
        }
        if (DropLocation) {
            setDropLocation(DropLocation);
        }

        console.log(PickupLocation);
    }, [PickupLocation, DropLocation]);




    const searchData = () => {
        // router.push({
        //     pathname: "/(screens)/RideScreen",
        //     params: {
        //         title: 'rideSearch',
        //         fromLocation: fromLocation,
        //         toLocation: toLocation,
        //         passengerCount: passengerCount,
        //     },
        //
        // })
    }

    const CarIllustration = () => (
        <View className="relative h-32 justify-center items-center mb-8">
            <View className="absolute bottom-0 w-full h-16">
                <View className="absolute bottom-0 left-0 w-20 h-12 bg-gray-400 opacity-60 rounded-t-full"/>
                <View className="absolute bottom-0 left-16 w-24 h-16 bg-gray-500 opacity-40 rounded-t-full"/>
                <View className="absolute bottom-0 right-16 w-20 h-14 bg-gray-400 opacity-50 rounded-t-full"/>
                <View className="absolute bottom-0 right-0 w-16 h-10 bg-gray-500 opacity-30 rounded-t-full"/>
            </View>
            <View className="absolute bottom-8 w-full h-2 bg-gray-700"/>

            <View className="absolute bottom-0 flex-row justify-around w-full">
                <View className="w-12 h-8 bg-gray-600 rounded-t-full"/>
                <View className="w-12 h-8 bg-gray-600 rounded-t-full"/>
                <View className="w-12 h-8 bg-gray-600 rounded-t-full"/>
            </View>
            <View className="absolute bottom-10 flex-row justify-center space-x-4">
                <View className="relative">
                    <View className="w-10 h-4 bg-blue-500 rounded-lg"/>
                    <View className="absolute -top-2 left-1 w-8 h-3 bg-blue-600 rounded"/>
                    <View className="absolute -bottom-1 left-1 w-2 h-2 bg-gray-800 rounded-full"/>
                    <View className="absolute -bottom-1 right-1 w-2 h-2 bg-gray-800 rounded-full"/>
                </View>
                <View className="relative">
                    <View className="w-10 h-4 bg-gray-600 rounded-lg"/>
                    <View className="absolute -top-2 left-1 w-8 h-3 bg-gray-700 rounded"/>
                    <View className="absolute -bottom-1 left-1 w-2 h-2 bg-gray-800 rounded-full"/>
                    <View className="absolute -bottom-1 right-1 w-2 h-2 bg-gray-800 rounded-full"/>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-[#2E8BC0]">
            <ScrollView className="flex-1">
                <View className="pt-8 pb-6 px-6">
                    <Text className="text-white text-3xl font-bold text-center mb-8 leading-10">
                    </Text>

                    <CarIllustration/>
                </View>

                <View className="flex-1 bg-white rounded-t-3xl px-6 pt-8 pb-6 min-h-screen">

                    <TouchableOpacity className="mb-6"
                                      activeOpacity={1.6}

                                      onPress={() => router.push({
                                          pathname: '/(screens)/SearchScreen',
                                          params: {
                                              PlaceHolderName: "Enter your pickup location",
                                              fieldType: "pickup",

                                          }
                                      })}
                    >
                        <View className="flex-row items-center  gap-x-3 mb-3">
                            <Image
                                source={require('@/assets/icons/target.png')}
                                className="w-7 h-7 "

                            />
                            <TextInput
                                placeholder="Enter pickup location"
                                editable={false}
                                value={pickupLocation}
                                className="flex-1 text-lg text-gray-600 py-2"
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>
                        <View className="ml-8 h-px bg-gray-200"/>
                    </TouchableOpacity>

                    <TouchableOpacity className="mb-6"
                                      activeOpacity={1.6}
                                      onPress={() => router.push({
                                          pathname: '/(screens)/SearchScreen',
                                          params: {
                                              PlaceHolderName: "Enter your drop location",
                                              fieldType: "drop",
                                          }
                                      })}


                    >
                        <View className="flex-row items-center gap-x-3 mb-3">
                            <Image
                                source={require('@/assets/icons/location-pin.png')}
                                className="w-7 h-7"

                            />
                            <TextInput
                                placeholder="Enter drop location"
                                editable={false}
                                value={dropLocation}
                                className="flex-1 text-lg text-gray-600 py-2"
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>
                        <View className="ml-8 h-px bg-gray-200"/>
                    </TouchableOpacity>

                    <TouchableOpacity className="mb-6">
                        <View className="flex-row items-center gap-x-3 mb-3">
                            <Ionicons name="calendar-outline" size={24} color="#6B7280"/>
                            <Text className="text-lg text-gray-700 py-2">Today</Text>
                        </View>
                        <View className="ml-10 h-px bg-gray-200"/>
                    </TouchableOpacity>

                    <View className="flex-row items-center justify-between mb-8">
                        <View className="flex-row items-center gap-x-3">
                            <Ionicons name="person-outline" size={24} color="#6B7280"/>
                            <Text className="text-lg text-gray-700">{passengerCount}</Text>
                        </View>
                        <View className="flex-row items-center gap-x-3">
                            <TouchableOpacity
                                onPress={() => setPassengerCount(Math.max(1, passengerCount - 1))}
                                className="w-8 h-8 rounded-full border border-gray-300 items-center justify-center"
                            >
                                <Text className="text-gray-600 text-xl">–</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setPassengerCount(passengerCount + 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 items-center justify-center"
                            >
                                <Text className="text-gray-600 text-xl">+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={searchData}
                        disabled={!pickupLocation || !dropLocation || passengerCount < 1}
                        className={`py-3 px-20 rounded-xl mb-6 flex-row items-center justify-center gap-x-5 ${
                            pickupLocation && dropLocation&& passengerCount > 0 ? "bg-[#2E8BC0]" : "border border-gray-600"
                        }`}
                    >
                        <Text
                            className={`text-xl font-semibold text-center ${
                                pickupLocation && dropLocation && passengerCount > 0 ? "text-white" : "text-gray-500"
                            }`}
                        >
                            Search
                        </Text>
                    </TouchableOpacity>

                    <View className=" flex-col  mb-1 ">
                        <View className="flex-row items-center mb-3 gap-x-2">
                            <MaterialIcons size={25} name="history" color="#000"/>
                            <Text className="text-xl font-bold text-gray-800 ml-2">
                                Recent Rides
                            </Text>
                        </View>
                    </View>

                    <View className=' flex-col items-center'>
                        <FlatList
                            data={BookingData.slice(0, 3)}
                            keyExtractor={(item, index) => item.id ?? index.toString()}
                            scrollEnabled={false}
                            ItemSeparatorComponent={() => <View style={{height: 10}}/>}
                            renderItem={({item}) => (
                                <RecentRideCard
                                    item={item}
                                    // onPress={() =>
                                    //     router.push({
                                    //         pathname: "/(screens)/BookingDetails",
                                    //         params: { id: item.id },
                                    //     })
                                    // }
                                />
                            )}
                        />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
