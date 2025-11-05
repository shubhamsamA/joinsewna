import { ProductCard } from "./ProductCard";
import { products } from "@/data/Product";

interface ProductGridProps {
  amount?: number;
}

export const ProductGrid = ({ amount }: ProductGridProps) => {
  return (
    <div className="space-x-2 p-2 w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
      {!amount
        ? products.map((product, idx) => (
            <ProductCard
              key={idx}
              image={product.image}
              title={product.title}
              designer={product.designer}
              price={product.price}
              rating={product.rating}
            />
          ))
        : products
            .slice(0, amount)
            .map((product, idx) => (
              <ProductCard
                key={idx}
                image={product.image}
                title={product.title}
                designer={product.designer}
                price={product.price}
                rating={product.rating}
              />
            ))}
    </div>
  );
};
