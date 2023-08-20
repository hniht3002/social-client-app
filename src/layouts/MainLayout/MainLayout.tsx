import Header from '@/components/commonComponent/Header/Header';
import {ReactNode} from 'react'

function MainLayout({children}:{children: ReactNode}) {
    return (
        <div className="wrapper">
            <div className="header sticky top-0">
                <Header/>
            </div>
            <div className="flex align-center m-auto w-5/6 gap-4 h-screen">
                <div className="menu border-2 border-rose-400 flex-1">
                    <h1>Menu</h1>
                </div>

                <div className="main border-2 border-rose-400 w-3/5">
                    {children}
                </div>

                <div className="sidebar border-2 border-rose-400 flex-1">
                    <h1>Sidebar</h1>
                </div>

            </div>
        </div>
    );
}

export default MainLayout;