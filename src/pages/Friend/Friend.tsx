import FriendAll from "@/components/Friend/FriendALl/FriendAll"
import FriendSuggestion from "@/components/Friend/FriendSuggestion"
import SearchFriend from "@/components/Friend/SearchFriend/SearchFriend"
function Friend(){
    return(
        <div className="mt-12 flex gap-4">
            <div className="basis-3/4">
                <FriendAll/>
            </div>
            <div className="basis-1/4">
                <FriendSuggestion/>
                <div>
                    <SearchFriend/>
                </div>
            </div>
        </div>
    )
}

export default Friend