import Navbar from "./../navbarfolder/navbar"
import Forumparent from "./components/forumselection"



export default function forums() {


    return (
        <>
            <main className="w-screen" >
                <Navbar />
                <section className="flex items-center">
                    <Forumparent />
                </section>
            </main>
        </>
    );
}
