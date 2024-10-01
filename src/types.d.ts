export interface IDish {
  id: string;
  name: string;
  description: string;
  price: number;
  urlImage: string;
}

export interface IDishMutation {
  name: string;
  description: string;
  price: number;
  urlImage: string;
}
