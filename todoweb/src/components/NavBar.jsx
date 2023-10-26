import Link from "next/link";

export default function Navbar({active}){
    return (
        <nav className="flex justify-between items-center bg-slate-900 px-6 py-4 pt-4 ">
        <ul className="flex gap-20 items-end">
          <li>
              <Link href="/">
                <h1 className="text-2xl">TodoIt</h1>
              </Link>
            </li>
            <li>
                <Link className = {active == "eventos" && "text-slate-100"} href="/eventos">
                    Eventos
                </Link>
            </li>
            <li>
                <Link className = {active == "numsei" && "text-slate-100"} href="/numsei">
                    Num sei
                </Link>
            </li>
        </ul>
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src="https://i.pinimg.com/736x/78/ec/cc/78eccca458603026e37935cf01d70328.jpg" alt="Avatar"/>
        </div>
      </nav>
    )
}