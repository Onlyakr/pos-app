"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface Product {
  id: number;
  category: string;
  name: string;
  amount: number;
  price: number;
}

const mockProducts: Product[] = [
  { id: 1, category: "Anime", name: "Product 1", amount: 1, price: 100 },
  {
    id: 2,
    category: "Self-development",
    name: "Product 2",
    amount: 2,
    price: 200,
  },
  { id: 3, category: "Finance", name: "Product 3", amount: 3, price: 300 },
  { id: 4, category: "Education", name: "Product 4", amount: 4, price: 400 },
  { id: 5, category: "Anime", name: "Product 5", amount: 5, price: 500 },
  {
    id: 6,
    category: "Self-development",
    name: "Product 6",
    amount: 6,
    price: 600,
  },
  { id: 7, category: "Finance", name: "Product 7", amount: 7, price: 700 },
  { id: 8, category: "Education", name: "Product 8", amount: 8, price: 800 },
  { id: 9, category: "Anime", name: "Product 9", amount: 9, price: 900 },
  { id: 10, category: "Anime", name: "Product 10", amount: 10, price: 1000 },
  {
    id: 11,
    category: "Self-development",
    name: "Product 11",
    amount: 11,
    price: 1100,
  },
  { id: 12, category: "Finance", name: "Product 12", amount: 12, price: 1200 },
  {
    id: 13,
    category: "Education",
    name: "Product 13",
    amount: 13,
    price: 1300,
  },
  { id: 14, category: "Anime", name: "Product 14", amount: 14, price: 1400 },
  {
    id: 15,
    category: "Self-development",
    name: "Product 15",
    amount: 15,
    price: 1500,
  },
  { id: 16, category: "Finance", name: "Product 16", amount: 16, price: 1600 },
];

const Page = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);

  const handleAdd = (productID: number) => {
    setProducts((crrProducts: Product[]) =>
      crrProducts.map((product: Product) =>
        product.id === productID
          ? { ...product, amount: product.amount + 1 }
          : product
      )
    );
  };
  const handleRemove = (productID: number) => {
    setProducts((crrProducts: Product[]) =>
      crrProducts.map((product: Product) =>
        product.id === productID
          ? { ...product, amount: product.amount - 1 }
          : product
      )
    );
  };
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="flex flex-col gap-3 w-full h-full rounded-2xl">
        <div className="grid grid-cols-17 gap-2 text-center">
          <p className="bg-muted rounded-lg py-2 col-span-7">List</p>
          <p className="bg-muted rounded-lg py-2 col-span-3">Amount</p>
          <p className="bg-muted rounded-lg py-2 col-span-3">Price</p>
          <p className="bg-muted rounded-lg py-2 col-span-4">Adjust</p>
        </div>
        {products.map((product: Product, index: number) => (
          <div
            className="grid grid-cols-17 gap-2 text-center h-15"
            key={product.id}
          >
            <p className="bg-muted rounded-lg py-2 col-span-7">
              {product.name}
            </p>
            <p className="bg-muted rounded-lg py-2 col-span-3">
              {product.amount}
            </p>
            <p className="bg-muted rounded-lg py-2 col-span-3">
              {product.price}
            </p>
            <div className="bg-muted rounded-lg py-2 col-span-4 flex justify-center items-center gap-2">
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleRemove(product.id)}
              >
                <Minus size={15} />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleAdd(product.id)}
              >
                <Plus size={15} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Page;
