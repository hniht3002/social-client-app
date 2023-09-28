import { Routes, Route, Link } from "react-router-dom";

function NavProfile() {
  const navClass =
    "font-semibold text-lg px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-200";
  return (
    <div>
      <ul className="flex justify-around w-[70%] mx-auto p-2 border-t-[2px] border-b-[2px]">
        <Link to="/profile/post">
          <li className="font-semibold text-lg px-4 py-2 rounded-xl cursor-pointer bg-gray-200 text-blue-500">
            Post
          </li>
        </Link>
        <Link to="/profile/information">
          <li className={navClass}>Information</li>
        </Link>
      </ul>
      <Routes>
        <Route path="/profile/post"></Route>
        <Route path="/profile/information"></Route>
      </Routes>
    </div>
  );
}

export default NavProfile;
