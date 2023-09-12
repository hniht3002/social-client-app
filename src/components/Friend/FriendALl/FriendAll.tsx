import GearFriend from "../../LayoutComponent/GearFriend/GearFriend"
import FriendCard from "../FriendCard/FriendCard"
import {IFriend} from "@/types/friend/friend"
import axiosInstance from "@/plugins/axios"
import Loading from "@/components/commonComponent/Loading/Loading"
import {useState,useEffect} from 'react'
function FriendAll() {
  const id = 1
  const [friend,setFriend] = useState<IFriend[]>()
  useEffect(()=>{
    const getData =async ()=>{
      try {
        const friendData =await axiosInstance.get(`/get-all-friend?id=${id}`)
        setFriend(friendData.data.friends)
      } catch (error) {
        console.log(error);
      }
    }
    getData()

  },[])
  console.log(friend);
  
  return (
    <div>
      <div className="flex justify-around">
        <div></div>
        <h1 className="font-bold text-2xl">Friends</h1>
        <div>
          <GearFriend/>
        </div>
      </div>
      <div>
      <div>
        {friend ? (
          <ul className="grid grid-cols-3 mt-8 gap-2">
            {friend.map((item) => (
              <li key={item.id}>
                <div className="w-full mx-auto mt-12">
                  <FriendCard image={`http://localhost:3001/avata/${item.id}.png`} name = "Anh thu"/>
                </div>
              </li>
            ))}
          </ul>
        ) : (
            <div className="w-2/4 mx-auto p-8">
                <Loading/>
            </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default FriendAll;
