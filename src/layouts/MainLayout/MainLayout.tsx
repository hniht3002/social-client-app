import Header from "@/components/commonComponent/Header/Header";
import NavBar from "@/components/commonComponent/NavBar/NavBar";
import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="wrapper w-full">
      <div className="header sticky top-0 ">
        <Header />
      </div>
      <div className="w-full">
        <div className="flex align-center m-auto w-[75%] gap-4 sm:block sm:mx-auto sm:w-[90%]">
          <div className="w-[18%] fixed left-0 top-16 sm:absolute sm:w-[60%] sm:bg-white sm:top-8 sm:left-0 xl:absolute xl:w-[30%] xl:bg-white">
            <NavBar />
          </div>
          <div className="w-1/5 sm:hidden"></div>
          <div className="w-4/5 sm:w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
