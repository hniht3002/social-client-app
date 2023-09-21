function Trending() {
  return (
    <div className="text-start w-full p-4 rounded-xl">
      <h1 className="font-bold text-2xl">What new for today ? </h1>
      <div className="w-full h-[350px] overflow-hidden">
        <img
          src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
          alt=""
          className="w-full pb-16"
        />
      </div>
      <p className="font-bold mt-2">New president want to VietNam</p>
        <p className="text-blue-400 hover:text-blue-600 cursor-pointer">
          Show more
        </p>
      <div className="grid grid-cols-3 mt-8 gap-6">
        <div>
          <img
            src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
            alt=""
            className="w-full"
          />
          <p className="font-bold mt-2">New president want to VietNam</p>
          <p className="text-blue-400 hover:text-blue-600 cursor-pointer">
            Show more
          </p>
        </div>
        <div>
          <img
            src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
            alt=""
            className="w-full"
          />
          <p className="font-bold mt-2">New president want to VietNam</p>
          <p className="text-blue-400 hover:text-blue-600 cursor-pointer">
            Show more
          </p>
        </div>
        <div>
          <img
            src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
            alt=""
            className="w-full"
          />
          <p className="font-bold mt-2">New president want to VietNam</p>
          <p className="text-blue-400 hover:text-blue-600 cursor-pointer">
            Show more
          </p>
        </div>
        <div>
          <img
            src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
            alt=""
            className="w-full"
          />
          <p className="font-bold mt-2">New president want to VietNam</p>
          <p className="text-blue-400 hover:text-blue-600 cursor-pointer">
            Show more
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trending;
