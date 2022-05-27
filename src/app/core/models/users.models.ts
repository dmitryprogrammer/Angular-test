export interface UserModel {
  id: number;
  name: string;
  userPic: string;
  age: number;
}

export type UsersModel = UserModel[];
