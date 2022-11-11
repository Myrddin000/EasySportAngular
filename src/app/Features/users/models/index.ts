
export interface LoginUser {
    token: string;
    userRegistered: UserRegistered;
}
  
export interface UserRegistered {
    id: string;
    pseudo: string;
    email: string;
    role: number;
}

export interface UserConnected{
    token: string | null | undefined;
    pseudo: string | null | undefined;
    email: string | null | undefined;
    role: number | null | undefined;
    connect : boolean | undefined;
}

export interface UsersDisplay{
    id: string;
    pseudo : string;
    email : string;
}







export interface  UserForm {
pseudo:	string
email: string
password: string

}
