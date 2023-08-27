import {AiOutlineHome} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {FaUserFriends} from 'react-icons/fa'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {AiOutlineSave} from 'react-icons/ai'
function NavBar(){
    const className = 'grid grid-cols-5 ml-2 mt-12 font-bold text-xl cursor-pointer'
    const classIcon = 'mt-1'
    return (
        <div className='w-full mt-12 rounded-lg pb-4 shadow-xl shadow-gray-400'>
           <nav>
           <a href='/'>
                <div className={className}>
                    <AiOutlineHome className={classIcon}/>
                    <p>Home</p>
                </div>
            </a>
            <a href="/trend">
                <div className={className}>
                    <BiTrendingUp className={classIcon}/>
                    <p>Trend</p>
                </div>
            </a>
            <a href="/friend">
                <div className={className}>
                    <FaUserFriends className={classIcon}/>
                    <p>Friend</p>
                </div>
            </a>
            <a href="/group">
                <div className={className}>
                    <HiOutlineUserGroup className={classIcon}/>
                    <p>Group</p>
                </div>
            </a>
            <a href="/save">
                <div className={className}>
                    <AiOutlineSave className={classIcon}/>
                    <p>Save</p>
                </div>
            </a>
           </nav>
        
        </div>
    )
}


export default NavBar