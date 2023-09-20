import { AiOutlineLike } from "react-icons/ai";
import user from "@/data/userFake";
import axiosInstance from "@/plugins/axios";
import React, { useState, useEffect } from "react";
import ILike from "@/types/post/like";
type IProp = {
  idPost: number;
};
const Like: React.FC<IProp> = (props) => {
  const [like, setLike] = useState<ILike[]>();
  const [likeUI, setLikeUI] = useState<boolean>();
  useEffect(() => {
    const getLikeData = async () => {
      try {
        const likeData = await axiosInstance.get(`/get-like-post/${props.idPost}`);
        setLike(likeData.data.data);
        likeData.data.data.forEach((item: ILike) => {
          if (user.id === item.idUser) {
            setLikeUI(true);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    getLikeData();
  }, []);
  const likeAction = async () => {
    try {
      const like = await axiosInstance.post("/create-like", {
        idUser: user.id,
        idPost: props.idPost,
      });
      console.log(like.data);
    } catch (error) {
      console.log(error);
    }
  };
  const unLike = async () => {
    try {
      const unlike = await axiosInstance.delete("/delete-like", {
        data: { idUser: user.id, idPost: props.idPost },
      });
      console.log(unlike.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = () => {
    if (likeUI === true) {
      setLikeUI(false);
      unLike();
    }
    if (likeUI === false) {
      setLikeUI(true);
      likeAction();
    }
  };
  return (
    <div>
      {likeUI}
      <div className="flex cursor-pointer" onClick={handleLike}>
        <div className={`mt-1 ${likeUI ? "text-blue-500" : ""}`}>
          <AiOutlineLike />
        </div>
        <p className={`ml-2 ${likeUI ? "text-blue-500" : ""}`}>Thích</p>
      </div>
    </div>
  );
};

export default Like;
