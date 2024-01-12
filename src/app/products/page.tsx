import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>Products Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="products/1">Product 1 </Link>
          </li>
          <li>
            <Link href="products/2">Product 2 </Link>
          </li>
          <li>
            <Link href="products/3">Product 3 </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default page;
