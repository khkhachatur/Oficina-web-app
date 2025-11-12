import { SOCIAL_MEDIA } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"



const Footer = () => {
  return (
      <footer className="bottom-0 left-0 py-4 px-3">
        <div className="border-gray-600 border-1 opacity-70"/>
        <ul className="flex justify-center items-center gap-5 py-3">
            {SOCIAL_MEDIA.map(({src, alt, href})=>(
                <li key={src}>
                    <Link href={href}>
                        <Image src={src} height={32} width={32} className="h-8 w-auto opacity-75 hover:opacity-100 duration-300" alt={alt}/>
                    </Link>
                </li>
            ))}
        </ul>
            {/* <div className="border-gray-600 border-1 opacity-50"/> */}
        <div className="flex justify-between">
            {}
        </div>
    </footer>
  )
}

export default Footer