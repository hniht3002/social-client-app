import { PiShareFatLight } from "react-icons/pi";
import React from "react";
import Like from "@/components/Post/PostView/PostReact/Like";
import Comment from "./Comment";
import { FaTelegramPlane } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IComment } from "@/types/comment/comment";
import axiosInstance from "@/plugins/axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import handleUrlAvata from "@/services/handleUrlAvata";
type IProp = {
  id: number;
};
const PostReact: React.FC<IProp> = (props) => {
  const [update, setUpdate] = useState<boolean>(false);
  const [comment, setComment] = useState<IComment[]>();
  const [commentInput, setCommentInput] = useState<string>();
  const user = useSelector((state:any)=>state.user)
  const [avata, setAvata] =useState<any>()
  const handleAvata =async ()=>{
      let url = await handleUrlAvata(`http://localhost:3001/avata/${user.value.data.id}.png`)
      setAvata(url)
  }
  handleAvata()
  useEffect(() => {
    const getComment = async () => {
      try {
        const commentData = await axiosInstance.get(`/get-comment/${props.id}`);
        setComment(commentData.data.comments);
        
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, [update]);
  const postCommment = async () => {
    try {
      const createComment = await axiosInstance.post(`/create-comment`, {
        userId: user.value.data.id,
        userName:user.value.data.name,
        postId: props.id,
        content: commentInput,
      });
      setCommentInput("");
      if (update === false) {
        setUpdate(true);
      } else {
        setUpdate(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pb-8">
      <div className="bg-gray-200 w-[90%] h-[1px] mt-6 mx-auto"></div>
      <div className="flex justify-around mt-2">
        <Like idPost={props.id} />
        <Comment comment={comment?.length} />
        <div className="flex">
          <div className="mt-1">
            <PiShareFatLight />
          </div>
          <p className="ml-2">Chia sẻ</p>
        </div>
      </div>
      <div className="bg-gray-200 w-[90%] h-[1px] mt-2 mx-auto"></div>
      <div className="flex w-[90%] gap-4 mx-auto mt-4">
        <img
          src={avata}
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Write comment ..."
            className="bg-gray-200 w-full h-full rounded-lg pl-2"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <FaTelegramPlane
            className="absolute top-2 right-4 cursor-pointer"
            onClick={postCommment}
          />
        </div>
      </div>
      <div>
        {comment ? (
          <ul>
            {comment.map((item) => (
              <li key={item.id}>
                <div className="flex w-[90%] mt-6 mx-auto">
                  <img src={`http://localhost:3001/avata/${item.userId}.png`} alt="" className="w-8 h-8 rounded-full" />
                  <div className="text-start ml-4 bg-gray-200 p-2 rounded-lg">
                    <p className="font-semibold">{item.userName}</p>
                    <div className="">{item.content}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8">No comment to show</div>
        )}
      </div>
    </div>
  );
};

export default PostReact;
