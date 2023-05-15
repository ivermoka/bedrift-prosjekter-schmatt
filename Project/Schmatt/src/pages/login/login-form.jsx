import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "./../../firebase-config";
import { useForm } from "react-hook-form";
import { useLogin } from "./components/github-login";
import { useRouter } from "next/router";
import Button from "./components/submit-button";
import Popup from "./../../dialog/forms-popup";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [accountCreatedPopup, setAccountCreatedPopup] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setAccountCreatedPopup(true);
      console.log("Logged in succesfully");
      router.push("/chat");
    } catch (error) {
      console.log("Login Failed: ", error);
      setErrorMessage(error.message);
    }
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    router.push("/chat");
  };

  const { login, isPending } = useLogin();

  return (
    // Wrapping div
    <div className="h-3/6 w-3/5 bg-white rounded-3xl flex flex-col overflow-hidden">
      <Popup
        accountCreatedPopup={accountCreatedPopup}
        setAccountCreatedPopup={setAccountCreatedPopup}
        title="Logged in successfully!"
        description="You will be transported to chat shortly."
      />
      {/*Wrapping div inside to have content not take up the whole div*/}
      <div className="h-96 flex">
        {/*Left side with image*/}
        <div className="h-full">
          <img src={"mobile.png"} alt="mobile image" className="h-full" />
        </div>
        {/*Right side with login information, wrapper*/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-2/3 h-full flex flex-col justify-center pr-8 -ml-10"
        >
          <h1 className="text-iris text-7xl font-bold mt-4">Log in</h1>
          {/*Input fields wrapper*/}
          <div className="h-28 flex mt-10">
            {/*Left side */}
            <div className="w-80 h-full text-black text-xl font-light flex flex-col gap-1">
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
            </div>
            {/*Middle (two lines and "or") */}
            <div className="h-full w-9 flex flex-col justify-center items-center">
              <svg height="35" width="2">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="200"
                  style={{ stroke: "#707070", strokeWidth: 2 }}
                />
              </svg>
              <span className="font-light text-border-color">Or</span>
              <svg height="35" width="2">
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
              <div
                onClick={googleSignIn}
                className="h-11 w-full border border-border-color cursor-pointer flex items-center text-border-color text-xs px-2 gap-2"
              >
                <img
                  src={"google.png"}
                  alt="google logo"
                  className="h-1/3 aspect-square"
                />
                Continue with Google
              </div>
              <div
                // onClick={login}
                className="h-11 w-full border border-border-color cursor-pointer flex items-center text-border-color text-xs px-2 gap-2"
              >
                <img
                  src={"github.png"}
                  alt="google logo"
                  className="h-1/3 aspect-square"
                />
                Continue with GitHub
              </div>
            </div>
          </div>
          <i className="m-0 p-0 text-sm text-red-700">
            {errors.email?.message}
          </i>
          <i className="m-0 p-0 text-sm text-red-700">
            {errors.password?.message}
          </i>
          <i className="m-0 p-0 text-sm text-red-700">{errorMessage}</i>
          {/* Login button */}
          <Button text="Log In" />
        </form>
      </div>
      <span className="text-black text-center">
        Don't have an account? Create one{" "}
        <a href="./signup">
          <span className="text-blue-500 cursor-pointer hover:underline">
            here
          </span>
        </a>
      </span>
    </div>
  );
}
