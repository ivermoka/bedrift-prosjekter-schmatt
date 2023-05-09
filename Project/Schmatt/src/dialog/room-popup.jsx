import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function RoomAlreadyExists({
  roomPopupIsOpen,
  setRoomPopupIsOpen,
}) {
  return (
    <Transition
      appear
      show={roomPopupIsOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        onClose={() => setRoomPopupIsOpen(false)}
        className="bg-state-blue opacity-90 fixed z-10 left-72 top-14 w-22 p-6 rounded-lg"
      >
        <Dialog.Panel className="flex flex-col gap-4 items-center">
          <Dialog.Title className="text-3xl font-bold">
            Room Already Exists
          </Dialog.Title>
          <Dialog.Description>
            A room with this name already exists. Please choose a different
            name.
          </Dialog.Description>
          <button
            className="bg-delif-blue hover:scale-105 duration-300 p-2 rounded-lg w-1/2"
            onClick={() => setRoomPopupIsOpen(false)}
          >
            Got It!
          </button>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
