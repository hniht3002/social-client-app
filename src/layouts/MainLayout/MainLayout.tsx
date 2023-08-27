import Header from '@/components/commonComponent/Header/Header';
import NavBar from '@/components/commonComponent/NavBar/NavBar';
import {ReactNode} from 'react'

function MainLayout({children}:{children: ReactNode}) {
    return (
        <div className="wrapper w-full">
            <div className="header sticky top-0 ">
                <Header/>
            </div>
            <div className="flex align-center m-auto w-[85%] gap-4 h-screen">
                <div className="menu w-1/5">
                    <NavBar/>
                </div>

                <div className="main w-4/5">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;