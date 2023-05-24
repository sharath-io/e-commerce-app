import { v4 as uuid } from "uuid";
import {Quest,Headphones,Glasses} from '../../assets'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */


export const products = [
  {
    _id: uuid(),
    title: "Quest1",
    price: "5000",
    image: Quest,
    categoryName: "virtual-reality",
  },
  {
    _id: uuid(),
    title: "Quest Pro",
    price: "3000",
    image: Quest,
    categoryName: "virtual-reality",
  },
  {
    _id: uuid(),
    title: "Aviator Classic",
    price: "1000",
    image: Glasses,
    categoryName: "smart-glasses",
  },
  {
    _id: uuid(),
    title: "Erika Classic",
    price: "5000",
    image: Glasses,
    categoryName: "smart-glasses",
  },
  {
    _id: uuid(),
    title: "Sony X200",
    price: "3000",
    image: Headphones,
    categoryName: "soundzy",
  },
  {
    _id: uuid(),
    title: "Sony X300",
    price: "1000",
    image: Headphones,
    categoryName: "soundzy",
  },
];
