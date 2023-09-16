import UList from "@/components/UList"
import Link from "next/link"

import { Barlow } from "next/font/google"

const font = Barlow({ preload: false, weight: ["500", "700"] })

export default ({ children }) => <>
    <section className={`${font.className} border-y-very-light-grey border-y-[1px] text-sm px-4 md:text-base`}>
        <div className="flex items-center md:max-w-[1400px] md:m-auto md:px-6">
            <h1 className="uppercase font-bold border-x-very-light-grey border-x-[1px] px-[14px] py-[0.8rem] tracking-widest md:px-6">home</h1>
            <UList
                className="flex gap-2 grow justify-end text-grey px-4 md:gap-6"
                items={["Feeds", "My challenges", "My network", "My bookmarks"]}
                itemHandler={item => <Link href={`/home/${item.replace(" ", "-").toLowerCase()}`}>{item}</Link>}
            />
        </div>
    </section>
    {children}
</>