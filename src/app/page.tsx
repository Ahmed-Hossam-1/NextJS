import ProductList from "@/components/products/ProductList";

export default function Home() {
  const products: any[] = [
    {
      id: 1,
      image: "/pro3.jfif",
      name: "Product 1",
      price: 100,
      desc: "this is a product",
    },
    {
      id: 2,
      image: "/pro3.jfif",
      name: "Product 1",
      price: 100,
      desc: "this is a product",
    },
    {
      id: 1,
      image: "/pro3.jfif",
      name: "Product 1",
      price: 100,
      desc: "this is a product",
    },
  ];
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
