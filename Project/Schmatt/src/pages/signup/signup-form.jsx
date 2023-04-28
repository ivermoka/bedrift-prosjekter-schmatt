import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../../firebase-config";
import { useForm } from "react-hook-form";
import Button from "./../login/components/submit-button";
import PasswordsDontMatch from "./../login/components/passwords-dont-match";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordsDontMatchPopup, setPasswordsDontMatchPopup] = useState(false);

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordsMatch(false);
      setPasswordsDontMatchPopup(true);
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, {
        displayName: data.username,
      });
      console.log("Account created successfully", displayName);
    } catch (error) {
      console.log("Failed creating account: ", error);
    }
  };

  return (
    // Wrapping div
    <div className="h-4/6 w-3/5 bg-white rounded-3xl flex flex-col overflow-hidden">
      {/*Wrapping div inside to have content not take up the whole div*/}
      <div className="h-5/6 flex">
        {/*Left side with image*/}
        <div className="h-full mt-20">
          <img src={"mobile.png"} alt="mobile image" className="h-5/6" />
        </div>
        {/*Right side with login information, wrapper*/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-2/3 h-full flex flex-col justify-center pr-8 -ml-10"
        >
          <h1 className="text-iris text-7xl font-bold mt-12">Register</h1>
          {/*Input fields wrapper*/}
          <div className="h-56 flex mt-6">
            {/*Left side */}
            <div className="w-80 h-full text-black text-xl font-light flex flex-col gap-1">
              <input
                type="text"
                {...register("username", {
                  required: "*Please enter a username",
                })}
                placeholder="Username"
                className="rounded-2xl border-border-color border w-full h-1/2 px-2"
              />
              <input
                type="email"
                {...register("email", { required: "*Please provide an email" })}
                placeholder="Email"
                className="rounded-2xl border-border-color border w-full h-1/2 px-2"
              />
              <input
                type="password"
                {...register("password", {
                  required: "*Please provide a password",
                  minLength: {
                    value: 6,
                    message: "*Password must contain at least 6 characters.",
                  },
                })}
                placeholder="Password"
                className="rounded-2xl border-border-color border w-full h-1/2 px-2"
              />
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "*Please confirm password",
                })}
                placeholder="Confirm Password"
                className="rounded-2xl border-border-color border w-full h-1/2 px-2"
              />
            </div>
            {/*Middle (two lines and "or") */}
            <div className="h-full w-9 flex flex-col justify-center items-center">
              <svg height="95" width="2">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="200"
                  style={{ stroke: "#707070", strokeWidth: 2 }}
                />
              </svg>
              <span className="font-light text-border-color">Or</span>
              <svg height="95" width="2">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="200"
                  style={{ stroke: "#707070", strokeWidth: 2 }}
                />
              </svg>
            </div>
            {/*Microsoft and google logins wrapper */}
            <div className="h-full w-44 py-2 flex flex-col justify-center items-center gap-2">
              <div className="h-11 w-full border border-border-color cursor-pointer flex items-center text-border-color text-xs px-2 gap-2">
                <img
                  src={"google.png"}
                  alt="google logo"
                  className="h-1/3 aspect-square"
                />
                Continue with Google
              </div>
              <div className="h-11 w-full border border-border-color cursor-pointer flex items-center text-border-color text-xs px-2 gap-2">
                <img
                  src={"microsoft.avif"}
                  alt="google logo"
                  className="h-1/3 aspect-square"
                />
                Continue with Microsoft
              </div>
            </div>
          </div>
          <i className="m-0 p-0 text-sm text-red-700">
            {errors.username?.message}
          </i>
          <i className="m-0 p-0 text-sm text-red-700">
            {errors.email?.message}
          </i>
          <i className="m-0 p-0 text-sm text-red-700">
            {errors.password?.message}
          </i>
          {passwordsDontMatchPopup && <PasswordsDontMatch />}
          {/* Login button */}
          <Button text="Register" />
        </form>
      </div>
    </div>
  );
}
