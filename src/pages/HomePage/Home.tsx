import { registered } from "@/data/GlobalState"
import PostForm from "@/components/home/PostCreate/PostForm"
import PostHeader from "@/components/Post/PostView/PostHeader"
import PostContent from "@/components/Post/PostView/PostContent"
import PostReact from "@/components/Post/PostView/PostReact"
import TrendingForYou from "@/components/home/TrendingHagTag/TrendingForYou"
function Home() {
    if(!registered) {
        return (<h1>Register page </h1>)
    }

    return (
        <div className="mt-12">
            <div className="flex gap-4">
            <div className="w-[70%]">
                <PostForm/>
                <div className="w-full h-12  shadow-xl shadow-gray-100"></div>
                <div className="mt-16 pt-2">
                    <PostHeader/>
                    <PostContent content="Hi" file="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg"/>
                    <PostReact/>
                </div>
           </div>
           <div className="w-[30%]">
                <TrendingForYou/>
           </div>
            </div>
        </div>
    )
}

export default Home;