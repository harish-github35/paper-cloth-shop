import { UserInfo } from "firebase/auth";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  title: string;
  items: Product[];
}

export interface UserType extends UserInfo {
  displayName: string;
  email: string;
}
