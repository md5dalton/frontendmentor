import UList from "@/components/UList"
import { barlow } from "@/components/Fonts"
import NavLink from "@/components/NavLink"

export default ({ children }) => <>
    <section className={`${barlow} border-y-very-light-grey border-y-[1px] text-sm md:text-base`}>
        <div className="flex items-center gap-3 container">
            <h1 className="uppercase font-bold border-x-very-light-grey border-x-[1px] p-3 tracking-widest md:px-5">home</h1>
            <div className="px-3 overflow-x-auto ml-auto">
                <UList
                    className="inline-flex gap-2 grow text-grey py-2 whitespace-nowrap lg:gap-6 lg:py-4"
                    items={["Feeds", "My challenges", "My network", "My bookmarks"]}
                    itemHandler={item => <NavLink
                        activeClassName="after:scale-x-100" 
                        className="primary-link-hover"
                        href={`/home/${item.replace(" ", "-").toLowerCase()}`}
                    >{item}</NavLink>}
                />
            </div>
        </div>
    </section>
    {children}
</>