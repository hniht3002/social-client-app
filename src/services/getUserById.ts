import axiosInstance from "@/plugins/axios"
import IUser from "@/types/user/user"
let user:IUser = {
    id:1,
    name:"",
    password:"",
    email:"",
    birdthday:"",
    address:"",
    role:"",
    avata:""
}
const getUserById = async (id:string)=>{
    const getData =async ()=>{
        try {
            const getUser = await axiosInstance.get(`/get-user-by-id/${id}`)
            user = getUser.data.data[0]
        } catch (error) {
            console.log(error);
        }
    }
    await getData()
}

export default function getUser(){
    return {
        getUserById,
        user
    }
}