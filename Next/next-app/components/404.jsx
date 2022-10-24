import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <h1>404 page</h1>
      <Link href="/">go home</Link>
    </>
  );
};

export default NotFound;
