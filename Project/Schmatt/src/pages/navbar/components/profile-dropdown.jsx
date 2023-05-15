import { signOut } from "firebase/auth";
import { auth } from "./../../../firebase-config";
import Item from "./profile-dropdown-item";

export default function LogOut() {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="absolute mt-[53px] flex flex-col w-full -ml-4 rounded-md bg-common backdrop-blur-md opacity-95">
      <Item text="Profile" link={"./../profile-page"} />
      <Item text="Sign Out" logout={logout} link={"./../"} />
    </div>
  );
}
