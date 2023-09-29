import Image from "next/image"
import Link from "next/link"

export default props => <Link href="/" {...props}>
    <picture>
        <source media="(min-width: 1024px)" srcSet="/logo-desktop.svg" />
        <img src="/logo-mobile.svg" style={{height: 28}} />
    </picture>
    {/* <Image src="/logo-mobile.svg" sizes="(min-width: 768px) logo-desktop.png" width={28} height={28} />  */}
</Link>