import Home from "@/pages/HomePage/Home"
import SignUp from "@/pages/AuthenPage/SignUp/SignUp"
import MainLayout from "@/layouts/MainLayout/MainLayout"
import ProfileLayout from "@/layouts/ProfileLayout/ProfileLayout"
import Trend from "@/pages/Trend/Trend"
import Friend from "@/pages/Friend/Friend"
import Group from "@/pages/Group/Group"
import Profile from "@/pages/Profile/PostProfile/ProfilePost"
const routes = [
    {path: '/', component: Home, layout: MainLayout},
    {path:'/register', component: SignUp, layout: MainLayout},
    {path:'/trend', component: Trend, layout :MainLayout},
    {path:'/friend', component: Friend, layout:MainLayout},
    {path:'/group',component: Group, layout: MainLayout },
    {path:'/profile',component: Profile,layout: ProfileLayout}
]

export default routes