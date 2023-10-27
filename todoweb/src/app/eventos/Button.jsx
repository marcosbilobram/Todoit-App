export default function Button({children, icon, ...props}) {
    return (
        <a href="#" {...props} className="flex items-center gap-2 bg-orange-500 py-1 px-4 rounded hover:bg-orange-700 text-black">
            {icon}
            {children}</a>
    )
}