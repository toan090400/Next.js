import Link from "next/link";
const Header = () => {
  return (
    <>
      <Link href="/">home</Link>
      <Link href="/about">|| about</Link>
      <Link href="/rooms">|| room</Link>
      <Link href="/rooms/1">|| detail</Link>
    </>
  );
};

export default Header;
