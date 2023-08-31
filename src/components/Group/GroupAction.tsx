import {BiSearch} from 'react-icons/bi'
function GroupAction(){
    return(
        <div className='w-[90%]'>
            <div className='relative'>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-lg hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search for group"/>
                <div className='absolute top-4 right-8 text-gray-400 cursor-pointer hover:border-gray-400 transition-colors'>
                    <BiSearch/>
                </div>
            </div>
            <div className='mt-8 w-[95%] mx-auto'>
                <p className='p-3 bg-blue-100 text-blue-600 rounded-xl cursor-pointer'>+  Create a new group</p>
            </div>
        </div>
    )
}

export default GroupAction