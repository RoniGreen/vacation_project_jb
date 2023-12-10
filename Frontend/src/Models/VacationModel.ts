export interface VacationModel {
    id: number;
    vacationDestination:string;
    vacationDescription:string;
    checkIn: Date;
    checkOut: Date;
    price:number;
    image:any;
    Count?:number;
    Likes?: number;
}

export interface ResVacations {
    rows: [VacationModel],
    rows_all:number
}

// id, vacationDestination, vacationDescription, checkIn, checkOut, price, image