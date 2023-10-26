import Navbar from "@/components/NavBar"
import EventDataRow from "./EventDataRow"

export default function Eventos() {
  const data = [
    {
      id: 1,
      title: "Reunião 1",
      date: "21-1-2022",
      status: "Active"
    },
    {
      id: 2,
      title: "Reunião 2",
      date: "22-2-2022",
      status: "Active"
    },
    {
      id: 3,
      title: "Reunião 3",
      date: "23-3-2022",
      status: "Active"
    },
    {
      id: 4,
      title: "Reunião 4",
      date: "24-4-2022",
      status: "Active"
    }
  ]
  return (
    <>
      <Navbar active={"eventos"} />

      <main className="bg-slate-900 m-20 p-8">
        <h2 className="text-xl text-center">Eventos</h2>
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
