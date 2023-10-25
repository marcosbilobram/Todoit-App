import Navbar from "@/components/NavBar"
import EventDataRow from "./eventDataRow"

export default function Eventos() {
  const events = [
    {}
  ]
  return (
    <>
      <Navbar active={"eventos"} />

      <main className="bg-slate-900 m-20 p-8">
        <h2 className="text-xl text-center">Eventos</h2>
        <div>
          <div id="data" className="pl-24 pr-24">
            <EventDataRow/>
          </div>
        </div>
      </main>
    </>
  )
}
