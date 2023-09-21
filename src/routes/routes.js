import Home from "@/pages/HomePage/Home"
import Register from "@/pages/AuthenPage/Register/Register"
import MainLayout from "@/layouts/MainLayout/MainLayout"
import ProfileLayout from "@/layouts/ProfileLayout/ProfileLayout"
import Trend from "@/pages/Trend/Trend"
import Friend from "@/pages/Friend/Friend"
import Group from "@/pages/Group/Group"
import Profile from "@/pages/Profile/PostProfile/ProfilePost"
import FriendProfile from "@/pages/Profile/FriendProfile/FriendProfile"
import AuthenLayout from "@/layouts/AuthenLayou/AuthenLayout"
import FriendLayout from "@/layouts/FriendLayout/FriendLayout"
import Login from "@/pages/AuthenPage/Login/Login"
import Information from "@/pages/Profile/InformationProfile/InformationProfile"
import Save from '@/pages/Save/Save'
const routes = [
    {path: '/', component: Home, layout: MainLayout},
    {path:'/register', component: Register, layout: AuthenLayout},
    {path:'/login', component: Login, layout: AuthenLayout},
    {path:'/trend', component: Trend, layout :MainLayout},
    {path:'/friend', component: Friend, layout:FriendLayout},
    {path:'/group',component: Group, layout: MainLayout },
    {path:'/profile',component: Profile,layout: ProfileLayout},
    {path:'/profile/friend',component:FriendProfile,layout:ProfileLayout},
    {path:'/profile/information',component:Information,layout:ProfileLayout},
    {path:'/save',component:Save,layout:MainLayout}
]

export default routes