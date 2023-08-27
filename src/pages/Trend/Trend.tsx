import Trending from '@/components/Trend/Trending'
import Follow from '@/components/Trend/Follow'
function Trend(){
    return (
        <div>
            <div className='flex mt-12 gap-6'>
                <div className='basis-2/3'>
                    <Trending/>
                </div>
                <div className='basis-1/3'>
                    <Follow/>
                </div>
            </div>
        </div>
    )
}

export default Trend