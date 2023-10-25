import Link from "next/link";

export default function NotFound() {
    return(
        <main className="bg-slate-900 m-20 p-8 felx  flex-col g-2">
            <h2>404- Página não encontrada</h2>
            <Link href="/">Get back to home page</Link>
        </main>
    )
}