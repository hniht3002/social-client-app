import user from '@/data/userFake'
import axiosInstance from '@/plugins/axios'
import {useState,useEffect} from 'react'
import PostHeader from '@/components/Post/PostView/PostHeader/PostHeader'
import PostContent from '@/components/Post/PostView/PostContent/PostContent'
import PostReact from '@/components/Post/PostView/PostReact/PostReact'
import {IPost} from '@/types/post/post'
const Save = () =>{
    const [savePost,setSavePost] = useState<IPost[]>()
    useEffect(()=>{
        const getSave = async ()=>{
            try {
                const postRes = await axiosInstance.get(`/get-save-post/${user.id}`)
                setSavePost(postRes.data.savePost)
            } catch (error) {
                console.log(error);  
            }
        }
        getSave()
    },[])
    return (
        <div>
          <h1 className='mt-8 font-bold text-2xl'>Save post for you</h1>
          <div className='w-[70%] mx-auto'>
            {savePost ? (
              <div>
                {savePost.map((post:IPost) => (
                  <div key={post.id}>
                    <div className="w-full mx-auto mt-12 bg-white rounded-lg shadow-[0px_0px_15px_15px] shadow-gray-100">
                      <PostHeader idPost={post.id} />
                      <PostContent content={post.content} file={post.file} />
                      <PostReact id={post.id} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No posts to display</p>
            )}
          </div>
        </div>
      );
      
}

export default Save