import { useForm } from "react-hook-form";
import Button from "./components/button";

export default function LoginForm() {
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
        <div className="w-2/3 h-full flex flex-col justify-center pr-8 -ml-10">
          <h1 className="text-iris text-7xl font-bold">Log in</h1>
          {/*Input fields wrapper*/}
          <div className="h-28 flex mt-10">
            {/*Left side */}
            <div className="bg-blue-400 w-72 h-full text-black text-xl font-light flex flex-col gap-1">
              <input
                type="text"
                placeholder="Username/email"
                className="rounded-2xl border-black border w-full h-1/2 px-2"
              />
              <input
                type="text"
                placeholder="Username/email"
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
          <Button text="Log In" />
        </div>
      </div>
    </div>
  );
}
