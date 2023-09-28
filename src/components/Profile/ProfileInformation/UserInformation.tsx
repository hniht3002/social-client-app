import user from "@/data/userFake"
const UserInformation = () =>{
    return(
        <div className="p-4 mt-8 rounded-lg bg-blue-400 text-white">
            <h1 className="font-bold text-2xl">Introduce</h1>
            <div className="text-start ml-[15%]">
                <p className="mt-4 text-semibold">Name : {user.name}</p>
                <p className="mt-4 text-semibold">Email : {user.email}</p>
                <p className="mt-4 text-semibold">Date : {user.birdthday}</p>
                <p className="mt-4 text-semibold">Address : {user.address}</p>
            </div>
            <button className="mt-6 p-2 cursor-pointer hover:bg-yellow-400 bg-yellow-300 rounded-lg w-[70%]">
                Insert more information
            </button>
            <button className="mt-6 cursor-pointer hover:bg-yellow-400 p-2 bg-yellow-300 rounded-lg w-[70%]">
                Update information
            </button>
        </div>
    )
}

export default UserInformation