import Link from "next/link"
import {NAV_ITEMS} from "@/lib/constants"

const NavItems = () => {
  return (
    <div>
        <ul className="flex gap-5 ">
            {NAV_ITEMS.map(({href, label}) =>(
                <li className="hover:text-yellow-500 transition-colors" key={href}>
                    <Link href={href}>{label}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NavItems