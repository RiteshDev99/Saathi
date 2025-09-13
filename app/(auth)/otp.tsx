import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Alert,
    Image,
} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import {router, useLocalSearchParams} from "expo-router";
import { ReactNativeModal } from "react-native-modal";
import CustomButton from "@/src/components/ui/customButton";

const OTPScreen = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [resendTimer, setResendTimer] = useState(8);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const { phone } = useLocalSearchParams<{ phone: string }>();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        if (resendTimer > 0) {
            const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer]);

    const handleOtpChange = (value:any, index:any) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            // @ts-ignore
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyPress = (e:any, index:any) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            // @ts-ignore
            inputRefs[index - 1].current.focus();
        }
    };

    const handleResendOtp = (): void => {
        if (resendTimer === 0) {
            setResendTimer(8);
            Alert.alert('OTP Resent', 'A new OTP has been sent to 9555142599');
        }
    };

    const handleContinue = (): void => {
        const otpString = otp.join('');
        if (otpString.length === 4) {
            setShowSuccessModal(true);
        } else {
            Alert.alert('Error', 'Please enter the complete 4-digit OTP');
        }
    };

    const handleBrowseHome = (): void => {
        setShowSuccessModal(false);
        router.push('/(drawer)/(tabs)');
    }


    const handleBackPress = (): void => {
        router.replace('/(auth)/sign-in');
    };
    const isOtpComplete: boolean = otp.every(digit => digit !== '');

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

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

                <Text className="text-gray-600 font-medium text-base">2 / 3</Text>
            </View>
            <View className="px-4 bg-white pb-4">
                <View className="flex-row space-x-2">
                    <View className="flex-1 h-1 bg-gray-900 rounded-full" />
                    <View className="flex-1 h-1 bg-gray-900 rounded-full" />
                    <View className="flex-1 h-1 bg-gray-300 rounded-full" />
                </View>
            </View>
            <View className="h-110  px-6 pt-8">
                <Text className="text-2xl font-bold text-gray-900 mb-8">
                    Let's get you trip-ready!
                </Text>

                <Text className="text-gray-600 mb-8">
                    OTP sent to {phone}
                </Text>
                <View className="flex-row justify-between mb-6">
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            className={`w-16 h-16 border-2 rounded-lg text-center text-xl font-semibold ${
                                digit ? 'border-[#2E8BC0] bg-blue-50' : 'border-gray-300 bg-white'
                            }`}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(value, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            selectTextOnFocus
                        />
                    ))}
                </View>
                <TouchableOpacity
                    onPress={handleResendOtp}
                    disabled={resendTimer > 0}
                    className="mb-8"
                >
                    <Text className={`text-left ${resendTimer > 0 ? 'text-gray-400' : 'text-[#2E8BC0]'}`}>
                        Resend OTP{resendTimer > 0 ? ` (${resendTimer})` : ''}
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="px-6 pb-8">
                <TouchableOpacity
                    onPress={handleContinue}
                    className={`w-full py-4 rounded-lg ${
                        isOtpComplete
                            ? 'bg-[#2E8BC0]'
                            : 'bg-gray-300'
                    }`}
                    disabled={!isOtpComplete}
                >
                    <Text className={`text-center text-lg font-semibold ${
                        isOtpComplete ? 'text-white' : 'text-gray-500'
                    }`}>
                        Continue
                    </Text>
                </TouchableOpacity>
                <ReactNativeModal isVisible={showSuccessModal}>
                    <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                        <Image
                            source={require('@/assets/images/check.png')}
                            className="w-[110px] h-[110px] mx-auto my-5"
                        />
                        <Text className="text-3xl font-JakartaBold text-center">
                            Verified
                        </Text>
                        <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
                            You have successfully verified your account.
                        </Text>
                        <CustomButton
                            title="Go to Home"
                            className="mt-5 bg-[#2E8BC0]"
                            onPress={handleBrowseHome}
                            textColor='#fff'
                        />
                    </View>
                </ReactNativeModal>
            </View>
        </SafeAreaView>
    );
};

export default OTPScreen;
