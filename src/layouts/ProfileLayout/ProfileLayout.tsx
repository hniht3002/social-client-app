import Header from "@/components/commonComponent/Header/Header";
import ProfileUserInfor from "@/components/LayoutComponent/ProfileLayoutComp/ProfileUserInfor";
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
        <div className="w-full h-full mt-8">{children}</div>
      </div>
    </div>
  );
}

export default ProfileLayout;
