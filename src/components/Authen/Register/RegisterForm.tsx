import React from "react";
import axiosInstance from "@/plugins/axios";
function RegisterForm() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    psw: "",
    sec_psw: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const getUser: any = await axiosInstance.post("/register", data);
      console.log(getUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-2 border-black bg-white text-left rounded-lg overflow-hidden">
      <form className="flex flex-col gap-2 p-4 w-full" method="post">
        <h2 className="font-bold">Register</h2>
        <p>Join with us!</p>

        <input
          className="p-1 border-2 border-black"
          type="text"
          placeholder="name"
          value={data.name}
          onChange={(e) => {
            setData({
              name: e.target.value,
              email: data.email,
              psw: data.psw,
              sec_psw: data.sec_psw,
            });
          }}
        />

        <input
          className="p-1 border-2 border-black"
          type="text"
          placeholder="email"
          value={data.email}
          onChange={(e) => {
            setData({
              name: data.name,
              email: e.target.value,
              psw: data.psw,
              sec_psw: data.sec_psw,
            });
          }}
        />

        <input
          className="p-1 border-2 border-black"
          type="text"
          id=""
          placeholder="password"
          name="psw"
          value={data.psw}
          onChange={(e) => {
            setData({
              name: data.name,
              email: data.email,
              psw: e.target.value,
              sec_psw: data.sec_psw,
            });
          }}
        />

        <input
          className="p-1 border-2 border-black"
          type="text"
          id=""
          placeholder="confirm password"
          name="sec_psw"
          value={data.sec_psw}
          onChange={(e) => {
            setData({
              name: data.name,
              email: data.email,
              psw: data.psw,
              sec_psw: e.target.value,
            });
          }}
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
  );
}

export default RegisterForm;
