import Navbar from "../navbar/navbar"
import Selectforum from "./components/Selectforum__"
import Drop from "./components/dropdown"

export default function forums() {
    return (
        <>
            <Navbar />
            <main className="flex flex-row w-screen items-center h-screen bg-[#0F151A] " >
                <section id="forumview" className="flex flex-col h-full ">
                    <Selectforum />
                    <Drop />
                </section>
                <section className="flex flex-col h-full ">
                    <div className="w-12 h-5 bg-red-600"><p>lasflas</p></div>
                </section>
            </main>
        </>
    );
}
