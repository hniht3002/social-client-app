import { CiCircleRemove } from "react-icons/ci";
import { BsFileEarmarkImage } from "react-icons/bs";
import React, {useState,useEffect} from 'react'
import { useSelector } from "react-redux/es/hooks/useSelector";
import axiosInstance from "@/plugins/axios";
const UpdateAvata:React.FC<any> = ({handleShow,updateAvata}) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [file, setFile] = useState<File | null>();
    const user = useSelector((state:any)=>state.user)
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      const newFileName = user.value.data.id + '.png'
      const renamedFile = new File([file], newFileName, { type: file.type });
      setFile(renamedFile);
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
  if (file) {
    formData.append("file", file);
  }
  const handleSubmit = async () => {
    try {
      const message = await axiosInstance.put("/user/update-avata", formData);
      alert("Update success")
      if(message.status===200){
        updateAvata()
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
        <div className="w-full flex justify-around mt-2 pt-4 border-b-[1px] pb-4 border-gray-200">
          <div></div>
          <h1 className="font-bold text-xl">Pick your avata</h1>
          <CiCircleRemove className="mt-2 font-bold cursor-pointer" onClick={handleShow}/>
        </div>
        <div className="h-[55%]">
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
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateAvata;
