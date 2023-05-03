import Navbar from "../navbar/navbar"
import Selectforum from "./components/Selectforum__"


export default function forums() {
    return (
        <>
            <Navbar />
            <main className="flex flex-row w-screen items-center h-screen bg-[#0F151A] " >
                <section id="forumview" className="flex flex-col h-full ">
                    <Selectforum />
                </section>
            </main>
        </>
    );
}
