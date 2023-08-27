import {CiMenuKebab} from 'react-icons/ci'
function Trending(){
    return(
        <div className="text-start w-full  shadow-xl shadow-gray-400 p-4 rounded-xl">
            <h1 className="font-bold text-2xl">What new for today ? </h1>
            <div>
                <div className="w-full bg-gray-100 p-2 mt-4 flex justify-between rounded-xl cursor-pointer hover:bg-gray-200 transiton-colors">
                    <div>
                        <p className="font-bold">Vinfast</p>
                        <p className="mt-2">200k posts</p>
                    </div>
                    <div className='mt-2'>
                        <CiMenuKebab/>
                    </div>
                </div>
                <div className="w-full bg-gray-100 p-2 mt-4 flex justify-between rounded-xl cursor-pointer hover:bg-gray-200 transiton-colors">
                    <div>
                        <p className="font-bold">Vinfast</p>
                        <p className="mt-2">200k posts</p>
                    </div>
                    <div className='mt-2'>
                        <CiMenuKebab/>
                    </div>
                </div>
                <div className="w-full bg-gray-100 p-2 mt-4 flex justify-between rounded-xl cursor-pointer hover:bg-gray-200 transiton-colors">
                    <div>
                        <p className="font-bold">Vinfast</p>
                        <p className="mt-2">200k posts</p>
                    </div>
                    <div className='mt-2'>
                        <CiMenuKebab/>
                    </div>
                </div>
                <div className="w-full bg-gray-100 p-2 mt-4 flex justify-between rounded-xl cursor-pointer hover:bg-gray-200 transiton-colors">
                    <div>
                        <p className="font-bold">Vinfast</p>
                        <p className="mt-2">200k posts</p>
                    </div>
                    <div className='mt-2'>
                        <CiMenuKebab/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending