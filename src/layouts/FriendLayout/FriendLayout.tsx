import GearFriend from "@/components/LayoutComponent/GearFriend/GearFriend";
import { ReactNode } from "react";
import Header from "@/components/commonComponent/Header/Header";
import NavBar from "@/components/commonComponent/NavBar/NavBar";
import FriendSuggestion from "@/components/Friend/FriendSuggestion";
import SearchFriend from "@/components/Friend/SearchFriend/SearchFriend";
const FriendLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrapper w-full">
      <div className="header sticky top-0 ">
        <Header />
      </div>
      <div className="flex align-center m-auto w-[90%] gap-2 h-screen">
        <div className="w-[18%] fixed left-0 top-16">
          <NavBar />
        </div>
        <div className="w-[18%]"></div>
        <div className="main basis-4/5 flex mt-12 md:block">
          <div className="basis-4/5">
            <div className="flex justify-around">
              <div></div>
              <h1 className="font-bold text-2xl">Friends</h1>
              <div>
                <GearFriend />
              </div>
            </div>
            <div>{children}</div>
          </div>
          <div className="basis-1/5">
            <FriendSuggestion />
            <div>
              <SearchFriend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendLayout;
