import Link from "next/link";
const Header = () => {
  return (
    <>
      <Link href="/">home</Link>
      <Link href="/rooms/1">|| detail</Link>
      {/* <a href="/">home</a> */}
      {/* <a href="/about">|| about</a>
      <a href="/rooms">|| room</a>
      <a href="/rooms/1">|| detail</a> */}
    </>
  );
};

export default Header;
