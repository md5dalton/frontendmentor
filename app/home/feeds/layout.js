export default ({ children }) => (
    <article className="container
        py-[1.6rem]
        grid

        md:grid-cols-[1fr_2.25fr]
        md:grid-rows-[min-content_1fr]
        md:gap-6
        
        md:py-14
        
        lg:grid-cols-[1fr_2.25fr_1fr]
        lg:grid-rows-none
        lg:gap-8
        ">
        <section className="hidden md:block bg-red">sidebar-l</section>
        <section>
            {children}
        </section>
        <section className="border-x-very-light-grey border-x-[1px] rounded-2xl bg-white">sidebar-r</section>
    </article>
)