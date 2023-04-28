import React from "react"
import { useState } from "react"

const style = {
    form: `h-14 w-[62%] flex text-xl absolute bottom-0 m-2 justify-between flex-row`,
    input: `w-[90%] text-l text-common p-3 bg-button-active text-white outline-none border-none`,
    button: `p-3 bg-gray-400 rounded-full`,
}

const SendMessage = () => {
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a valid message')
            return
        }
    }

    return (
        <form onSubmit={sendMessage} className={style.form}>
            <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder='Your text...' />
            <button className={style.button} type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="33.621" height="33.621" viewBox="0 0 33.621 33.621">
                <g id="Icon_feather-send" data-name="Icon feather-send" transform="translate(-1.5 -0.879)">
                    <path id="Path_28" data-name="Path 28" d="M33,3,16.5,19.5" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Path_29" data-name="Path 29" d="M33,3,22.5,33l-6-13.5L3,13.5Z" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </g>
            </svg>

            </button>    
        </form>
        )
    }
    
export default SendMessage