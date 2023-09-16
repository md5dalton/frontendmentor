import { Barlow, Heebo } from "next/font/google"

const FBarlow = Barlow({ preload: false, weight: ["500", "600", "700"] })
const FHeebo = Heebo({ subsets: ['latin'] })

export const barlow = FBarlow.className
export const heebo = FHeebo.className
