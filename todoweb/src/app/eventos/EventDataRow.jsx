import DropMenu from "@/components/DropMenu";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function EventDataRow({evento}) {
  return (
    <div id="data-row" className="flex justify-between hover:bg-slate-400 p-2 my-2 cursor-pointer rounded">
      <div className="flex gap-1">
        <CalendarDaysIcon className="h-6 w-6" />
        <span>{evento.title}</span>
      </div>
      <span>{evento.date}</span>
      <div className="text-slate-100">
        <DropMenu evento={evento}/>
      </div>
    </div>
  )
}