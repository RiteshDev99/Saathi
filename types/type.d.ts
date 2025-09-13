
export interface ButtonProps extends TouchableOpacityProps {
    title?: string;
    onPress?: () => void;
    bgColor?: string;
    textColor?: string;
    className?: string;
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
}
