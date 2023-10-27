import Navbar from "@/components/NavBar"
import EventDataRow from "./EventDataRow"
import Button from "./Button";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

async function getEventos() {
  const url = "http://localhost:8080/user/1/Events"
  let response = await fetch(url, {next: {revalidate:0}});
  return response.json()
}

export default async function Eventos() {
  const data = await getEventos()
  return (
    <>
      <Navbar active={"eventos"} />

      <main className="bg-slate-900 m-20 p-8">
        <div className="flex justify-between items-center">
        <h2 className="felx text-xl">Eventos</h2>
        <Button icon = {<CalendarDaysIcon className="h-6 w-6" />}
        href="/eventos/new">Adicionar evento</Button>
        </div>
        <div>
          <div id="data" className="pl-24 pr-24">
              {data.map(evento => {
                return <EventDataRow evento={evento}/>
              })}
          </div>
        </div>
      </main>
    </>
  )
}
