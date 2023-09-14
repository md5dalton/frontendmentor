import Logo from "@/components/Logo"
import Link from "next/link"
import { IoBriefcaseOutline } from "react-icons/io5"
import { FaBars, FaChevronDown, FaCircleCheck, FaRegBell, FaRegComment } from "react-icons/fa6"
import UList from "@/components/UList"
import { Barlow } from "next/font/google"

const font = Barlow({ preload: false, weight: "700" })

export default () => (
    <header className="flex items-center text-xl border-b-very-light-grey border-b-[1px] md:px-6 md:gap-4">
        <nav className="flex items-center grow md:max-w-[1400px] md:m-auto">
            <Logo className="border-r-very-light-grey border-r-[1px] p-4 min-w-[26px] md:border-none md:py-5 md:px-0" />
            <div className={`${font.className} flex grow justify-end gap-6`}>
                <div className="hidden gap-4 md:flex italic uppercase items-center md:text-sm">
                    <UList
                        className="flex gap-4"
                        items={["challenges", "solutions", "resources"]}
                        itemHandler={item => <Link href={item}>{item}</Link>}
                    />
                    <Link href="" className="flex items-center gap-4">
                        <p>unlock</p> 
                        <p className="bg-blue text-white text-xs py-1 px-2 rounded-sm not-italic tracking-widest">pro</p> 
                    </Link>
                </div>
                <div className="flex gap-4">
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
            </div> 
        </nav>
        <div className="hidden items-center gap-4 md:flex">
            <div className="h-10 w-10 bg-black rounded-full"></div>
            <FaChevronDown />
        </div>
        <FaBars className="mx-4 md:hidden" />
    </header>
)