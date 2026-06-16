import { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Carouselfeature = () => {
  const context = useContext(ItemContext);

  if (!context || !context.items) {
    return <div>Loading...⚪️</div>;
  }

  return (
    <div className="w-full bg-gray-950 py-12">
      <Carousel className="max-w-3xl mx-auto px-12">
        <CarouselContent>
          {context.items.map((item) => (
            <CarouselItem key={item.id}>
              <div className="flex flex-col items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full max-h-72 object-cover rounded-xl"
                />
                <div className="text-center">
                  <p className="text-white text-xl font-semibold">{item.name}</p>
                  {item.sale > 0 && (
                    <p className="text-pink-400 text-sm font-medium mt-1">
                      {item.sale}% OFF
                    </p>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Carouselfeature;
