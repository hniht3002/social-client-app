import { FaBell, FaUser } from 'react-icons/fa';
import {AiTwotoneMessage} from 'react-icons/ai'
import {PiMagnifyingGlassDuotone} from "react-icons/pi"
import Tippy from '@tippyjs/react/headless';
function Header() {
    return (<div className="wrapper w-full pb-1 shadow-xl shadow-gray-200 bg-white">
        <div className="flex justify-between w-5/6 m-auto h-14 items-center">
            <div className="logo">
                <img src="../../../assets/logo/logo.png" alt="Logo" />
            </div>

            <div className="search w-1/2">
                <div className="relative mt-1">
                    <input type="text" id="password" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search..."/>
                    <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
                        <PiMagnifyingGlassDuotone/>
                    </button>
                </div>
            </div>

            <div className="menu flex gap-5">
                <Tippy arrow={true} render={attrs => (
                    <div className="box bg-white border-2 border-rose-600">
                        <h2>Notification</h2>
                    </div>
                )}>
                    <div><FaBell size={20}/></div>
                </Tippy>


                <Tippy arrow={true} render={attrs => (
                    <div className="box bg-white border-2 border-rose-600">
                        <h2>Message</h2>
                    </div>
                )}>
                    <div><AiTwotoneMessage size={20}/></div>
                </Tippy>

                <Tippy arrow={true} 
                        placement='bottom-end'
                render={attrs => (
                    <div className="box bg-white border-2 border-rose-600">
                        <h2>Profile</h2>
                    </div>
                )}>
                    <div><FaUser size={20}/></div>
                </Tippy>
            </div>
        </div>
        
    </div> );
}

export default Header;