import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {router,  useLocalSearchParams} from "expo-router";
import PostCard from "@/src/components/ui/postCard";
import {DriverPostRideData} from "@/types/type";


export const postData: DriverPostRideData[] = [
    {
        id: '1',
        name: 'Kanhaiya',
        date: "2025-09-18",
        day: "Thursday",
        description: "Weekend ride. I will be leaving early morning. Spacious car with music system. 3 seats available.",
        pickupLocation: "Gorakhpur, Sector 2, Near Railway Colony Pune Shivajinagar, JM Road, Opposite Deccan Mall",
        dropLocation: "Lucknow, Charbagh Bus Stand Bangalore Whitefield, ITPL Main Road, Near Phoenix Mall",
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
        date: "2025-09-15",
        day: "Monday",
        description: "Daily tech park commute. Leaving at 8:30 AM sharp. Comfortable hatchback, fuel shared equally.",
        pickupLocation: "Delhi, Connaught Place, Block A Kolkata Salt Lake Sector 5, Technopolis Building Gate",
        dropLocation: "Jaipur, Hawa Mahal Road, Pink City Siliguri Hill Cart Road, Opp. City Centre Mall",
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
        date: "2025-09-22",
        day: "Monday",
        description: "Day trip to Ajmer. Will leave around 7 AM. Friendly driver, good music on the way!",
        pickupLocation: "Mumbai Andheri East, Marol Naka Metro Station Exit Gate Pune Shivajinagar, JM Road, Opposite Deccan Mall",
        dropLocation: "Pune Shivajinagar, JM Road, Opposite Deccan Mall Delhi Rohini Sector 18, Pocket B, Near Mother Dairy Booth",
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
        date: "2025-09-15",
        day: "Monday",
        description: "Daily tech park commute. Leaving at 8:30 AM sharp. Comfortable hatchback, fuel shared equally.",
        pickupLocation: "Bangalore Whitefield, ITPL Main Road, Near Phoenix Mall Lucknow Hazratganj, Charbagh Road, Gate No. 3 Bus Stand",
        dropLocation: "Mysore City Bus Stand, Sayyaji Rao Road, Gate 2 Mumbai Andheri East, Marol Naka Metro Station Exit Gate",
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
        date: "2025-09-20",
        day: "Saturday",
        description: "Evening ride to Electronic City. SUV with AC, room for 4. Prefer non-smokers.",
        pickupLocation: "Kolkata Salt Lake Sector 5, Technopolis Building Gate Varanasi Lanka, BHU Main Gate, Ravidas Park Side",
        dropLocation: "Siliguri Hill Cart Road, Opp. City Centre Mall Prayagraj Civil Lines, MG Road, Opp. Sangam Mall",
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
        date: "2025-09-16",
        day: "Tuesday",
        description: "Daily office commute, leaving around 9 AM. Comfortable sedan with AC. Looking for 2 co-passengers.",
        pickupLocation: "Bangalore Whitefield, ITPL Main Road, Near Phoenix Mall Coimbatore Gandhipuram, 100 Feet Road, Near Central Bus Stand",
        dropLocation: "Mysore City Bus Stand, Sayyaji Rao Road, Gate 2 Hyderabad Gachibowli, DLF Gate No. 2, Telecom Nagar",
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
        <View className='flex-1  mb-5'>
            <View className="flex-row  justify-center items-center pt-4 pb-2 border-b border-gray-200">
                <View className="absolute left-[15px]">
                    <Ionicons
                        size={28}
                        name="arrow-back-outline"
                        color="black"
                        onPress={() => router.dismiss()}
                    />
                </View>
                <Text className='text-xl font-semibold'>Search Result</Text>
            </View>

            <View className="h-full w-full  bg-gray-100">
                <TouchableOpacity
                    className="flex-row items-center border border-gray-500 mx-5 py-4 px-2 rounded-2xl mt-3 mb-3"
                    onPress={() => router.back()}
                    activeOpacity={0.6}
                >
                    <Ionicons
                        size={20}
                        name="chevron-back-outline"
                        color="#9CA3AF"
                    />
                    <View className="flex-row items-center px-8 flex-1">
                        <Text
                            className="flex-1 text-sm font-semibold text-[#9CA3AF] text-left"
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {fromLocation}
                        </Text>

                        <Ionicons
                            size={14}
                            name="arrow-forward"
                            color="#9CA3AF"
                            style={{ marginHorizontal: 8 }}
                        />

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
                    renderItem={({ item }) => (
                        <PostCard
                            item={item}
                            onPress={() =>
                                router.push({
                                    pathname: "/(screens)/RidePostDetails",
                                    params: { id: item.id },
                                })
                            }
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 30,
                        paddingTop: 10,
                        gap: 15,
                        alignItems: "center",
                    }}
                />
            </View>
        </View>
    );

}
