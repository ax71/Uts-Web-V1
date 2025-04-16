export type Game = {
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
};

export const bestSellers: Game[] = [
  {
    title: "Minecraft",
    image: "/images/Xbox Game Store Thumbnail 3.png",
    price: 260000,
    originalPrice: 260000,
    discount: 0,
  },
  {
    title: "Asphalt 9: Legends",
    image: "/images/Xbox Game Store Thumbnail 2.png",
    price: 0,
    originalPrice: 0,
    discount: 0,
  },
  {
    title: "The watcher 3",
    image: "/images/Xbox Game Store Thumbnail 1.png",
    price: 400000,
    originalPrice: 590000,
    discount: 25,
  },
  {
    title: "Surviving Mars",
    image: "/images/Xbox Game Store Thumbnail.png",
    price: 440000,
    originalPrice: 440000,
    discount: 0,
  },
];
