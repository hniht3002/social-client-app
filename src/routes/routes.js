import Home from "@/pages/HomePage/Home"
import SignUp from "@/pages/AuthenPage/SignUp/SignUp"
import MainLayout from "@/layouts/MainLayout/MainLayout"
const routes = [
    {path: '/', component: Home, layout: MainLayout},
    {path:'/register', component: SignUp, layout: MainLayout}
]

export default routes