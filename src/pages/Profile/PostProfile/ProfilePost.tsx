import React, { useEffect, useState } from "react";
import PostContent from "@/components/commonComponent/PostView/PostContent";
import PostReact from "@/components/commonComponent/PostView/PostReact";
import PostHeader from "@/components/commonComponent/PostView/PostHeader";
import PostFilter from "@/components/Profile/ProfilePost/PostFilter";
import axiosInstance from "@/plugins/axios";
import { IPost } from "@/types/post/post";
function ProfilePost() {
  let [posts, setPosts] = useState<IPost[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      const id = 1;
      const limit = 5;
      try {
        const postData = await axiosInstance.get(
          `http://localhost:3001/get-post-user?id=${id}&limit=${limit}`
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
                  <PostHeader />
                  <PostContent content={item.content} file={item.file} />
                  <PostReact />
                </div>
              </li>
              // Render other data properties here as needed
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePost;
