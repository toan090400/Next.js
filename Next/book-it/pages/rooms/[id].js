import { useRouter } from "next/router";
const RoomDetail = () => {
  const router = useRouter();
  const roomId = router.query.id;
  return <h1>RoomDetail page:{roomId}</h1>;
};

export default RoomDetail;
