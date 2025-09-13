import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

const CustomButton = ({
                          onPress,
                          title,
                          bgColor = "#2E8BC0",
                          textColor,
                          className = "",
                          IconLeft,
                          IconRight,
                          ...props
                      }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${bgColor} ${className}`}
            {...props}
        >
            {IconLeft && <IconLeft />}
            <Text className={`text-lg font-bold`}
                  style={{ color: textColor || "#2E8BC0" }}
            >
                {title}
            </Text>
            {IconRight && <IconRight />}
        </TouchableOpacity>
    );
};

export default CustomButton;
