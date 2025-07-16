import InputField from "@/components/InputField";
// import { SkeletonCard } from "@/components/SkeletonCard";
import Categories from "@/components/Categories";
import Link from "next/link";

interface Product {
  id: number;
  category: string;
  name: string;
  amount: number;
  price: number;
}

// const headers: string[] = ["ID", "Category", "Name", "Amount", "Price"];

const products: Product[] = [
  { id: 1, category: "Category 1", name: "Product 1", amount: 100, price: 100 },
  { id: 2, category: "Category 2", name: "Product 2", amount: 200, price: 200 },
  { id: 3, category: "Category 3", name: "Product 3", amount: 300, price: 300 },
  { id: 1, category: "Category 1", name: "Product 1", amount: 100, price: 100 },
  { id: 2, category: "Category 2", name: "Product 2", amount: 200, price: 200 },
  { id: 3, category: "Category 3", name: "Product 3", amount: 300, price: 300 },
  { id: 1, category: "Category 1", name: "Product 1", amount: 100, price: 100 },
  { id: 2, category: "Category 2", name: "Product 2", amount: 200, price: 200 },
  { id: 3, category: "Category 3", name: "Product 3", amount: 300, price: 300 },
  { id: 1, category: "Category 1", name: "Product 1", amount: 100, price: 100 },
  { id: 2, category: "Category 2", name: "Product 2", amount: 200, price: 200 },
  { id: 3, category: "Category 3", name: "Product 3", amount: 300, price: 300 },
  { id: 1, category: "Category 1", name: "Product 1", amount: 100, price: 100 },
  { id: 2, category: "Category 2", name: "Product 2", amount: 200, price: 200 },
  { id: 3, category: "Category 3", name: "Product 3", amount: 300, price: 300 },
  { id: 1, category: "Category 1", name: "Product 1", amount: 100, price: 100 },
  { id: 2, category: "Category 2", name: "Product 2", amount: 200, price: 200 },
  { id: 3, category: "Category 3", name: "Product 3", amount: 300, price: 300 },
  { id: 1, category: "Category 1", name: "Product 1", amount: 100, price: 100 },
  { id: 2, category: "Category 2", name: "Product 2", amount: 200, price: 200 },
  { id: 3, category: "Category 3", name: "Product 3", amount: 300, price: 300 },
  { id: 1, category: "Category 1", name: "Product 1", amount: 100, price: 100 },
  { id: 2, category: "Category 2", name: "Product 2", amount: 200, price: 200 },
  { id: 3, category: "Category 3", name: "Product 3", amount: 300, price: 300 },
];

const Page = () => {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="flex justify-between items-center gap-2">
        <Categories />
        <InputField />
      </div>
      <div className="flex flex-col gap-3 w-full h-full rounded-2xl">
        <div className="grid grid-cols-7 gap-2 text-center">
          {/* {headers.map((header) => (
            <p key={header} className="bg-muted text-center rounded-lg py-2">
              {header}
            </p>
          ))} */}
          <p className="bg-muted rounded-lg py-2 ">ID</p>
          <p className="bg-muted rounded-lg py-2 ">Category</p>
          <p className="bg-muted rounded-lg py-2 col-span-3">Name</p>
          <p className="bg-muted rounded-lg py-2">Amount</p>
          <p className="bg-muted rounded-lg py-2 ">Price</p>
        </div>
        {products.map((product, index) => (
          <Link
            key={index}
            href={`/products/${product.id}`}
            className="flex flex-col gap-2"
          >
            <div className="grid grid-cols-7 gap-2 text-center">
              <p className="bg-muted rounded-lg py-2">{product.id}</p>
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
