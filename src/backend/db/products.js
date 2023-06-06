import { v4 as uuid } from "uuid";
import {Quest1,QuestPro,RaybanRound, RaybanMeteor,LogitechHeadphones,SoundcoreEarbuds} from '../../assets'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */


export const products = [
  {
    _id: uuid(),
    title: "Quest1",
    originalPrice: "5000",
    sellingPrice: "3500",
    image: Quest1,
    categoryName: "virtual-reality",
  },
  {
    _id: uuid(),
    title: "Quest Pro",
    originalPrice: "10000",
    sellingPrice: "8500",
    image: QuestPro,
    categoryName: "virtual-reality",
  },
  {
    _id: uuid(),
    title: "Ray-Ban Round",
    originalPrice: "4000",
    sellingPrice: "2500",
    image: RaybanRound,
    categoryName: "smart-glasses",
  },
  {
    _id: uuid(),
    title: "Ray-Ban Meteor",
    originalPrice: "8000",
    sellingPrice: "6500",
    image: RaybanMeteor,
    categoryName: "smart-glasses",
  },
  {
    _id: uuid(),
    title: "Soundcore VR Earbuds",
    originalPrice: "2500",
    sellingPrice: "1000",
    image: SoundcoreEarbuds,
    categoryName: "soundzy",
  },
  {
    _id: uuid(),
    title: "Logitech G PRO Gaming Headset",
    originalPrice: "4000",
    sellingPrice: "3000",
    image: LogitechHeadphones,
    categoryName: "soundzy",
  }
];
