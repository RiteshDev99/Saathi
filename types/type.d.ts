
export interface ButtonProps extends TouchableOpacityProps {
    title?: string;
    onPress?: () => void;
    bgColor?: string;
    textColor?: string;
    className?: string;
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
}
export interface BookingProps extends TouchableOpacityProps {
    id?:string;
    time?:string;
    rating?:number;
    price?:number;
    service?:string;
    status?:string;
    location?:string;
    area?:string;
}
