import Logo from "@/components/Logo"
import Link from "next/link"
import { IoBriefcaseOutline } from "react-icons/io5"
import { FaBars, FaChevronDown, FaChevronUp, FaCircleCheck, FaRegBell, FaRegComment } from "react-icons/fa6"
import UList from "@/components/UList"
import ProfileToggler from "@/components/ProfileToggler"
import { barlow } from "@/components/Fonts"

export default () => (
    <header className="text-xl">
        <div className="flex items-center container gap-4 md:gap-6">
            <nav className="flex items-center grow">
                <Logo className="border-r-very-light-grey border-r-[1px] p-[0.9rem] pl-0 min-w-[26px] lg:border-none lg:py-5 lg:px-0" />
                <div className={`${barlow} flex grow justify-end gap-6`}>
                    <div className="hidden gap-4 md:flex italic font-bold uppercase items-center md:text-sm">
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
            <ProfileToggler
                className="hidden md:flex gap-2"
                open={<FaChevronUp />}
            >
                <FaChevronDown />
            </ProfileToggler>
            <FaBars className="md:hidden" />
        </div>
    </header>
)