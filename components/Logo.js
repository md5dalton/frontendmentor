import Image from "next/image"
import Link from "next/link"

export default props => <Link href="/" {...props}>
    <Image src="/logo-mobile.svg" width={28} height={28} /> 
</Link>