import React, { useEffect, useState } from "react";
import PostContent from "@/components/Post/PostView/PostContent/PostContent";
import PostReact from "@/components/Post/PostView/PostReact/PostReact";
import PostHeader from "@/components/Post/PostView/PostHeader/PostHeader";
import PostFilter from "@/components/Profile/ProfilePost/PostFilter";
import axiosInstance from "@/plugins/axios";
import Loading from "@/components/commonComponent/Loading/Loading";
import { IPost } from "@/types/post/post";
import user from "@/data/userFake";
function ProfilePost() {
  let [posts, setPosts] = useState<IPost[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      const id = 1;
      const limit = 5;
      try {
        const postData = await axiosInstance.get(
          `/get-post-user?id=${id}&limit=${limit}`
        );
        setPosts(postData.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(posts);
  return (
    <div className="w-[70%] mx-auto">
      <div className="mt-4 text-end hidden">
        <PostFilter />
      </div>
      <div>
        {posts ? (
          <ul>
            {posts.map((item) => (
              <li key={item.id}>
                <div className="w-full mx-auto mt-12">
                  <PostHeader idPost={item.id}/>
                  <PostContent content={item.content} file={item.file} />
                  <PostReact id={user.id}/>
                </div>
              </li>
              // Render other data properties here as needed
            ))}
          </ul>
        ) : (
            <div className="w-2/4 mx-auto p-8">
                <Loading/>
            </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePost;
