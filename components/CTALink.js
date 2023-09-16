import Link from "next/link"

export default ({ color, href, children }) => <>
    <Link
        href={href}
        className={`${color} px-7 text-white w-full rounded-full uppercase italic font-bold text-base h-10 grid items-center justify-items-center py-2 md:h-11`}
    >{children}</Link>
</>