// export enum UserRole {
//     Admin, User
// }

export interface UserModel {
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    role?: number;
    token?: string;
}

export interface InfoModel{
    codeError?: number;
    message?: string;
    token?: string;
}
