import FriendCard from "../FriendCard/FriendCard";
import { IFriend } from "@/types/friend/friend";
import axiosInstance from "@/plugins/axios";
import Loading from "@/components/commonComponent/Loading/Loading";
import { useState, useEffect } from "react";
import user from "@/data/userFake";

function FriendAll() {
  const id = user.id;
  const [friend, setFriend] = useState<IFriend[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const friendData = await axiosInstance.get(`/get-all-friend?id=${id}`);
        setFriend(friendData.data.friends);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const newList =(id:number)=>{
    if(friend){
      const updatedFriendList = friend.filter((item) => item.id !== id);
      setFriend(updatedFriendList)
    }
  }
  console.log(friend);
  
  return (
    <div>
      <div>
        {loading ? (
          <div className="w-2/4 mx-auto p-8">
            <Loading />
          </div>
        ) : friend && friend.length > 0 ? (
          <ul className="grid grid-cols-3 gap-2">
            {friend.map((item) => (
              <li key={item.id}>
                <div className="w-full mx-auto mt-12">
                  <FriendCard
                    id={item.id}
                    image={`http://localhost:3001/avata/${item.id}.png`}
                    name="Anh thu"
                    onUpdateListFriend={()=>newList(item.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-2/4">
            <p className="">Let connect send add friend to make new friend.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FriendAll;
