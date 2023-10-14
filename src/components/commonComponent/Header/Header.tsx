import { FaBell, FaUser } from "react-icons/fa";
import { AiTwotoneMessage } from "react-icons/ai";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import user from "@/data/userFake";
import Tippy from "@tippyjs/react/headless";
import { Route, Routes, Link } from "react-router-dom";
import NavBarMobile from "../NavBar/NavBarMobile";
function Header() {
  return (
    <div className="wrapper w-full pb-1 shadow-xl shadow-gray-200 bg-white">
      <div className="flex justify-between w-5/6 m-auto h-14 items-center gap-4">
        <Link to="/">
          <div className="logo flex gap-2 sm:block sm:w-8 sm:h-8">
            <img
              src="https://img.freepik.com/premium-vector/round-twitter-logo-isolated-white-background_469489-899.jpg"
              alt="Logo"
              className="w-8 h-8"
            />
            <p className="text-blue-400 font-bold mt-1 sm:hidden">ShareHanu</p>
          </div>
        </Link>
        <div className="">
          <NavBarMobile/>
        </div>
        <div className="search w-1/2 sm:hidden sm:w-1/3">
          <div className="relative mt-1">
            <input
              type="text"
              id="password"
              className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Search..."
            />
            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
              <PiMagnifyingGlassDuotone />
            </button>
          </div>
        </div>

        <div className="menu flex gap-5">
          <Tippy
            arrow={true}
            render={(attrs) => (
              <div className="box bg-white border-[1px] border-gray-100 py-2 px-4">
                <h2>Notification</h2>
              </div>
            )}
          >
            <div>
              <FaBell size={20} className=" cursor-pointer" />
            </div>
          </Tippy>

          <Tippy
            arrow={true}
            render={(attrs) => (
              <div className="box bg-white border-[1px] border-gray-100 py-2 px-4 cursor-pointer">
                <h2>Message</h2>
              </div>
            )}
          >
            <div>
              <AiTwotoneMessage size={20} className=" cursor-pointer" />
            </div>
          </Tippy>

          <Link to="/profile">
            <Tippy
              arrow={true}
              placement="bottom-end"
              render={(attrs) => (
                <div className="box flex bg-white gap-4 border-[1px] border-gray-100 py-2 px-4 rounded-lg">
                  <img
                    src={user.avata}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <h2 className="mt-1">{user.name}</h2>
                </div>
              )}
            >
              <div>
                <FaUser size={20} />
              </div>
            </Tippy>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/profile"></Route>
      </Routes>
    </div>
  );
}

export default Header;
