import React from 'react'
import axiosInstance from '@/plugins/axios'
type IAddFriend = {
    idUserSend:number,
    idUserRecieve:number
}
const AddFriend:React.FC<IAddFriend> = (props)=>{
    const sendAdd =async (data:IAddFriend) => {
        try {
            const message = await axiosInstance.post('/send-add-friend',data)
            console.log(message);
            
        } catch (error) {
           console.log(error);
            
        }
    }
    const handleClick =()=>{
        sendAdd(props)
    }
    return(
        <div>
            <button className="bg-blue-400 text-sm p-2 rounded-xl text-white" onClick={handleClick}>Add friend</button>
        </div>
    )    
}

export default AddFriend