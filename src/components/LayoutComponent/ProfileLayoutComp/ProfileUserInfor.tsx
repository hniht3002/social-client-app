import axiosInstance from "@/plugins/axios";
import user from "@/data/userFake";
import { useEffect, useState } from "react";
import { IFriend } from "@/types/friend/friend";
function ProfileUserInfor() {
  const [friend, setFriend] = useState<IFriend[]>();
  useEffect(() => {
    const getData = async () => {
      try {
        const friendData = await axiosInstance.get(
          `/get-all-friend?id=${user.id}`
        );
        setFriend(friendData.data.friends);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="w-full">
      <div className="relative z-20 h-96">
        <div className="overflow-hidden h-full">
          <img
            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/xinh-dep-nhe-nhang-voi-mai-toc-layer.jpg"
            alt="Ảnh bìa"
            className="w-[70%] mx-auto mt-[-20%]"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/xinh-dep-nhe-nhang-voi-mai-toc-layer.jpg"
            alt=""
            className="absolute bottom-[-100px] mx-auto w-36 h-36 rounded-full p-[4px] bg-white"
          />
        </div>
      </div>
      <div className="text-center w-full mt-32">
        <div>
          <p className="font-bold text-xl">Đoàn Văn Hiệp</p>
          <p>{friend?.length} friends</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserInfor;
