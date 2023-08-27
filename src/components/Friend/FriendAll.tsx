import {AiFillSetting} from 'react-icons/ai'
function FriendAll(){
    return(
        <div>
            <div className='flex justify-around'>
                <div></div>
                <h1 className="font-bold text-2xl">Friends</h1>
                <div className='mt-2 cursor-pointer relative' >
                    <AiFillSetting/>
                    <div className='absolute bg-gray-100 w-36 text-start top-6 left-[-64px] p-2 rounded-xl'>
                        <p className='hover:bg-gray-200 p-1'>Friend request</p>
                        <p className='hover:bg-gray-200 p-1'>Friend block</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 mt-8 gap-2">
                <div className="bg-white shadow-md rounded-xl h-[95%]">
                    <img src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg" alt="" className='rounded-xl h-[60%] w-full'/>
                    <div>
                        <p className="font-bold text-2xl">Anh thư</p>
                        <button className="p-2 bg-red-300 text-white rounded-xl hover:bg-red-400 mt-2">Delete friend</button>
                        <button className="p-2 px-4 bg-gray-200 text-black rounded-xl hover:bg-gray-300 mt-2">Add block</button>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-xl pb-2 h-[95%]">
                    <img src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg" alt="" className='rounded-xl h-[60%] w-full'/>
                    <div>
                        <p className="font-bold text-2xl">Anh thư</p>
                        <button className="p-2 bg-red-300 text-white rounded-xl hover:bg-red-400 mt-2">Delete friend</button>
                        <button className="p-2 px-4 bg-gray-200 text-black rounded-xl hover:bg-gray-300 mt-2">Add block</button>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-xl pb-2 h-[95%]">
                    <img src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg" alt="" className='rounded-xl h-[60%] w-full'/>
                    <div>
                        <p className="font-bold text-2xl">Anh thư</p>
                        <button className="p-2 bg-red-300 text-white rounded-xl hover:bg-red-400 mt-2">Delete friend</button>
                        <button className="p-2 px-4 bg-gray-200 text-black rounded-xl hover:bg-gray-300 mt-2">Add block</button>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-xl pb-2 h-[95%]">
                    <img src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg" alt="" className='rounded-xl h-[60%] w-full'/>
                    <div>
                        <p className="font-bold text-2xl">Anh thư</p>
                        <button className="p-2 bg-red-300 text-white rounded-xl hover:bg-red-400 mt-2">Delete friend</button>
                        <button className="p-2 px-4 bg-gray-200 text-black rounded-xl hover:bg-gray-300 mt-2">Add block</button>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-xl pb-2 h-[95%]">
                    <img src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg" alt="" className='rounded-xl h-[60%] w-full'/>
                    <div>
                        <p className="font-bold text-2xl">Anh thư</p>
                        <button className="p-2 bg-red-300 text-white rounded-xl hover:bg-red-400 mt-2">Delete friend</button>
                        <button className="p-2 px-4 bg-gray-200 text-black rounded-xl hover:bg-gray-300 mt-2">Add block</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendAll