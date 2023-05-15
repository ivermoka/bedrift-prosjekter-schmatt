import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { auth } from "./../firebase-config";
import getUser from "./../user";
import { updatePassword } from "firebase/auth";

export default function AccountCreated({
  changePasswordPopup,
  setChangePasswordPopup,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const user = getUser();

  let errorMessage = "";

  const [wrongOldPassword, setWrongOldPassword] = useState(true);

  const onSubmit = async (data) => {
    if (data.oldPassword === "old") {
      const newPassword = data.newPassword;
      updatePassword(user, newPassword)
        .then(() => {
          console.log("password updated");
        })
        .catch((error) => {
          errorMessage = error;
          console.log("not work");
        });
    } else {
      setWrongOldPassword("Old password not correct");
    }
  };

  return (
    <Transition
      appear
      show={changePasswordPopup}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        onClose={() => setChangePasswordPopup(false)}
        className="bg-white text-black opacity-95 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-22 p-6 rounded-lg"
      >
        <Dialog.Panel className="flex flex-col gap-4 items-center">
          <Dialog.Title className="text-3xl font-bold">
            Change password
          </Dialog.Title>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 box-border"
          >
            <input
              type="password"
              {...register("oldPassword", {
                required: "*Enter your old password",
              })}
              placeholder="Old Password"
              className="h-8 border-2 border-border-color rounded-md"
            />
            <input
              type="password"
              {...register("newPassword", {
                required: "*Enter a new password",
                minLength: {
                  value: 6,
                  message: "*Password must contain at least 6 characters.",
                },
              })}
              placeholder="New Password"
              className="h-8 border-2 border-border-color rounded-md"
            />

            <button
              type="submit"
              className="hover:scale-105 active:scale-100 duration-300 p-2 rounded-lg w-full border-2 border-border-color"
            >
              Change Password
            </button>
            <div className="flex flex-col break-all overflow-hidden">
              <i className="m-0 p-0 text-sm text-red-700">
                {errors.oldPassword?.message}
              </i>
              <i className="m-0 p-0 text-sm text-red-700">
                {errors.newPassword?.message}
              </i>
              <i className="m-0 p-0 text-sm text-red-700">{errorMessage}</i>
              <i className="m-0 p-0 text-sm text-red-700">{wrongOldPassword}</i>
            </div>
          </form>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
