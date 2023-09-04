import { useState } from "react";
import {AiFillSetting} from 'react-icons/ai'
function GearFriend() {
    let [state, setState] = useState("");
    let [toggle, setToggle] = useState("hidden")
    let [show, setShow] = useState(false)
  const handleClick = () => {
    if(show === false){
        setShow(show=true)
    } else if(show === true){
        setShow(show=false)
    }
    if(state===""){
        setState(state="animate-spin")
        setTimeout(()=>{
            setState(state="")
        },200)
    }
    if(show){
        setToggle(toggle="block")
    }
    else{
        setTimeout(()=>{
            setToggle(toggle="hidden")
        },200)
    }
  };
  return (
    <div>
      <div className="mt-2 cursor-pointer relative">
        <div onClick={handleClick} className={state}>
          <AiFillSetting />
        </div>
        <div className={toggle}>
          <div className="absolute bg-gray-100 w-36 text-start top-6 left-[-64px] p-2 rounded-xl">
            <p className="hover:bg-gray-200 p-1">Friend request</p>
            <p className="hover:bg-gray-200 p-1">Friend block</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GearFriend