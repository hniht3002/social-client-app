import {AiOutlineHome} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {FaUserFriends} from 'react-icons/fa'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {AiOutlineSave} from 'react-icons/ai'
import { Route, Routes, Link } from 'react-router-dom'
function NavBar(){
    const className = 'grid grid-cols-5 ml-2 mt-8 font-bold text-xl cursor-pointer hover:bg-gray-100 hover:text-blue-600 p-2 rounded-lg fade-out pl-6'
    const classIcon = 'mt-1'
    return (
        <div className='w-full pt-12 pb-4 border-r-2 border-gray-200 h-[100vh]'>
           <nav>
           <Link to='/'>
                <div className={className}>
                    <AiOutlineHome className={classIcon}/>
                    <p>Home</p>
                </div>
            </Link>
            <Link to="/trend">
                <div className={className}>
                    <BiTrendingUp className={classIcon}/>
                    <p>Trend</p>
                </div>
            </Link>
            <Link to="/friend">
                <div className={className}>
                    <FaUserFriends className={classIcon}/>
                    <p>Friend</p>
                </div>
            </Link>
            <Link to="/group">
                <div className={className}>
                    <HiOutlineUserGroup className={classIcon}/>
                    <p>Group</p>
                </div>
            </Link>
            <Link to="/save">
                <div className={className}>
                    <AiOutlineSave className={classIcon}/>
                    <p>Save</p>
                </div>
            </Link>
           </nav>
            <Routes>
                <Route path="/"></Route>
                <Route path="/friend"></Route>
                <Route path="/trend"></Route>
                <Route path="/group"></Route>
                <Route path="/save"></Route>
            </Routes>
        </div>
    )
}


export default NavBar