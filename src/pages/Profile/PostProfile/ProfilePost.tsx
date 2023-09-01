import PostContent from "@/components/commonComponent/PostView/PostContent"
import PostReact from "@/components/commonComponent/PostView/PostReact"
import PostHeader from "@/components/commonComponent/PostView/PostHeader"
import PostFilter from "@/components/Profile/ProfilePost/PostFilter"
function ProfilePost(){
    const fakeData = {
        content:'Hi chào cậu',
        file:'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg'
    }
    return (
        <div className="w-[70%] mx-auto">
            <div className="mt-4 text-end hidden">
                <PostFilter/>
            </div>
            <div className="w-full mx-auto mt-12">
                <PostHeader/>
                <PostContent content={fakeData.content} file={fakeData.file}/>
                <PostReact/>
            </div>
        </div>
    )
}

export default ProfilePost