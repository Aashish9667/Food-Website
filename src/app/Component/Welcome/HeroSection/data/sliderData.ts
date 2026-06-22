
export interface SlideItem {
  id: number;
  titleBefore: string;
  highlightText: string;
  titleAfter: string;
  description: string;
  buttonText?: string;
  imageSrc: string;
  imageAlt?: string;
}

export const sliderData: SlideItem[] = [
  {
    id: 1,
    titleBefore: "Get Tasty",
    highlightText: "Burger",
    titleAfter: "in an Easy Way",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eaque sequi deserunt aperiam, totam ipsum, ad, est laboriosam modi aliquid.",
    buttonText: "Order Now",
    imageSrc: "./HeroSection/main_img.png",
    imageAlt: "Delicious Burger"
  },
  {
    id: 2,
    titleBefore: "Hot & Tasty",
    highlightText: "Food",
    titleAfter: "Delivered Fast",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eaque sequi deserunt aperiam, totam ipsum, ad, est laboriosam modi aliquid.",
    buttonText: "Order Now",
    imageSrc: "./HeroSection/Food-Plate.jpg",
    imageAlt: "Food"
  },
  {
    id: 3,
    titleBefore: "Extra Cheesy",
    highlightText: "Pizza",
    titleAfter: "Delivered To You",
    description: "Craving something cheesy? Try our hand-tossed pizzas baked to perfection with fresh ingredients and local premium veggies.",
    buttonText: "Order Now",
    imageSrc: "./HeroSection/gallary_5-removebg-preview.png",
    imageAlt: "Cheesy Pizza"
  }
];
