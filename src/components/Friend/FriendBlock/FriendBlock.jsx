import GearFriend from "../../LayoutComponent/GearFriend/GearFriend"
import FriendCard from "../FriendCard/FriendCard"
import axiosInstance from "@/plugins/axios"
import Loading from "@/components/commonComponent/Loading/Loading"
import {useState,useEffect} from 'react'
function FriendAll() {
  const id = 1
  const [block,setBlock] = useState()
  useEffect(()=>{
    const getData =async ()=>{
      try {
        const blockData =await axiosInstance.get(`/get-block-friend?id=${id}`)
        setBlock(blockData.data.friends)
      } catch (error) {
        console.log(error);
      }
    }
    getData()

  },[])
  
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
        {block ? (
          <ul className="grid grid-cols-3 mt-8 gap-2">
            {block.map((item) => (
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