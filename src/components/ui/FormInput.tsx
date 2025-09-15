import {View, Text, TextInput} from "react-native";
import {Controller, FieldErrors, FieldValues} from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
    label: string;
    name: keyof T;
    control: any;
    errors: FieldErrors<T>;
    rules?: object;
    placeholder: string;
};

export default function FormInput<T extends FieldValues>({
                          label,
                          name,
                          control,
                          errors,
                          rules,
                          placeholder,
                      }: FormInputProps<T>) {
    return (
        <View className="mb-6">
            <Text className="text-base text-gray-700 mb-2 font-medium">{label}</Text>
            <Controller
                control={control}
                name={name as any}
                rules={rules}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        className=" border border-gray-600 rounded-xl px-4 py-4 text-base text-gray-900"
                        placeholder={placeholder}
                        placeholderTextColor="#9CA3AF"
                        value={value as string}
                        onChangeText={onChange}
                    />
                )}
            />
            {errors[name] && (
                <Text className="text-red-500 text-sm mt-1">
                    {String(errors[name]?.message)}
                </Text>
            )}
        </View>
    );
}
