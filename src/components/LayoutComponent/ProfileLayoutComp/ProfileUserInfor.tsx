import axiosInstance from "@/plugins/axios";
import { useEffect, useState } from "react";
import { IFriend } from "@/types/friend/friend";
import handleUrlAvata from "@/services/handleUrlAvata";
import { AiFillCamera } from "react-icons/ai";
import UpdateAvata from "./UpdateAvata";
import { useParams } from "react-router-dom";
import getUser from "@/services/getUserById";
import { useSelector } from "react-redux";
function ProfileUserInfor() {
  const [friend, setFriend] = useState<IFriend[]>();
  const [show,setShow] = useState<boolean>()
  const [avata, setAvata] =useState<any>()
  const [buttonState,setButtonState] = useState<boolean>(true)
  const userMain = useSelector((state:any)=>state.user)
  const id = useParams().id
  const {getUserById,user} = getUser() 
  if(id){
    getUserById(id)
  }
  const handleAvata =async ()=>{
      let url = await handleUrlAvata(`http://localhost:3001/avata/${id}.png`)
      setAvata(url)
  }
  handleAvata()
  const handleShow =()=>{
    setShow(!show)
  }
  const sendAddFriend = ()=>{
    setButtonState(false)
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const friendData = await axiosInstance.get(
          `/get-all-friend?id=${id}`
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
        <div className="flex justify-center">
          <div className="w-[20%] flex justify-center relative lg:w-[50%] md:w-[70%]">
            <img
              src={avata}
              alt=""
              className="mx-auto w-40 h-40 rounded-full p-[4px] bg-white border-blue-100 border-2 mt-4"
            />
            <div className="absolute bottom-2 right-12 cursor-pointer">
              <AiFillCamera onClick={handleShow} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center w-full mt-32">
        <div>
          {!user.name ?<p className="font-bold text-xl">{user.name}</p> : null}
          <p>{friend?.length} friends</p>
        </div>
      </div>
      {buttonState ? <div>
        {id !== userMain.value.data.id ? <button className="bg-blue-400 text-white p-2 rounded-lg mt-4" onClick={sendAddFriend}>Add friend</button> : <p className="text-blue-500">Friend</p>}
      </div>
      : <button className="bg-gray-500 text-white p-2 rounded-lg mt-4">
         Was sent added ! 
      </button>
      }
      {show && <UpdateAvata  handleShow={handleShow}/> }
    </div>
  );
}

export default ProfileUserInfor;
