export default function TextInput({label, id, ...props}) {
    return (
        <div className="flex flex-col gap-1 my-2">
            <label className = "text-slate-100 font-semibold" htmlFor={id}>{label}</label>
            <input {...props} id={id} className="bg-slate-300 rounded p-2 outline-none focus: ring-orange-500 focus:ring-1 text-black"/>
        </div>
    )
}