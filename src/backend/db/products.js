import { v4 as uuid } from "uuid";
import {Quest1,Quest2,CarryCase,HeadStrap,LinkCable,MetaQuestAdapter,QuestWithControllers,RingCovers,LightBlocker ,MetaQuestGiftCards,RaybanRound, RaybanMeteor,RaybanWayfarer,LogitechHeadphones,MetaQuestProEarphones,SoundcoreEarbuds,QuestLeftController,QuestRightController} from '../../assets'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */


export const products = [{
  _id: uuid(),
  title: "Quest1",
  originalPrice: "5000",
  sellingPrice: "3500",
  image: Quest1,
  categoryName: "virtual-reality",
  rating:"3"
},
{
  _id: uuid(),
  title: "Quest2",
  originalPrice: "10000",
  sellingPrice: "8500",
  image: Quest2,
  categoryName: "virtual-reality",
  rating:"3.5"
},

  {
    _id: uuid(),
    title: "Meta Quest Pro Earphones",
    originalPrice: "2500",
    sellingPrice: "1000",
    image: MetaQuestProEarphones,
    categoryName: "soundzy",
    rating:"4"
  },
  {
    _id: uuid(),
    title: "Logitech G PRO Gaming Headset",
    originalPrice: "4000",
    sellingPrice: "3000",
    image: LogitechHeadphones,
    categoryName: "soundzy",
    rating:"4"
  },
  {
    _id: uuid(),
    title: "Link Cable",
    originalPrice: "4000",
    sellingPrice: "3000",
    image: LinkCable,
    categoryName: "soundzy",
    rating:"2"
  },
  {
    _id: uuid(),
    title: "Meta Quest Adapter  ",
    originalPrice: "3000",
    sellingPrice: "2500",
    image: MetaQuestAdapter  ,
    categoryName: "virtual-reality",
    rating:"4"
  },
  {
    _id: uuid(),
    title: "Quest With Controllers",
    originalPrice: "10000",
    sellingPrice: "8500",
    image: QuestWithControllers,
    categoryName: "virtual-reality",
    rating:"4.5"
  },
  
  {
    _id: uuid(),
    title: "CarryCase - for Quest",
    originalPrice: "10000",
    sellingPrice: "8500",
    image: CarryCase,
    categoryName: "virtual-reality",
    rating:"1.5"
  },
  {
    _id: uuid(),
    title: "Quest Pro Left Controller",
    originalPrice: "10000",
    sellingPrice: "8500",
    image: QuestLeftController,
    categoryName: "virtual-reality",
    rating: "3.5"
  },
  
  
  {
    _id: uuid(),
    title: "HeadStrap",
    originalPrice: "6000",
    sellingPrice: "4500",
    image: HeadStrap,
    categoryName: "virtual-reality",
    rating: "3"
  },
  
  {
    _id: uuid(),
    title: "Ring Covers",
    originalPrice: "5000",
    sellingPrice: "4500",
    image: RingCovers,
    categoryName: "virtual-reality",
    rating:"4"
  },
  
  {
    _id: uuid(),
    title: "Light Blocker ",
    originalPrice: "3000",
    sellingPrice: "2500",
    image: LightBlocker ,
    categoryName: "virtual-reality",
    rating:"4.5"
  },
  
  {
    _id: uuid(),
    title: "Meta Quest GiftCards ",
    originalPrice: "3000",
    sellingPrice: "2500",
    image: MetaQuestGiftCards ,
    categoryName: "virtual-reality",
    rating: "2"
  },
    {
      _id: uuid(),
      title: "Ray-Ban Round",
      originalPrice: "4000",
      sellingPrice: "2500",
      image: RaybanRound,
      categoryName: "smart-glasses",
      rating: "4"
    },
    {
      _id: uuid(),
      title: "Ray-Ban Meteor",
      originalPrice: "8000",
      sellingPrice: "6500",
      image: RaybanMeteor,
      categoryName: "smart-glasses",
      rating: "3"
    },

    {
      _id: uuid(),
      title: "Ray-Ban Wayfarer",
      originalPrice: "8000",
      sellingPrice: "6500",
      image: RaybanWayfarer,
      categoryName: "smart-glasses",
      rating: "3.5"
    },
    
    {
      _id: uuid(),
      title: "Soundcore VR Earbuds",
      originalPrice: "2500",
      sellingPrice: "1000",
      image: SoundcoreEarbuds,
      categoryName: "soundzy",
      rating: "3.5"
    },
    {
      _id: uuid(),
      title: "Quest Pro Right Controller",
      originalPrice: "10000",
      sellingPrice: "8500",
      image: QuestRightController,
      categoryName: "virtual-reality",
      rating: "3.5"
    }
];
