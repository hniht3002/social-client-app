function PostForm(){
    const cols =48;
    const rows= 3;
    const shareClass = "flex justify-around w-full"
    return(
        <div className="flex gap-4 ml-10">
            <img src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" alt="" className="rounded-full w-12 h-12"/>
            <div>
                <textarea name="" id="" cols={cols} rows={rows} placeholder="What is happening?" className="border-2 border-gray-500 resize-none rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"></textarea>
                <div className="grid grid-cols-4 gap-1 mt-4">
                    <div className={shareClass}>
                        <img src="/homeImage/image.png" alt="Post icon" className="w-8 h-8"/>
                        <p className="mt-1">Hình ảnh</p>
                    </div>
                    <div className={shareClass}>
                        <img src="/homeImage/video.png" alt="Video" className="w-8 h-8" />
                        <p className="mt-1 mr-2">Video</p>
                    </div>
                    <div className={shareClass}>
                        <img src="/homeImage/emotion.png" alt="Emotion" className="w-8 h-8"/>
                        <p className="mt-1 ml-2">Biểu cảm</p>
                    </div>
                   <div>
                   <button className="bg-blue-500 text-white py-2 px-4 rounded-xl border-blue-500 border-2 hover:bg-white hover:border-blue-500 hover:text-blue-500 transition-colors"> 
                        Post
                    </button>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default PostForm