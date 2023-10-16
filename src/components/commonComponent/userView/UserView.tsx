import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const UserView = () => {
  const user = useSelector((state:any)=>state.user)
  console.log(user);
  
  return (
    <div>
      <Link to="/profile">
        <div className="flex">
          <img src={`http://localhost:3001/avata/1.png`} alt="" className="w-10 h-10 rounded-full" />
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
