import { useRouter } from "next/router";
const categoryDetail = () => {
  const router = useRouter();
  const categoryId = router.query.categoryId;
  return <h1>categoryDetail page:{categoryId}</h1>;
};

export default categoryDetail;
