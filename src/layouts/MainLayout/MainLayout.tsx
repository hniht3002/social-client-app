import Header from "@/components/commonComponent/Header/Header";
import NavBar from "@/components/commonComponent/NavBar/NavBar";
import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="wrapper w-full">
      <div className="header sticky top-0 ">
        <Header />
      </div>
      <div className="w-full bg-gray-100">
        <div className="flex align-center m-auto w-[75%] gap-4">
          <div className="w-[18%] fixed left-0 top-16">
            <NavBar />
          </div>
          <div className="w-1/5"></div>
          <div className="w-4/5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
