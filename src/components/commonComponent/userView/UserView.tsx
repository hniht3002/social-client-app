import user from "@/data/userFake";
import { Link, Route, Routes } from "react-router-dom";
const UserView = () => {
  return (
    <div>
      <Link to="/profile">
        <div className="flex">
          <img src={user.avata} alt="" className="w-10 h-10 rounded-full" />
          <div className="ml-4">
            <p className="font-bold mt-[8px]">{user.name}</p>
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
