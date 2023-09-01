import React from 'react'
type IPost = {
    content:string,
    file?:string
}
const PostContent:React.FC<IPost> = (props)=>{
    return (
        <div className="w-[90%] mx-auto">
            <p className="text-justify mt-4 w-[90%] ml-[5%]">
                {props.content}
            </p>
            <div className="">
                <img src={props.file} alt="" className="mt-8 w-[70%] mx-auto"/>
            </div>
        </div>
    )
}

export default PostContent