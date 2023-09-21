import React from 'react'
type IPost = {
    content:string,
    file?:string
}
const PostContent:React.FC<IPost> = (props)=>{
    return (
        <div className="w-[90%] mx-auto pt-2 pb-8">
            <p className="text-justify mt-4 w-[90%] ml-[5%] pt-2">
                {props.content}
            </p>
            <div className="">
                <img src={`http://localhost:3001/postImage/${props.file}`} alt="" className="mt-8 w-[70%] mx-auto"/>
            </div>
        </div>
    )
}

export default PostContent