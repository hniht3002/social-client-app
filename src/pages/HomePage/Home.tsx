import { registered } from "@/data/GlobalState";
import PostShow from "@/components/Post/PostCreate/PostShow";
import PostHeader from "@/components/Post/PostView/PostHeader/PostHeader";
import PostContent from "@/components/Post/PostView/PostContent/PostContent";
import PostReact from "@/components/Post/PostView/PostReact/PostReact";
import PostForm from "@/components/Post/PostCreate/PostForm";
import { IPost } from "@/types/post/post";
import { useState, useEffect } from "react";
import axiosInstance from "@/plugins/axios";
import { useSelector } from "react-redux";
function Home() {
  const user = useSelector((state: any) => state.user);
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
      const postData = await axiosInstance.post(
        `/get-post-home/1`,
        {
          offset: 0,
        }
      );
      setPost(postData.data.posts.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="mt-12">
      <div className="flex gap-4 sm:block">
        <div className="w-[70%] sm:w-full">
          <div onClick={handleShow}>
            <PostShow />
          </div>
          <div className="w-full h-12  shadow-xl shadow-gray-100"></div>
          {show && <PostForm handleShow={handleShow} updatePost={getPost} />}
          <div>
            {post ? (
              <ul>
                {post.length > 0 ? (
                  post.map((item) => (
                    <li key={item.id}>
                      <div className="w-full mx-auto mt-12 bg-white rounded-lg shadow-[0px_0px_15px_15px] shadow-gray-100">
                        <PostHeader idPost={item.id} />
                        <PostContent content={item.content} file={item.file} />
                        <PostReact id={item.id} />
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="mt-16 text-blue-600 text-2xl bg-white">Let make a friend to see their post</div>
                )}
              </ul>
            ) : (
              <div>No post to show</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
