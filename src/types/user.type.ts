export interface IBasket {
  quantity: number;
  id: string;
}

export interface IUser {
  email: string;
  icon: string;
  phone?: string;
  username: string;
  name?: string;
  surname?: string;
  basket: IBasket[];
}

export interface IUserData extends Omit<IUser, "basket"> {} 
export interface IUserInfo extends IUser {
  loading: boolean;
  id: string;
}