import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import Button from "./components/button";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  async function onhandleSubmit(data) {
    //console.log(data)
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
        data.name
      );
      history.push("/");
      alert("User Created Successfully");
    } catch (error) {
      console.log(error);
      alert("User created failed");
      alert(error);
    }
  }
  return (
    // Wrapping div
    <div className="h-3/6 w-3/5 bg-white rounded-3xl flex flex-col overflow-hidden">
      {/*Wrapping div inside to have content not take up the whole div*/}
      <div className="h-96 flex">
        {/*Left side with image*/}
        <div className="h-full">
          <img src={"mobile.png"} alt="mobile image" className="h-full" />
        </div>
        {/*Right side with login information, wrapper*/}
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="w-2/3 h-full flex flex-col justify-center pr-8 -ml-10"
        >
          <h1 className="text-iris text-7xl font-bold">Log in</h1>
          {/*Input fields wrapper*/}
          <div className="h-28 flex mt-10">
            {/*Left side */}
            <div className="bg-blue-400 w-72 h-full text-black text-xl font-light flex flex-col gap-1">
              <input
                name="email"
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="rounded-2xl border-black border w-full h-1/2 px-2"
              />
              <input
                name="password"
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className="rounded-2xl border-black border w-full h-1/2 px-2"
              />
            </div>
            {/*Middle (two lines and "or") */}
            <div className="bg-red-400 h-full w-10"></div>
            {/*Microsoft and google logins wrapper */}
            <div className="bg-black h-full w-44">
              <div></div>
              <div></div>
            </div>
          </div>
          {/* Login button */}
          <input
            type="submit"
            className="h-12 w-20 bg-red-400 cursor-pointer"
          />
          <Button text="Log In" type="submit" />
        </form>
      </div>
    </div>
  );
}
