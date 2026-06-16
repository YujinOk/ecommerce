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
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
    variant: ["XS", "S", "M", "L", "XL"],
    quantity: 20,
    sale: 10,
    favorited: false,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 79,
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=400&fit=crop",
    variant: ["28", "30", "32", "34", "36"],
    quantity: 15,
    sale: 20,
    favorited: false,
  },
  {
    id: "3",
    name: "Oversized Hoodie",
    price: 59,
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop",
    variant: ["S", "M", "L", "XL"],
    quantity: 10,
    sale: 0,
    favorited: false,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 120,
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=400&fit=crop",
    variant: ["Black", "Brown", "Tan"],
    quantity: 8,
    sale: 15,
    favorited: false,
  },
  {
    id: "5",
    name: "Canvas Sneakers",
    price: 65,
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=400&fit=crop",
    variant: ["6", "7", "8", "9", "10", "11"],
    quantity: 12,
    sale: 5,
    favorited: false,
  },
  {
    id: "6",
    name: "Wool Beanie",
    price: 25,
    img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=400&fit=crop",
    variant: ["Navy", "Charcoal", "Cream", "Forest Green"],
    quantity: 30,
    sale: 0,
    favorited: false,
  },
];

export default mockItems;
