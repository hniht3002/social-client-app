import React from "react";
import axiosInstance from "@/plugins/axios";
type IFriend = {
  id: number;
  image: string;
  name: string;
  onUpdateListFriend: () => void;
};
const FriendCard: React.FC<IFriend> = (props) => {
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/delete-friend/${props.id}`);
      props.onUpdateListFriend();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white shadow-md rounded-xl pb-2 h-[95%] cursor-pointer">
      <img src={props.image} alt="" className="rounded-xl w-full h-[200px]" />
      <div>
        <p className="font-semibold text-xl mt-4 pb-2 cursor-pointer">{props.name}</p>
      </div>
    </div>
  );
};

export default FriendCard;
