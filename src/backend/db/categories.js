import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */
import {Quest,Headphones,Glasses} from '../../assets'
export const categories = [
  {
    _id: uuid(),
    categoryName: "virtual-reality",
    image: Quest,
    description: "Get your physical devices for virtual world",
  },
  {
    _id: uuid(),
    categoryName: "smart-glasses",
    image: Glasses,
    description:"Smart glasses designed to keep you in the moment",
  },
  {
    _id: uuid(),
    categoryName: "soundzy",
    image: Headphones,
    description: "Best in Audio - compatible to VR devices",
  },
];
