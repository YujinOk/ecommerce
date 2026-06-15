export type Item = {
  id: string;
  name: string;
  price: number;
  img: string;
  variant: string[];
  quantity: number;
  sale: number;
  favorited: boolean;
};

const mockItems: Item[] = [
  {
    id: "1",
    name: "Classic White Tee",
    price: 29,
    img: "https://placehold.co/600x400?text=Classic+White+Tee",
    variant: ["XS", "S", "M", "L", "XL"],
    quantity: 20,
    sale: 10,
    favorited: false,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 79,
    img: "https://placehold.co/600x400?text=Slim+Fit+Jeans",
    variant: ["28", "30", "32", "34", "36"],
    quantity: 15,
    sale: 20,
    favorited: false,
  },
  {
    id: "3",
    name: "Oversized Hoodie",
    price: 59,
    img: "https://placehold.co/600x400?text=Oversized+Hoodie",
    variant: ["S", "M", "L", "XL"],
    quantity: 10,
    sale: 0,
    favorited: false,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 120,
    img: "https://placehold.co/600x400?text=Leather+Crossbody+Bag",
    variant: ["Black", "Brown", "Tan"],
    quantity: 8,
    sale: 15,
    favorited: false,
  },
  {
    id: "5",
    name: "Canvas Sneakers",
    price: 65,
    img: "https://placehold.co/600x400?text=Canvas+Sneakers",
    variant: ["6", "7", "8", "9", "10", "11"],
    quantity: 12,
    sale: 5,
    favorited: false,
  },
  {
    id: "6",
    name: "Wool Beanie",
    price: 25,
    img: "https://placehold.co/600x400?text=Wool+Beanie",
    variant: ["Navy", "Charcoal", "Cream", "Forest Green"],
    quantity: 30,
    sale: 0,
    favorited: false,
  },
];

export default mockItems;
