import FriendAll from "@/components/Friend/FriendAll"
import FriendSuggestion from "@/components/Friend/FriendSuggestion"
function Friend(){
    return(
        <div className="mt-12 flex gap-4">
            <div className="basis-3/4">
                <FriendAll/>
            </div>
            <div className="basis-1/4">
                <FriendSuggestion/>
            </div>
        </div>
    )
}

export default Friend