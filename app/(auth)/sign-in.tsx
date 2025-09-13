import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Platform,
} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";

interface TripReadyScreenProps {
    onBack?: () => void;
    onContinue?: (phoneNumber: string) => void;
}

const TripReadyScreen: React.FC<TripReadyScreenProps> = ({
                                                             onBack,
                                                             onContinue,
                                                         }) => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handlePhoneChange = (text: string): void => {
        const numericValue = text.replace(/[^0-9]/g, '').slice(0, 10);
        setPhoneNumber(numericValue);
    };

        const handleBackPress = (): void => {
            router.replace('/(auth)/welcome');
        };


    const handleContinuePress = (): void => {
        if (isValidPhone && onContinue) {
            onContinue(phoneNumber);
        }

        router.replace({
            pathname: "/(auth)/otp",
            params: { phone: phoneNumber },
        });
    };

    const isValidPhone: boolean = phoneNumber.length === 10;

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#f9fafb"
                translucent={false}
            />

            <View className="flex-row items-center justify-between px-6 py-4 mt-7">
                <TouchableOpacity
                    className="w-10 h-10 rounded-full bg-white items-center justify-center shadow-sm border border-gray-100"
                    activeOpacity={0.7}
                    onPress={handleBackPress}
                >
                    <MaterialIcons
                        size={25}
                        name="arrow-back"
                        color={'#2E8BC0'}
                    />
                </TouchableOpacity>

                <Text className="text-gray-600 font-medium text-base">1 / 3</Text>
            </View>
            <View className="px-6 mb-8">
                <View className="h-1 bg-gray-200 rounded-full">
                    <View className="h-1 bg-gray-800 rounded-full w-1/3" />
                </View>
            </View>

            <View className="flex-1 px-6">
                <Text className="text-3xl font-bold text-gray-900 mb-12 leading-tight">
                    Let's get you trip-ready!
                </Text>

                <View className="mb-8">
                    <Text className="text-gray-600 text-base mb-4">
                        Enter your Mobile Number
                    </Text>

                    <View className="flex-row bg-white rounded-lg border border-gray-300 overflow-hidden">
                        <View className="bg-white px-4 py-4 flex-row items-center border-r border-gray-300">
                            <View className="w-6 h-4 mr-2 rounded-sm overflow-hidden">
                                <View className="flex-1 bg-orange-500" />
                                <View className="flex-1 bg-white" />
                                <View className="flex-1 bg-green-600" />
                            </View>
                            <Text className="text-gray-700 font-medium text-base">+91</Text>
                        </View>

                        <TextInput
                            className="flex-1 px-4 py-4 text-gray-900 text-base"
                            placeholder="10-digit mobile number"
                            placeholderTextColor="#9CA3AF"
                            value={phoneNumber}
                            onChangeText={handlePhoneChange}
                            keyboardType="phone-pad"
                            maxLength={10}
                            returnKeyType="done"
                            autoComplete="tel"
                            textContentType="telephoneNumber"
                            style={Platform.OS === 'ios' ? { paddingVertical: 16 } : { paddingVertical: 12 }}
                        />
                    </View>
                </View>
            </View>

            <View className="px-6 pb-8">
                <View className="mb-6">
                    <Text className="text-gray-600 text-sm text-center leading-5">
                        By clicking Continue, you agree to our{' '}
                        <Text className="text-gray-900 font-medium">T&Cs</Text>
                    </Text>
                </View>
                <TouchableOpacity
                    className={`py-4 rounded-lg ${
                        isValidPhone
                            ? 'bg-[#2E8BC0]'
                            : 'bg-gray-300'
                    }`}
                    disabled={!isValidPhone}
                    activeOpacity={isValidPhone ? 0.8 : 1}
                    onPress={handleContinuePress}
                >
                    <Text
                        className={`text-center text-base font-medium ${
                            isValidPhone
                                ? 'text-white'
                                : 'text-gray-500'
                        }`}
                    >
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default TripReadyScreen
