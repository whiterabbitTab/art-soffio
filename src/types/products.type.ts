interface ITon {
  id: number;
  ton: string;
  colors: string[];
}

interface IDescription {
  heading: string;
  fullInfo: string[]
}

export interface IProducts {
  id: string;
  type: string;
  title: string;
  price: number;
  discount: number;
  image: string;
  tons: ITon[];
  entrance: string;
  weight: string;
  stock: boolean;
  description: IDescription;
}