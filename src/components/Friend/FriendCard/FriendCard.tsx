import React from "react";
type IFriend = {
  image:string,
  name:string
}
const FriendCard:React.FC<IFriend> = (props) =>{
  return (
    <div className="bg-white shadow-md rounded-xl pb-2 h-[95%]">
      <img
        src={props.image}
        alt=""
        className="rounded-xl h-[60%] w-full"
      />
      <div>
        <p className="font-bold text-2xl">{props.name}</p>
        <button className="p-2 bg-red-300 text-white rounded-xl hover:bg-red-400 mt-2">
          Delete friend
        </button>
        <button className="p-2 px-4 bg-gray-200 text-black rounded-xl hover:bg-gray-300 mt-2">
          Add block
        </button>
      </div>
    </div>
  )
}

export default FriendCard;
