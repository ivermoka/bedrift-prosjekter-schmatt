import { auth } from "../../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import LogOut from "./profile-dropdown";

export default function profile() {
  const [dropdownState, setDropdownState] = useState(true);
  const toggleDropdown = () => {
    console.log("toggle dropdown, value:", dropdownState);
    setDropdownState(!dropdownState); //funker ikke akk nå vet ikke hvorfor må fikses alt bare crasher om du prøver å toggle dropdownen
  };
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div className="flex flex-col">
      <div className="flex flex-row  gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52.864"
          height="52.864"
          viewBox="0 0 52.864 52.864"
          className="cursor-pointer"
          onClick={toggleDropdown}
        >
          <path
            id="Icon_awesome-user-circle"
            data-name="Icon awesome-user-circle"
            d="M26.432.563A26.432,26.432,0,1,0,52.864,26.994,26.427,26.427,0,0,0,26.432.563Zm0,10.232a9.379,9.379,0,1,1-9.379,9.379A9.379,9.379,0,0,1,26.432,10.794Zm0,36.663a20.424,20.424,0,0,1-15.614-7.269,11.883,11.883,0,0,1,10.5-6.373,2.608,2.608,0,0,1,.757.117,14.111,14.111,0,0,0,4.359.735,14.058,14.058,0,0,0,4.359-.735,2.608,2.608,0,0,1,.757-.117,11.883,11.883,0,0,1,10.5,6.373A20.424,20.424,0,0,1,26.432,47.458Z"
            transform="translate(0 -0.563)"
            fill="#fff"
          />
        </svg>
        <h1 className="text-[#707070]">{user.displayName}</h1>
      </div>
      {dropdownState && <LogOut />}
    </div>
  );
}
