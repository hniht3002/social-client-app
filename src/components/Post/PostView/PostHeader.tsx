import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import UserView from '@/components/commonComponent/userView/UserView'
function PostHeader(){
    return(
        <div className="flex justify-between w-[80%] mx-auto">
           <UserView />
            <div className="flex justify-around mt-4">
                <div className='mr-2'>
                    <AiOutlineMenu/>
                </div>
                <AiOutlineClose/>
            </div>
        </div>
    )
}

export default PostHeader