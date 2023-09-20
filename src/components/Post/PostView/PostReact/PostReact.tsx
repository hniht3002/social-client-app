import { FaRegComment } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import React from "react";
import Like from '@/components/Post/PostView/PostReact/Like'
type IProp = {
  id: number;
};
const PostReact: React.FC<IProp> = (props) => {
  return (
    <div className="pb-12">
      <div className="bg-gray-200 w-[90%] h-[1px] mt-6 mx-auto"></div>
      <div className="flex justify-around mt-2">
        <Like idPost={props.id}/>
        <div className="flex">
          <div className="mt-1">
            <FaRegComment />
          </div>
          <p className="ml-2">Bình luận</p>
        </div>
        <div className="flex">
          <div className="mt-1">
            <PiShareFatLight />
          </div>
          <p className="ml-2">Chia sẻ</p>
        </div>
      </div>
      <div className="bg-gray-200 w-[90%] h-[1px] mt-2 mx-auto"></div>
    </div>
  );
};

export default PostReact;
