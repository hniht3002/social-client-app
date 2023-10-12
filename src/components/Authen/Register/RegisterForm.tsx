import React from "react";
import axiosInstance from "@/plugins/axios";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
function RegisterForm() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    sec_psw: "",
  });
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const getUser: any = await axiosInstance.post("/register", data);
      console.log(getUser);
      if(getUser.status === 200){
        alert("Register success")
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="post"
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={data.email}
                    onChange={(e) => {
                      setData({
                        name: data.name,
                        email: e.target.value,
                        password: data.password,
                        sec_psw: data.sec_psw,
                      });
                    }}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your name"
                    value={data.name}
                    onChange={(e) => {
                      setData({
                        name: e.target.value,
                        email: data.email,
                        password: data.password,
                        sec_psw: data.sec_psw,
                      });
                    }}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={data.password}
                    onChange={(e) => {
                      setData({
                        name: data.name,
                        email: data.email,
                        password: e.target.value,
                        sec_psw: data.sec_psw,
                      });
                    }}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="sec_password"
                    id="sec_password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={data.sec_psw}
                    onChange={(e) => {
                      setData({
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        sec_psw: e.target.value,
                      });
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Register
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign In
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

export default RegisterForm;
