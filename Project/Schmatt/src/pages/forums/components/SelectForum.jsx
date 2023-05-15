import Forumsearchbar from "./Forumsearchbar"
import Discmenu from "./DisclosureMenu"

export default function Selectforum({selectedForum, setSelectedForum, refresh, setRefresh}) {
    return (
        <>
            <div className=" flex flex-col items-center gap-3 w-80 h-3/4  border-gray-700 border-r-[1px] p-4">
                <Forumsearchbar setSelectedForum={setSelectedForum} />
                <Discmenu selectedForum={selectedForum} setSelectedForum={setSelectedForum} refresh={refresh} setRefresh={setRefresh} />
            </div>
        </>
    )
}