import axiosInstance from "@/plugins/axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { IFriend } from "@/types/friend/friend";
import handleUrlAvata from "@/services/handleUrlAvata";
import { AiFillCamera } from "react-icons/ai";
import UpdateAvata from "./UpdateAvata";
function ProfileUserInfor() {
  const [friend, setFriend] = useState<IFriend[]>();
  const [show,setShow] = useState<boolean>()
  const [avata, setAvata] =useState<any>()
  const user = useSelector((state:any)=>state.user)
  const handleAvata =async ()=>{
      let url = await handleUrlAvata(`http://localhost:3001/avata/${user.value.data.id}.png`)
      setAvata(url)
  }
  handleAvata()
  const handleShow =()=>{
    setShow(!show)
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const friendData = await axiosInstance.get(
          `/get-all-friend?id=${user.value.data.id}`
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
      <div className="relative h-20 sm:h-24">
        {/* <div className="overflow-hidden h-full sm:hidden">
          <img
            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/xinh-dep-nhe-nhang-voi-mai-toc-layer.jpg"
            alt="Ảnh bìa"
            className="w-[70%] mx-auto mt-[-20%]"
          />
        </div> */}
        <div className="flex justify-center">
          <div className="w-[20%] flex justify-center relative lg:w-[50%] md:w-[70%]">
            <img
              src={avata}
              alt=""
              className="mx-auto w-40 h-40 rounded-full p-[4px] bg-white"
            />
            <div className="absolute bottom-2 right-12 cursor-pointer">
              <AiFillCamera onClick={handleShow} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center w-full mt-32">
        <div>
          <p className="font-bold text-xl">{user.value.data.name}</p>
          <p>{friend?.length} friends</p>
        </div>
      </div>
      {show && <UpdateAvata  handleShow={handleShow}/> }
    </div>
  );
}

export default ProfileUserInfor;
