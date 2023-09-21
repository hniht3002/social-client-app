import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import UserView from "@/components/commonComponent/userView/UserView";
import { useEffect, useState } from "react";
import React from "react";
import axiosInstance from "@/plugins/axios";
import user from "@/data/userFake";
type IProp = {
  idPost: number;
};
const PostHeader: React.FC<IProp> = (prop) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  useEffect(() => {
    if (save) {
      const saveFunc = async () => {
        const saveRes = await axiosInstance.post("/create-save", {
          idUser: user.id,
          idPost: prop.idPost,
        });
        console.log(saveRes.data);
        alert("Saved post");
      };
      saveFunc();
    }
  }, [save]);
  const savePost = () => {
    setSave(true);
  };
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex justify-between w-[90%] mx-auto pt-6">
      <UserView />
      <div className="flex justify-around mt-4">
        <div className="mr-2 cursor-pointer relative">
          <AiOutlineMenu onClick={handleMenu} />
          {showMenu && (
            <div className="absolute w-32 text-start bg-white shadow-lg mt-2 p-2 rounded-lg">
              <p
                className="cursor-pointer hover:bg-gray-200 p-1 rounded-md"
                onClick={savePost}
              >
                Save Post
              </p>
              <p className="cursor-pointer hover:bg-gray-200 p-1 rounded-md">
                Report
              </p>
            </div>
          )}
        </div>
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default PostHeader;
