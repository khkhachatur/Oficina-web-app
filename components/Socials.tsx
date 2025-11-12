import Image from "next/image"
import { SOCIAL_MEDIA } from "@/lib/constants"
import Link from "next/link"

const Socials = () => {
  return (
    <div>
        <ul className="flex flex-col gap-5">
            {SOCIAL_MEDIA.map(({src, alt, href})=>(
                <li key={src}>
                    <Link href={href}>
                        <Image src={src} height={45} width={45} className="hero-social_icons" alt={alt}/>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Socials