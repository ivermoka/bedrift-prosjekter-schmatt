import Navbar from "../navbar/navbar"
import Selectforum from "./components/Selectforum__"


export default function forums() {
    return (
        <>
            <Navbar />
            <main className=" w-screen h-screen bg-[#0F151A] flex items-center" >
                <div className="flex flex-row items-center w-screen h-4/5 gap-6">
                    <section id="forumview" className="flex flex-col h-full ">
                        <Selectforum />

                    </section>
                    <section className="flex flex-col  ">

                    </section>
                </div>
            </main>
        </>
    );
}
