import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
function postHeader(){
    return(
        <div className="flex justify-between w-[80%] mx-auto">
            <div className="flex">
                <img src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" alt="" className="w-12 h-12 rounded-full"/>
                <div className='ml-4'>
                    <p className='font-bold'>Anh Thư</p>
                    <p>12 phút trước</p>
                </div>
            </div>
            <div className="flex justify-around mt-4">
                <div className='mr-2'>
                    <AiOutlineMenu/>
                </div>
                <AiOutlineClose/>
            </div>
        </div>
    )
}

export default postHeader