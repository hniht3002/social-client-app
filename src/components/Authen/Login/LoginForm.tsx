import React from "react";
import axiosInstance from "@/plugins/axios";

function LoginForm() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const User:any =  await axiosInstance.post("/login", data);
      console.log(User);
      
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div>
      <div className="border-2 border-black bg-white text-left rounded-lg overflow-hidden">
        <form className="flex flex-col gap-2 p-4 w-full" method="post">
          <h2 className="font-bold">Login</h2>
          <p>Get started!</p>

          <input
            className="p-1 border-2 border-black"
            type="text"
            placeholder="email"
            value={data.email}
            onChange={(e) => {setData({"email" : e.target.value, "password": data.password})}}
          />

          <input
            className="p-1 border-2 border-black"
            type="text"
            id=""
            placeholder="password"
            name="pasword"
            value={data.password}
            onChange={(e) => {setData({"email" : data.email, "password" : e.target.value})}}
          />

          <button
            className="w-1/2 mx-auto rounded-lg bg-blue-400 text-white p-2"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
