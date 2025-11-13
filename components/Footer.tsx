import { NAV_ITEMS, SERVICES, SOCIAL_MEDIA } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 py-4 px-3">
        <div className="border-gray-600 border-1 opacity-70" />
        <ul className="flex justify-center items-center gap-5 py-5">
            {SOCIAL_MEDIA.map(({ src, alt, href }) => (
                <li key={src}>
                <Link href={href}>
                <Image
                    src={src}
                    height={32}
                    width={32}
                    className="h-8 w-auto opacity-75 hover:opacity-100 duration-300"
                    alt={alt}
                />
                </Link>
            </li>
            ))}
        </ul>
        <div className="flex justify-center w-full px-20">
            <div className="grid grid-cols-3  text-gray-500">
                <ul className="space-y-2">
                    {NAV_ITEMS.map(({ href, label }) => (
                        <li key={href}>
                        <Link className="hover:text-white transition-colors duration-300" href={href}>
                        {label}
                        </Link>
                    </li>
                    ))}
                </ul>

                <div className="col-span-2">
                    <ul className="grid grid-cols-2 gap-20 gap-y-2">
                    {SERVICES.map(({ name, href }) => (
                        <li key={name} className="hover:text-white  transition-colors duration-300 cursor-pointer">
                            <Link className="hover:text-white transition-colors duration-300" href={href}>
                                {name}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>

            </div>
        </div>
        <div className="border-gray-600 border-1 opacity-70 my-5" />
        <div className="flex justify-center text-center text-gray-600">
            <p>Copyright © 2025 M.D.V.I.A (Angola) Lda</p>
        </div>
    </footer>
  )
}

export default Footer
