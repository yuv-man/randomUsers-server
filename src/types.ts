export interface IUser {
    id: string;
    dateOfBirth: string;
    avatar: string;
    name: string;
    email: string;  
    phone: string;
    gender: string;
    location: ILocation;
}

export interface ILocation {
    city: string;
    state: string;
    country: string;
}
