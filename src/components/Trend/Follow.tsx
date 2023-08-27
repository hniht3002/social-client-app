function Follow(){
    return(
        <div className="bg-gray-100 rounded-xl pt-4">
            <h1 className="font-bold text-2xl">Follow</h1>
            <div className="flex justify-around mt-4 pb-4 hover:bg-gray-200 cursor-pointer pt-2">
                <div className="flex">
                    <img src="https://i.imgur.com/prxiiUJ.jpg" alt="" className="w-12 h-12 rounded-xl"/>
                    <div className="ml-2">
                        <p>DoanHiep</p>
                        <p>@hiep</p>
                    </div>
                </div>
                <button className="bg-black text-white px-4 rounded-xl">Follow</button>
            </div>
        </div>
    )
}

export default Follow