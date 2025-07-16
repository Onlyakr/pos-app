import InputField from "@/components/InputField";
import Categories from "@/components/Categories";
import Link from "next/link";

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

const Page = async () => {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="flex justify-between items-center gap-2">
        <Categories />
        <InputField />
      </div>
      <div className="flex flex-col gap-3 w-full h-full rounded-2xl">
        <div className="grid grid-cols-7 gap-2 text-center">
          <p className="bg-muted rounded-lg py-2 ">ID</p>
          <p className="bg-muted rounded-lg py-2 ">Category</p>
          <p className="bg-muted rounded-lg py-2 col-span-3">Name</p>
          <p className="bg-muted rounded-lg py-2">Amount</p>
          <p className="bg-muted rounded-lg py-2 ">Price</p>
        </div>
        {mockProducts.map((product: Product, index: number) => (
          <Link
            key={index}
            href={`/products/${product.id}`}
            className="flex flex-col gap-2"
          >
            <div className="grid grid-cols-7 gap-2 text-center h-15">
              <p className="bg-muted rounded-lg py-2 ">{product.id}</p>
              <p className="bg-muted rounded-lg py-2">{product.category}</p>
              <p className="bg-muted rounded-lg py-2 col-span-3">
                {product.name}
              </p>
              <p className="bg-muted rounded-lg py-2">{product.amount}</p>
              <p className="bg-muted rounded-lg py-2 ">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Page;
