import GroupAction from "@/components/Group/GroupAction"
import GroupJoined from "@/components/Group/GroupJoined"
function Group(){
    return(
        <div>
            <div className="mt-8 flex w-full">
               <div className="basis-4/6">
                    <GroupJoined/>
               </div>
                <div className="basis-2/6">
                    <GroupAction/>
                </div>
            </div>
        </div>
    )
}

export default Group