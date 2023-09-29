import UList from "@/components/UList"
import { barlow } from "@/components/Fonts"
import NavLink from "@/components/NavLink"

export default ({ children }) => <>
    <section className={`${barlow} border-y-very-light-grey border-y-[1px] text-sm md:text-base`}>
        <div className="flex items-center container">
            <h1 className="uppercase font-bold border-x-very-light-grey border-x-[1px] px-[14px] py-[0.8rem] tracking-widest md:px-6 md:py-4">home</h1>
            <UList
                className="flex gap-2 grow text-grey py-2 overflow-x-auto no-scrollbar whitespace-nowrap md:gap-6 justify-end md:py-4"
                items={["Feeds", "My challenges", "My network", "My bookmarks"]}
                itemHandler={item => <NavLink
                    activeClassName="after:scale-x-100" 
                    className="after:block 
                        after:bg-red
                        after:h-[2.4px]
                        after:scale-x-0
                        after:transition-transform
                        after:ease-in-out
                        after:duration-300
                        hover:after:scale-x-100"
                    href={`/home/${item.replace(" ", "-").toLowerCase()}`}
                >{item}</NavLink>}
            />
        </div>
    </section>
    {children}
</>