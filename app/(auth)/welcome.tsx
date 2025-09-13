import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import CustomButton from "@/src/components/ui/customButton";
import {MaterialIcons} from "@expo/vector-icons";

export const onboarding = [
    {
        id: 1,
        title: "Post a Ride in Just One Tap!",
        description: "Share your empty seats, save fuel, and earn effortlessly.",
        image: require("../../assets/images/onboarding1.png"),
    },
    {
        id: 2,
        title: "Best car in your hands with Ryde",
        description: "Build connections on the go — travel together, save together.",
        image: require("../../assets/images/onboarding2.png"),
    },
    {
        id: 3,
        title: "Your ride, your way. Let's go!",
        description: "Drive smarter — share seats, save money, and ride with trust.",
        image: require("../../assets/images/onboarding3.png"),
    },
];

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const isLastSlide = activeIndex === onboarding.length - 1;

    const handleNext = () => {
        if (isLastSlide) {
            router.replace("/(auth)/sign-in");
        } else {
            swiperRef.current?.scrollBy(1);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex w-full items-end p-5">
                <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")}
                                  className='flex-row items-center justify-center'
                >
                    <Text className="text-[#2E8BC0] text-md font-JakartaBold">Skip</Text>
                    <MaterialIcons
                        size={25}
                        name="keyboard-arrow-right"
                        color={'#2E8BC0'}
                    />
                </TouchableOpacity>
            </View>
            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#2E8BC0] rounded-full" />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map((item) => (
                    <View key={item.id} className="flex-1 items-center justify-center p-5">
                        <Image
                            source={item.image}
                            className="w-full h-[350px] "
                            resizeMode="cover"
                        />
                        <Text className="text-[#fff] text-3xl font-bold mx-10 text-center mt-10">
                            {item.title}
                        </Text>
                        <Text className="text-2xl font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                            {item.description}
                        </Text>
                    </View>
                ))}
            </Swiper>

            <View className="px-5 mb-8">
                <CustomButton
                    title={isLastSlide ? "Get Started" : "Next"}
                    onPress={handleNext}
                    className="w-full bg-[#2E8BC0]"
                    textColor='#fff'
                />
            </View>
        </SafeAreaView>
    );
};

export default Onboarding;

