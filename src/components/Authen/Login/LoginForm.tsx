import React from "react";
import axiosInstance from "@/plugins/axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";
import { setToken,getToken } from "@/services/handleToken";
function LoginForm() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const newUser = useSelector((state:any)=>state.user);
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const User: any = await axiosInstance.post("/login", data);
      dispatch(setUser(User));
      setToken(User.data.token)
      console.log(getToken());
      
      if(User.status===200){
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 h-screen">
        <div className="flex flex-col justify-center px-6 py-8 mx-auto w-[40%] sm:w-[90%]">
          <div className="w-full bg-white rounded-lg shadow mt-8 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight mt-4 tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 mt-4 md:space-y-6"
                action="#"
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSubmit(e);
                }}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                    Your email
                  </label>
                  <input
                    value={data.email}
                    onChange={(e) => {
                      setData({
                        email: e.target.value,
                        password: data.password,
                      });
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                    Password
                  </label>
                  <input
                    value={data.password}
                    onChange={(e) => {
                      setData({ email: data.email, password: e.target.value });
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-black font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full mt-8 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm mt-8 font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link to="/register">
                    <p className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                    </p>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/register"></Route>
      </Routes>
    </div>
  );
}

export default LoginForm;
