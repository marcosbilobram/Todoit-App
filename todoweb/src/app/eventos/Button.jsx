import Link from "next/link"

export default function Button({children, icon, variant="primary", element="link", ...props}) {

    const styles = {
        primary : "flex items-center gap-2 bg-orange-500 py-1 px-4 rounded hover:bg-orange-700 text-black",
        secondary : "flex items-center gap-2 border-2 py-1 px-4 rounded hover:bg-orange-700 text-white"
    }

    const variantClass = styles[variant]

    return (
        <>
        {element === "link"?
            <Link href="#" {...props} className={variantClass}>
                {icon}
                {children}
            </Link>
        :   
            <div className={variantClass} >
                {icon}
                <input type="submit" value={children}/>
            </div>
        }
        </>
        
    )
}