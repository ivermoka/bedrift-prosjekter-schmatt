import Forumsearchbar from "../components/Forumsearchbar"
import Discmenu from "./disclosure-menu"

export default function Selectforum() {
    return (
        <>
            <div className=" flex flex-col items-center gap-3 w-80 h-3/4  border-gray-700 border-r-[1px] p-4 mt-36">
                <Forumsearchbar />
                <Discmenu />
            </div>
        </>
    )

}