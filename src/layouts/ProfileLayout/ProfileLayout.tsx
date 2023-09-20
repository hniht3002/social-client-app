import Header from "@/components/commonComponent/Header/Header";
import ProfileUserInfor from "@/components/LayoutComponent/ProfileLayoutComp/ProfileUserInfor";
import NavProfile from "@/components/LayoutComponent/NavProfile/NavProfile";
import { ReactNode } from "react";
function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div>
        <div>
          <ProfileUserInfor />
        </div>
        <div className="mt-16">
            <NavProfile/>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ProfileLayout;
