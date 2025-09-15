
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



export type DriverRegistrationData = {
    fullName: string;
    mobileNumber: string;
    gender: string;
    driverLicense: string;
    aadharCard: string;
    carNumber: string;
    carModel: string;
};


export type DriverPostRideData = {
    id: string;
    name: string;
    date: string;
    day: string;
    description: string;
    pickupLocation: string;
    dropLocation: string;
    pickupTime: string;
    DropTime: string;
    totalHours: string;
    price: number;
    service: string;
    rating: string;
    emptySets: string;
}



