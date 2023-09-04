import GearFriend from "../LayoutComponent/GearFriend/GearFriend";
import FriendCard from "./FriendCard/FriendCard";
function FriendAll() {
  return (
    <div>
      <div className="flex justify-around">
        <div></div>
        <h1 className="font-bold text-2xl">Friends</h1>
        <div>
          <GearFriend/>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-8 gap-2">
        <FriendCard image="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg" name="Anh thư"/>
        <FriendCard image="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg" name="Anh thư"/>
        <FriendCard image="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg" name="Anh thư"/>
        <FriendCard image="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg" name="Anh thư"/>
      </div>
    </div>
  );
}

export default FriendAll;
