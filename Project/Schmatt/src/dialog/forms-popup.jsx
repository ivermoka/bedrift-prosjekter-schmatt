import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function AccountCreated({
  accountCreatedPopup,
  setAccountCreatedPopup,
  title,
  description,
}) {
  return (
    <Transition
      appear
      show={accountCreatedPopup}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        onClose={() => setAccountCreatedPopup(false)}
        className="bg-state-blue opacity-90 fixed top-14 left-[50%] translate-x-[-50%] z-10 w-22 p-6 rounded-lg"
      >
        <Dialog.Panel className="flex flex-col gap-4 items-center">
          <Dialog.Title className="text-3xl font-bold">{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          <button
            className="bg-delif-blue hover:bg-iris duration-300 p-2 rounded-lg w-1/2"
            onClick={() => setAccountCreatedPopup(false)}
          >
            Got It!
          </button>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
