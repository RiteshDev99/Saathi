import React from 'react';
import {View, Text, TouchableOpacity, FlatList,} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {router, useLocalSearchParams} from "expo-router";
import PostCard from "@/src/components/ui/postCard";
import {DriverPostRideData} from "@/types/type";


const postData: DriverPostRideData[] = [
    {
        id: '1',
        name: 'Kanhaiya',
        date: '',
        day: '',
        description: '',
        pickupLocation: 'Gorakhpur',
        dropLocation: 'Lucknow',
        pickupTime: '09:00',
        DropTime: '14:00',
        totalHours: '5h 00m',
        price: 580,
        service: 'Car',
        rating: '★ 2.0',
        emptySets: '4',
    },

    {
        id: '2',
        name: 'Kanhaiya',
        date: '',
        day: '',
        description: '',
        pickupLocation: 'Lucknow',
        dropLocation: 'Noida',
        pickupTime: '1:00pm',
        DropTime: '8:00am',
        totalHours: '5h 00m',
        price: 1280,
        service: 'Bike',
        rating: '★ 2.0',
        emptySets: '4',
    },

    {
        id: '3',
        name: 'Kanhaiya',
        date: '',
        day: '',
        description: '',
        pickupLocation: 'Gorakhpur',
        dropLocation: 'Ayodhya',
        pickupTime: '09:00',
        DropTime: '14:00',
        totalHours: '5h 00m',
        price: 1280,
        service: 'Car',
        rating: '★ 2.0',
        emptySets: '4',
    },

    {
        id: '4',
        name: 'Kanhaiya',
        date: '',
        day: '',
        description: '',
        pickupLocation: 'Gorakhpur',
        dropLocation: 'Jaunpur',
        pickupTime: '12:00pm',
        DropTime: '08:00pm',
        totalHours: '5h 00m',
        price: 380,
        service: 'Car',
        rating: '★ 2.0',
        emptySets: '4',
    },
    {
        id: '5',
        name: 'Kanhaiya',
        date: '',
        day: '',
        description: '',
        pickupLocation: 'Lucknow',
        dropLocation: 'Delhi',
        pickupTime: '10:00',
        DropTime: '18:00pm',
        totalHours: '15h 00m',
        price: 1580,
        service: 'Bike',
        rating: '★ 2.0',
        emptySets: '4',
    },
    {
        id: '6',
        name: 'Ram Prasad',
        date: '',
        day: '',
        description: '',
        pickupLocation: 'Basti',
        dropLocation: 'Ayodhya',
        pickupTime: '06:00am',
        DropTime: '14:00',
        totalHours: '2h 00m',
        price: 180,
        service: 'Car',
        rating: '★ 2.0',
        emptySets: '4',
    }


]


export default function RideSearch() {
    const {fromLocation, toLocation} = useLocalSearchParams();


    return (
        <>
            <View style={{flex: 1,}}
                  className='bg-gray-100 justify-center '

            >
                <TouchableOpacity
                    className="flex-row items-center border border-gray-300 mx-4 py-4 px-2 rounded-2xl mt-3"
                    onPress={() => router.dismiss()}
                    activeOpacity={0.6}

                >
                    <Ionicons
                        size={20}
                        name="chevron-back-outline"
                        color="#9CA3AF"
                    />
                    <View className="flex-row items-center px-8">
                        <Text
                            className="flex-1 text-sm font-semibold text-[#9CA3AF] text-left"
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {fromLocation}
                        </Text>

                        <Ionicons size={14} name="arrow-forward" color="#9CA3AF" style={{marginHorizontal: 8}}/>

                        <Text
                            className="flex-1 text-sm font-semibold text-[#9CA3AF] text-right"
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {toLocation}
                        </Text>
                    </View>

                </TouchableOpacity>
                <FlatList
                    data={postData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <PostCard item={item}/>}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        alignItems: 'center',
                        paddingBottom: 20,
                        paddingTop: 20,
                        gap: 15,
                    }}
                />


            </View>
        </>
    );
}
