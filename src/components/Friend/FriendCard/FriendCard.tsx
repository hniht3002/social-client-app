import React from "react"
import axiosInstance from "@/plugins/axios";
type IFriend = {
  id:number
  image: string;
  name: string;
  onUpdateListFriend:() => void
};
const FriendCard: React.FC<IFriend> = (props) => {
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/delete-friend/${props.id}`);
      props.onUpdateListFriend()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-white shadow-md rounded-xl pb-2 h-[95%]">
      <img src={props.image} alt="" className="rounded-xl h-[60%] w-full" />
      <div>
        <p className="font-bold text-2xl">{props.name}</p>

        <button
      className="p-2 bg-red-300 text-white rounded-xl hover:bg-red-400 mt-2"
      onClick={()=>handleDelete()}
    >
      Delete friend
    </button>
        <button className="p-2 px-4 bg-gray-200 text-black rounded-xl hover:bg-gray-300 mt-2">
          Add block
        </button>
      </div>
    </div>
  );
};

export default FriendCard;
