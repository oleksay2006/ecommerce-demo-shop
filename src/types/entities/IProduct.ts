export interface IProduct {
  id: number;
  title: string;
  imgName: string;
  type: string;
  price: number;
  currency: string;
  isOnSale: boolean;
  discount?: string;
  isHot: boolean;
  isFavourite: boolean;
  quantity: number;
}
