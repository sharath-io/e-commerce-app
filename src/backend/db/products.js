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
    price: "5000",
    image: Quest1,
    categoryName: "virtual-reality",
  },
  {
    _id: uuid(),
    title: "Quest Pro",
    price: "3000",
    image: QuestPro,
    categoryName: "virtual-reality",
  },
  {
    _id: uuid(),
    title: "Ray-Ban Round",
    price: "1000",
    image: RaybanRound,
    categoryName: "smart-glasses",
  },
  {
    _id: uuid(),
    title: "Ray-Ban Meteor",
    price: "5000",
    image: RaybanMeteor,
    categoryName: "smart-glasses",
  },
  {
    _id: uuid(),
    title: "Soundcore VR Earbuds",
    price: "1000",
    image: SoundcoreEarbuds,
    categoryName: "soundzy",
  },
  {
    _id: uuid(),
    title: "Logitech G PRO Gaming Headset",
    price: "3000",
    image: LogitechHeadphones,
    categoryName: "soundzy",
  }
];
