import React, {useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
    Image,
    ScrollView,
} from "react-native";
import {Ionicons, Octicons} from "@expo/vector-icons";
import {Controller, useForm} from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import {Picker} from "@react-native-picker/picker";
import FormInput from "@/src/components/ui/FormInput";
import {DriverRegistrationData} from "@/types/type";
import {router} from "expo-router";


export default function DriverRegistration() {
    const [loading, setLoading] = useState(false);
    const [carImages, setCarImages] = useState<string[]>([]);

    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<DriverRegistrationData>({
        defaultValues: {
            fullName: "",
            mobileNumber: "",
            gender: "",
            driverLicense: "",
            aadharCard: "",
            carNumber: "",
            carModel: "",
        },
        mode: "onChange",
    });

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.canceled) {
            setCarImages((prev) => [...prev, ...result.assets.map((a) => a.uri)]);
        }
    };


    const onSubmit = (data: DriverRegistrationData) => {
        setLoading(true);
        try {
            console.log("Driver Registration Data ::", {...data, carImages});
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (

        <View className='flex-1 mb-5'>
            <View className="flex-row  justify-center items-center pt-4 pb-2 border-b border-gray-200">
                <View className="absolute left-[15px]">
                    <Ionicons
                        size={28}
                        name="arrow-back-outline"
                        color="black"
                        onPress={() => router.dismiss()}
                    />
                </View>
                <Text className="text-xl font-semibold text-black">
                    Register Your Account
                </Text>
            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 30}}
            >
                <View className="flex-row justify-center items-center pt-5">
                    <View
                        className="h-40 w-40 bg-[#2E8BC0] rounded-full flex-row justify-center items-center shadow-md">
                        <Image
                            source={require("@/assets/icons/license.png")}
                            className="h-24 w-24"
                        />
                    </View>
                </View>

                <View className="px-5 mt-10 ">
                    <FormInput<DriverRegistrationData>
                        label="Full Name"
                        name="fullName"
                        control={control}
                        errors={errors}
                        placeholder="Enter your full name"
                        rules={{required: "Full name is required"}}
                    />

                    <View className="mb-6">
                        <Text className="text-base text-gray-700 mb-2 font-medium">
                            Mobile Number
                        </Text>
                        <View className="border border-gray-600 rounded-xl px-4 py-2 flex-row items-center">
                            <Text className="text-base text-gray-900 mr-2">+91</Text>
                            <Controller
                                control={control}
                                name="mobileNumber"
                                rules={{
                                    required: "Mobile number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter a valid 10-digit mobile number",
                                    },
                                }}
                                render={({field: {onChange, value}}) => (
                                    <TextInput
                                        className="flex-1 text-base text-gray-900"
                                        placeholder="Enter mobile number"
                                        placeholderTextColor="#9CA3AF"
                                        value={value}
                                        onChangeText={onChange}
                                        keyboardType="phone-pad"
                                        maxLength={10}
                                    />
                                )}
                            />
                        </View>
                        {errors.mobileNumber && (
                            <Text className="text-red-500 text-sm mt-1">
                                {errors.mobileNumber.message}
                            </Text>
                        )}
                    </View>

                    <View className="mb-6">
                        <Text className="text-base text-gray-700 mb-2 font-medium">
                            Gender
                        </Text>
                        <View className=" border border-gray-600 rounded-xl">
                            <Controller
                                control={control}
                                name="gender"
                                rules={{required: "Gender is required"}}
                                render={({field: {onChange, value}}) => (
                                    <Picker
                                        selectedValue={value}
                                        onValueChange={onChange}
                                        style={{height: 50}}
                                    >
                                        <Picker.Item label="Select Gender" value="" color={'#9CA3AF'}/>
                                        <Picker.Item label="Male" value="male"/>
                                        <Picker.Item label="Female" value="female"/>
                                        <Picker.Item label="Other" value="other"/>
                                    </Picker>
                                )}
                            />
                        </View>
                        {errors.gender && (
                            <Text className="text-red-500 text-sm mt-1">
                                {errors.gender.message}
                            </Text>
                        )}
                    </View>

                    <FormInput<DriverRegistrationData>
                        label="Driver License Number"
                        name="driverLicense"
                        control={control}
                        errors={errors}
                        placeholder="Enter driver license number"
                        rules={{required: "Driver license is required"}}
                    />

                    <FormInput<DriverRegistrationData>
                        label="Aadhar Card Number"
                        name="aadharCard"
                        control={control}
                        errors={errors}
                        placeholder="Enter Aadhar card number"
                        rules={{
                            required: "Aadhar card number is required",
                            pattern: {
                                value: /^[0-9]{12}$/,
                                message: "Enter a valid 12-digit Aadhar number",
                            },
                        }}
                    />

                    <FormInput<DriverRegistrationData>
                        label="Car Number"
                        name="carNumber"
                        control={control}
                        errors={errors}
                        placeholder="Enter car number"
                        rules={{required: "Car number is required"}}
                    />

                    <FormInput<DriverRegistrationData>
                        label="Car Model"
                        name="carModel"
                        control={control}
                        errors={errors}
                        placeholder="Enter car model"
                        rules={{required: "Car model is required"}}
                    />

                    <View className="mb-6">
                        <Text className="text-base text-gray-700 mb-2 font-medium">
                            Car Images
                        </Text>
                        <TouchableOpacity
                            className=" border border-gray-600 rounded-xl px-4 py-4 items-center flex-row justify-center gap-x-5"
                            onPress={pickImage}
                        >
                            <Octicons size={20} name="upload" color={''}/>
                            <Text className="text-gray-600">Upload Car Images</Text>
                        </TouchableOpacity>

                        <View className="flex-row flex-wrap mt-3">
                            {carImages.map((uri, index) => (
                                <Image
                                    key={index}
                                    source={{uri}}
                                    className="h-20 w-20 mr-2 mb-2 rounded-lg"
                                />
                            ))}
                        </View>
                    </View>

                    <TouchableOpacity
                        className={`rounded-xl py-3 mt-8 items-center justify-center ${
                            isValid ? "bg-[#2E8BC0]" : "border border-gray-600"
                        }`}
                        disabled={!isValid || loading}
                        onPress={handleSubmit(onSubmit)}
                        activeOpacity={0.7}
                    >
                        {loading ? (
                            <ActivityIndicator size="large" color="#fff"/>
                        ) : (
                            <Text
                                className={`text-center text-lg font-medium ${
                                    isValid ? "text-white" : "text-gray-500"
                                }`}
                            >
                                Submit
                            </Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}
