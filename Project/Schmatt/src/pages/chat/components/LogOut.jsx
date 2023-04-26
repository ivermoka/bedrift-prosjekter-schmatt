import React from "react";
import { auth } from "../../../firebase";

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-gray-700 text-`
}


const LogOut = () => {
    const signOut = () => {
       signOut(auth)
    }

    
    return (
        <button onClick={() => auth.signOut()} className={style.button}>
            Log Out
        </button>
    )
}
export default LogOut;