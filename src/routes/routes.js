import Home from "@/pages/HomePage/Home"
import SignUp from "@/pages/AuthenPage/SignUp/SignUp"
import MainLayout from "@/layouts/MainLayout/MainLayout"
import Trend from "@/pages/Trend/Trend"
import Friend from "@/pages/Friend/Friend"
const routes = [
    {path: '/', component: Home, layout: MainLayout},
    {path:'/register', component: SignUp, layout: MainLayout},
    {path:'/trend', component: Trend, layout :MainLayout},
    {path:'/friend', component: Friend, layout:MainLayout}
]

export default routes