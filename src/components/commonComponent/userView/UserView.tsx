import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {useState} from 'react'
import handleUrlAvata from "@/services/handleUrlAvata";
const UserView = () => {
  const user = useSelector((state:any)=>state.user)
  const [avata, setAvata] =useState<any>()
  const handleAvata =async ()=>{
      let url = await handleUrlAvata(`http://localhost:3001/avata/${user.value.data.id}.png`)
      setAvata(url)
  }
  handleAvata()
  return (
    <div>
      <Link to="/profile">
        <div className="flex">
          <img src={avata} alt="" className="w-10 h-10 rounded-full" />
          <div className="ml-4">
            <p className="font-bold mt-[8px]">{user.value.data.name}</p>
          </div>
        </div>
      </Link>
      <Routes>
        <Route path="/profile/post"></Route>
      </Routes>
    </div>
  );
};

export default UserView;
