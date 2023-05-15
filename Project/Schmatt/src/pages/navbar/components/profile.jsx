import { useState } from "react";
import getUser from "./../../../user";
import LogOut from "./profile-dropdown";

export default function profile() {
  const user = getUser();
  const [dropdownState, setDropdownState] = useState(false);
  const toggleDropdown = () => {
    console.log("toggle dropdown, value:", dropdownState);
    setDropdownState(!dropdownState); //funker ikke akk nå vet ikke hvorfor må fikses alt bare crasher om du prøver å toggle dropdownen
  };
  return (
    <div onClick={toggleDropdown} className="flex flex-col cursor-pointer">
      {dropdownState && <LogOut />}
      <div className="flex flex-row  gap-3 items-center">
        <div className="w-14 h-10">
          <img
            src={user.photoURL || "userIcon_placeholder.png"}
            alt="profile pic"
            className="w-full h-full rounded-full max-w-[40px]"
          />
        </div>
        <h1 className="text-[#707070]">{user.displayName}</h1>
      </div>
    </div>
  );
}
