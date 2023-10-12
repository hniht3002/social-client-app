import user from "@/data/userFake"
const UserInformation = () =>{
    return(
        <div className="p-4 mt-8 rounded-lg shadow-[0px_0px_15px_15px] shadow-gray-100">
            <h1 className="font-bold text-2xl">Introduce</h1>
            <div className="text-start ml-[15%]">
                <p className="mt-4 text-semibold">Name : {user.name}</p>
                <p className="mt-4 text-semibold">Email : {user.email}</p>
                <p className="mt-4 text-semibold">Date : {user.birdthday}</p>
                <p className="mt-4 text-semibold">Address : {user.address}</p>
            </div>
            <button className="mt-6 p-2 cursor-pointer hover:bg-blue-500 bg-blue-400 rounded-lg w-[70%] text-white">
                Insert more information
            </button>
            <button className="mt-6 cursor-pointer hover:bg-blue-500 p-2 bg-blue-400 rounded-lg w-[70%] text-white">
                Update information
            </button>
        </div>
    )
}

export default UserInformation