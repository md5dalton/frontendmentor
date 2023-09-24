import { barlow } from "@/components/Fonts"
import NavLink from "@/components/NavLink"
import ProfileToggler from "@/components/ProfileToggler"
import UList from "@/components/UList"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

export default ({ children }) => (
    <div className={`${barlow} grid gap-4 md:flex md:justify-between`}>
        <div className="flex items-center">
            <ProfileToggler
                className="flex text-blue gap-1 md:hidden"
                size="h-9 w-9"
                open={<FaChevronLeft />}
            >
                <FaChevronRight />
            </ProfileToggler>
            <div className="flex justify-end grow text-sm text-light-grey font-semibold md:text-lg">
                <UList
                    className="flex border-b-very-light-grey border-b-[1px] w-fit py-1"
                    items={["My feed", "Latest feedback"]}
                    itemHandler={item => <NavLink 
                        href={`/home/feeds/${item.replace(" ", "-").toLowerCase()}`}
                        activeClassName="!border-b-blue text-blue"
                        className="py-1 px-2 border-b-2 border-b-transparent hover:border-b-very-light-grey">
                            {item}
                        </NavLink>}
                />
            </div>
        </div>
        <div>
            {children}
        </div>
    </div>
)