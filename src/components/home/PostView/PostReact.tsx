import {AiOutlineLike} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {PiShareFatLight} from 'react-icons/pi'
function PostReact(){
    return(
        <div>
            <div className="bg-gray-200 w-[90%] h-[1px] mt-6 mx-auto"></div>
            <div className='flex justify-around mt-2'>
                <div className='flex'>
                    <div className='mt-1'>
                        <AiOutlineLike/>
                    </div>
                    <p className='ml-2'>Thích</p>
                </div>
                <div className='flex'>
                    <div className='mt-1'>
                        <FaRegComment/>
                    </div>
                    <p className='ml-2'>Bình luận</p>
                </div>
                <div className='flex'>
                    <div className='mt-1'>
                        <PiShareFatLight/>
                    </div>
                    <p className='ml-2'>Chia sẻ</p>
                </div>
            </div>
            <div className="bg-gray-200 w-[90%] h-[1px] mt-2 mx-auto"></div>
        </div>
    )
}

export default PostReact