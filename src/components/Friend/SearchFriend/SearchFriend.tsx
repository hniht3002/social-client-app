import { useEffect, useState } from "react";
import axiosInstance from "@/plugins/axios";
import IUser from "@/types/user/user";
import { AiOutlineSearch } from "react-icons/ai";
const SearchFriend = () => {
  const [value, setValue] = useState<string | "">()
  const [list, setList] = useState<IUser[] | null>()
  const [show,setShow] = useState("hidden")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  const handleClick =()=>{
    setShow("block")
  }
  const handleBlur= ()=>{
    setShow("hidden")
    if(!value){
      setList([])
    }
  }
  useEffect(() => {
    try {
      const sreach = async () => {
        if (value) {
          const userList = await axiosInstance.get(
            `/search-friend?search=${value}`
          );
          setList(userList.data.results);
          console.log(list);
        } else {
          console.log("Need input");
        }
      };
      sreach();
    } catch (error) {
      console.log(error);
    }
  }, [value]);
  return (
    <div onMouseLeave={handleBlur}>
      <input
        type="text"
        placeholder="Search Friend"
        className="mt-4 p-2 rounded-xl border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
        value={value}
        onChange={handleChange}
        onClick={handleClick}
      />
      <div className={show}>
        {list?.length ? (
          <ul className="w-full drop-shadow-xl bg-white pt-8 rounded-xl">
            {list.map((item) => (
              <li key={item.id}>
                <div className=" flex w-5/6 p-2 cursor-pointer gap-4">
                  <div className="mt-2">
                    <AiOutlineSearch />
                  </div>
                  <p className="mt-[4px] ml-4 w-full">{item.name}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto p-8 drop-shadow-xl bg-white pt-8 rounded-xl">
            <h1>Not user to show</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchFriend;
