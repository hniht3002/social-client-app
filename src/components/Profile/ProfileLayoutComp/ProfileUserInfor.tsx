import { BiPencil } from "react-icons/bi";
function ProfileUserInfor() {
  return (
    <div>
      <div className="relative z-20 h-96">
        <div className="overflow-hidden h-full">
          <img
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/244514399_278289444038917_6960770499559290186_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=wY0BrAqu9VIAX99pf3l&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCiYVgzRMGkxQEFgGu9O7zAYbHxVjaWCZNwhE1CNvU5gA&oe=64F4AEF1"
            alt="Ảnh bìa"
            className="w-[70%] mx-auto mt-[-20%]"
          />
        </div>
        <img
          src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/368244789_722484509619406_8533023533852177200_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ERc-mJPdDuEAX_D6c-q&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBT-Lz5bW_y4gbaXBpN-MOsE57JSOB2ZFiGkEv_tXnWOw&oe=64F30830"
          alt=""
          className="absolute bottom-[-100px] left-[20%] w-36 h-36 rounded-full p-[4px] bg-white"
        />
      </div>
      <div className="flex justify-around ml-[30%] mt-4 w-[55%]">
        <div>
          <p className="font-bold text-xl">Đoàn Văn Hiệp</p>
          <p>173 Friend</p>
        </div>
        <div className="flex">
          <button className="py-2 px-4 bg-blue-600 font-semibold text-white rounded-xl">
            + Add information
          </button>
          <button className="flex pt-3 px-4 bg-gray-200 rounded-xl ml-4">
            <BiPencil className="mt-[2px]" />
            <p className="ml-2">Adjust information</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserInfor;
