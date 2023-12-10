
export interface UserInfo {
    userInfo:UserModel;
}

export interface UserModel {
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    role?: number;
    token?: string;
}

