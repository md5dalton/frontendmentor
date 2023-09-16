export default ({ children }) => (
    <article className="container py-[1.6rem] grid md:py-8 md:grid-cols-[1fr_2.5fr] md:grid-rows-[min-content_1fr]">
        <section className="hidden md:block">sidebar-l</section>
        <section>
            {children}
        </section>
        <section>sidebar-r</section>
    </article>
)