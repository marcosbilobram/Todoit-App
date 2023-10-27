import Navbar from "@/components/NavBar";

export default function CreateEvent() {
    return (
        <>
            <Navbar active={"eventos"}/>
            <main className="bg-slate-900 mt-10 p-8 max-w-lg m-auto">
                <h2 className="felx text-xl">Adicionar Evento</h2>

            </main>
        </>
    )
}