import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VacationModel } from "../Models/VacationModel";

// export interface VacSlice {
//     vacationID: number;
//     destination:string;
//     description:string;
//     startDate: Date;
//     endDate:Date;
//     price:number;
//     image:any;
//     count:number;
//     user_checked: string
// }

const vacationSlice = createSlice({
    name: 'vacation',
    initialState: {vacations :<VacationModel[] | any > ''},
    reducers: {
        set: (state, action: PayloadAction<any>) => {
            state.vacations = action.payload;
           
            
            return  state;
        },
    }
})


export const { set } = vacationSlice.actions;
export default vacationSlice.reducer;