export type Item = {
  id: string;
  name: string;
  price: number;
  img: string;
  variant: string[];
  quantity: number;
  sale: number;
  favorited: boolean;
  description: string;
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
    description: "A wardrobe staple made from 100% organic cotton. Relaxed fit with a clean crew neck — pairs with everything and holds its shape wash after wash.",
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
    description: "Tailored slim fit through the hip and thigh with a slight stretch for all-day comfort. Finished with a tapered leg and five-pocket styling.",
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
    description: "Heavyweight 380gsm fleece with a dropped shoulder silhouette. Brushed interior for warmth, kangaroo pocket, and ribbed cuffs that keep their shape.",
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
    description: "Full-grain leather with an adjustable strap and a secure zip closure. Compact enough for daily use — fits your phone, cards, keys, and not much else.",
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
    description: "Unbleached cotton canvas upper on a vulcanised rubber sole. Minimal, sturdy, and gets better looking the more you wear them.",
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
    description: "Knitted from a merino-lambswool blend — warm without the itch. One size with enough stretch to fit most heads comfortably.",
  },
];

export default mockItems;
