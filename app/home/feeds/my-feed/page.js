import Toolbar from "../Toolbar"
import CTALink from "@/components/CTALink"

export default () => <>
    <Toolbar>
        <CTALink
            href="/home/my-challenges"
            color="bg-red"
        >submit a solution</CTALink>
    </Toolbar>
    <p>my feed</p>
</>