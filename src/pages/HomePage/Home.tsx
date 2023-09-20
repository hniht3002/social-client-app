import { registered } from "@/data/GlobalState";
import PostShow from "@/components/Post/PostCreate/PostShow";
import PostHeader from "@/components/Post/PostView/PostHeader";
import PostContent from "@/components/Post/PostView/PostContent";
import PostReact from "@/components/Post/PostView/PostReact/PostReact";
import TrendingForYou from "@/components/home/TrendingHagTag/TrendingForYou";
import PostForm from "@/components/Post/PostCreate/PostForm";
import { IPost } from "@/types/post/post";
import { useState, useEffect } from "react";
import axiosInstance from "@/plugins/axios";
function Home() {
  const id = 1;
  const [post, setPost] = useState<IPost[] | null>();
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const getPost = async () => {
    try {
      const postData = await axiosInstance.post(`/get-post-home/${id}`, {
        offset: 0,
      })
      setPost(postData.data.posts.reverse());
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPost()
  }, [])
  if (!registered) {
    return <h1>Register page </h1>;
  }
  return (
    <div className="mt-12">
      <div className="flex gap-4">
        <div className="w-[70%]">
          <div onClick={handleShow}>
            <PostShow />
          </div>
          <div className="w-full h-12  shadow-xl shadow-gray-100"></div>
          {show && <PostForm handleShow={handleShow} updatePost={getPost} />}
          <div>
            {post ? (
              <ul>
                {post.map((item) => (
                  <li key={item.id}>
                    <div className="w-full mx-auto mt-12 bg-white rounded-lg">
                      <PostHeader />
                      <PostContent content={item.content} file={item.file} />
                      <PostReact id={item.id}/>
                      {item.id}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div>No post to show</div>
            )}
          </div>
        </div>
        <div className="w-[30%]">
          <TrendingForYou />
        </div>
      </div>
    </div>
  );
}

export default Home;
