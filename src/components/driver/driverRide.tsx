import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";


export default function RidePostScreen() {


    return (
        <>
            <SafeAreaView style={{flex: 1, backgroundColor: "white",}}>
                <View className="flex-row justify-center items-center pt-4 pb-2 border-b border-gray-200">
                    <Text className="text-xl font-semibold text-black">
                        Your Ride
                    </Text>
                </View>

                {/*If the user has no rides posted*/}
                <View className='flex-1 justify-center items-center flex-col gap-y-1'>
                    <Image
                        source={require('@/assets/icons/empty-folder.png')}
                        className='h-36 w-36 '
                    />
                    <View className='justify-center items-center flex-col gap-y-3'>
                        <Text className='text-lg text-gray-600'>There is no ride post.</Text>
                        <TouchableOpacity className='px-8 py-2 rounded-xl  bg-[#2E8BC0] '
                                          activeOpacity={0.6}
                                          onPress={() => {
                                              router.push({
                                                  pathname: "/(screens)/RideScreen",
                                                  params: { title: 'register' },
                                              });
                                          }}
                        >
                            <Text className='text-lg text-white'>Create Ride Post</Text>

                        </TouchableOpacity>
                    </View>
                </View>

                {/*Otherwise  display the user's previous ride post*/}


            </SafeAreaView>
        </>
    );
}
