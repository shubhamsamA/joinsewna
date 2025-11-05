import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductCardProps {
  id?: number;
  image: string;
  title: string;
  designer: string;
  price: number;
  rating: number;
  reviews?: number;
  category?: string;
  designerImage: string;
  
}

export function ProductCard({
  image,
  title,
  designer,
  price,
  rating,
  designerImage,


}: ProductCardProps) {
  return (
    <div className="group bg-white h-[400px] w-fit rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden ">
        <Image
          src={image}
          width={200}
          height={250}
          alt={title}
          className="w-[250px] h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50">
          <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1">
              {title}
            </h3>
            {designer && (
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={designerImage}
                  alt={designer}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">
                  {designer}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">
              ₹{price.toFixed(2)}
            </span>
            {designer && (
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm text-gray-600">
                  {rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>

          <Button className="bg-[#00b67f]/80 hover:bg-[#00b67f] text-black px-4 py-2 rounded-lg transition-colors text-sm font-medium">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
