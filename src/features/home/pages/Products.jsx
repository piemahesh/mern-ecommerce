import { useSelector } from "react-redux";
import { ProductCard } from "../components";

export const Products = () => {
  const { data, isLoading, message, success } = useSelector(
    (state) => state.products
  );
  if (isLoading) {
    return <div>loading....</div>;
  }
  if (!success) {
    return <div>{message}</div>;
  }
  return (
    <div className="grid grid-cols-4 gap-2 place-items-center">
      {data.map((product) => (
        <ProductCard {...product} key={product._id} />
      ))}
    </div>
  );
};
