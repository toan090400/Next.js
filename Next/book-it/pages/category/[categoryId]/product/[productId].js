import { useRouter } from "next/router";
const categoryProduct = () => {
  const router = useRouter();
  const { productId, categoryId } = router.query;
  return (
    <h1>
      category:{categoryId} Product:{productId} page
    </h1>
  );
};

export default categoryProduct;
