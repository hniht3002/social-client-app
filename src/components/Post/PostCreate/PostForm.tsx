import { CiCircleRemove } from "react-icons/ci";
import { BsFileEarmarkImage } from "react-icons/bs";
import React, { useState,useEffect } from "react";
import UserView from "@/components/commonComponent/userView/UserView";
import axiosInstance from "@/plugins/axios";
const PostForm:React.FC<any> = ({handleShow,updatePost}) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [file, setFile] = useState<File | null>();
  const [content, setContent] = useState<string>("");
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      setFile(file);
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (typeof e.target?.result == "string") {
          setImageUrl(e.target?.result);
        }
      };
      fileReader.readAsDataURL(file);
    } else {
      alert("Need to select a file");
    }
  };
  const formData = new FormData();
  formData.append("userId", "1");
  formData.append("content", content);
  if (file) {
    formData.append("file", file);
  }
  const handleSubmit = async () => {
    try {
      const message = await axiosInstance.post("/create-post", formData);
      console.log(message.data);
      alert("Create post success")
      if(message.status===200){
        updatePost()
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className={`absolute top-0 bottom-0 left-0 right-0 bg-gray-200/50 w-full h-full flex justify-center items-center`}>
      <div className="w-[450px] h-[450px] bg-white rounded-lg  drop-shadow-2xl">
        <div className="w-full flex justify-around mt-2 pt-4 border-b-[1px] pb-2 border-gray-200">
          <div></div>
          <h1 className="font-bold text-xl">Create Post</h1>
          <CiCircleRemove className="mt-2 font-bold cursor-pointer" onClick={handleShow}/>
        </div>
        <div className="mt-4 ml-2">
          <UserView />
        </div>
        <div className="h-[55%]">
          <div className="w-full mt-2">
            <input
              type="text"
              placeholder="What is happening ?"
              className="py-2 border-none rounded-lg w-4/5"
              onInput={(e) => setContent(e.currentTarget.value)}
            />
          </div>
          <div className="h-3/5">
            <label htmlFor="file" className="p-2 h-full">
              <div className="w-4/5 h-full mx-auto rounded-lg align-center bg-gray-200 outline-none cursor-pointer flex justify-center items-center relative overflow-y-auto">
                <BsFileEarmarkImage className="w-8 h-8" />
                <p className="ml-2 text-2xl"> Add image/video</p>
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Hình ảnh đã chọn"
                    className="absolute bg-gray-200 top-0 left-0 w-full overflow-scroll rounded-lg"
                  />
                )}
              </div>
            </label>
            <input
              type="file"
              name="file"
              id="file"
              className="hidden"
              onInput={handleUpload}
            />
          </div>
        </div>
        <button
          className="bg-blue-400 w-4/5 p-2 rounded-lg text-white"
          onClick={() => {
            handleSubmit();
            handleShow();
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostForm;
