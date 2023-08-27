import { registered } from "@/data/GlobalState"
import PostForm from "@/components/home/PostCreate/PostForm"
import PostHeader from "@/components/home/PostView/PostHeader"
import PostContent from "@/components/home/PostView/PostContent"
import PostReact from "@/components/home/PostView/PostReact"
import TrendingForYou from "@/components/home/TrendingHagTag/TrendingForYou"
function Home() {
    if(!registered) {
        return (<h1>Register page </h1>)
    }

    return (
        <div className="mt-12">
            <div className="flex gap-4">
            <div className="w-[70%] shadow-xl shadow-gray-400">
                <PostForm/>
                <div className="w-full h-12  shadow-xl shadow-gray-100"></div>
                <div className="mt-16 pt-2">
                    <PostHeader/>
                    <PostContent/>
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