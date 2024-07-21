interface IBasket {
  quantity: number;
  discount: number;
  price: number;
  id: string;
}

export interface IUser {
  email: string;
  phone?: string;
  username: string;
  name?: string;
  surname?: string;
  basket: IBasket[]
}