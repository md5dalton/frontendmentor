import Logo from "@/components/Logo"
import Link from "next/link"
import { IoBriefcaseOutline } from "react-icons/io5"
import { FaBars, FaCircleCheck, FaRegBell, FaRegComment } from "react-icons/fa6"

export default () => (
    <header className="flex items-center text-xl border-b-very-light-grey border-b-[1px]">
        <nav className="flex items-center grow">
            <Logo className="border-r-very-light-grey border-r-[1px] py-4 px-4" />
            <div className="flex grow justify-end gap-4">
                <Link href="notifications">
                    <FaRegBell />
                </Link>
                <Link href="work" className="relative">
                    <IoBriefcaseOutline />
                    <FaCircleCheck className="absolute text-green bg-white rounded-full text-xs -top-1 -right-1" />
                </Link>
                <Link href="messages">
                    <FaRegComment />
                </Link>
            </div> 
        </nav>
        <FaBars className="mx-4" />
    </header>
)