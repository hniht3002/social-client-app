function PostShow() {
  const shareClass = "flex justify-around w-full cursor-pointer";
  return (
    <div className="flex gap-4 justify-center bg-white p-4 rounded-lg">
      <img
        src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
        alt=""
        className="rounded-full w-12 h-12"
      />
      <div className="w-full">
        <textarea
          name=""
          id=""
          placeholder="What is happening?"
          className="px-4 py-2 border-2 border-gray-500 resize-none w-full h-12 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
        ></textarea>
        <div className="grid grid-cols-4 gap-1 mt-4">
          <div className={shareClass}>
            <img
              src="/homeImage/image.png"
              alt="Post icon"
              className="w-8 h-8"
            />
            <div>
              <label htmlFor="image" className="cursor-pointer">
                <p className="mt-1">Image</p>
              </label>
            </div>
          </div>
          <div className={shareClass}>
            <img src="/homeImage/video.png" alt="Video" className="w-8 h-8" />
            <p className="mt-1 mr-2">Video</p>
          </div>
          <div className={shareClass}>
            <img
              src="/homeImage/emotion.png"
              alt="Emotion"
              className="w-8 h-8"
            />
            <p className="mt-1 ml-2">Emoji</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostShow
