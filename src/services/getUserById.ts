import axiosInstance from "@/plugins/axios"
import IUser from "@/types/user/user"
const getUserById =(id:number)=>{
    let user:IUser = {
        id:1,
        name:"",
        password:"",
        email:"",
        birdthday: new Date(),
        address:"",
        role:"",
        avata:""
    }
    const getData =async ()=>{
        try {
            const getUser = await axiosInstance.get(`/get-user-by-id?${id}`)
            user = getUser.data
        } catch (error) {
            console.log(error);
        }
    }
    getData()
    return user
}

export default getUserById