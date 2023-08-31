function NavProfile() {
  const navClass =
    "font-semibold text-lg px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-200";
  return (
    <div>
      <ul className="flex justify-around w-[70%] mx-auto p-2 border-t-[2px]">
        <li className="font-semibold text-lg px-4 py-2 rounded-xl cursor-pointer bg-gray-200 text-blue-500">Post</li>
        <li className={navClass}>Friend</li>
        <li className={navClass}>Information</li>
        <li className={navClass}>Save</li>
      </ul>
    </div>
  );
}

export default NavProfile;
