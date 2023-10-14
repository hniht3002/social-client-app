import React, { useEffect, useState } from "react";
import PostContent from "@/components/Post/PostView/PostContent/PostContent";
import PostReact from "@/components/Post/PostView/PostReact/PostReact";
import PostHeader from "@/components/Post/PostView/PostHeader/PostHeader";
import PostFilter from "@/components/Profile/ProfilePost/PostFilter";
import axiosInstance from "@/plugins/axios";
import Loading from "@/components/commonComponent/Loading/Loading";
import { IPost } from "@/types/post/post";
import UserInformation from "@/components/Profile/ProfileInformation/UserInformation";
import user from "@/data/userFake";
function Profile() {
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
    <div className="w-full">
      <div className="w-[70%] mx-auto bg-gray-50 h-[1px]"></div>
      <div className="flex w-[70%] gap-4 mx-auto sm:block sm:w-[90%]">
        <div className="basis-2/5">
          <UserInformation />
        </div>
        <div className="basis-3/5">
          <div className="mt-4 text-end hidden">
            <PostFilter />
          </div>
          <div className="mt-8">
            {posts ? (
              <ul>
                {posts.map((item) => (
                  <li
                    key={item.id}
                    className="bg-white rounded-lg shadow-[0px_0px_15px_15px] shadow-gray-100"
                  >
                    <div className="w-full mx-auto mt-4">
                      <PostHeader idPost={item.id} />
                      <PostContent content={item.content} file={item.file} />
                      <PostReact id={item.id} />
                    </div>
                  </li>
                  // Render other data properties here as needed
                ))}
              </ul>
            ) : (
              <div className="w-2/4 mx-auto p-8">
                <Loading />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
