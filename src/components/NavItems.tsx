import Link from "next/link"
import {NAV_ITEMS} from "@/src/lib/constants"

const NavItems = () => {
  return (
    <div>
        <ul className="flex gap-5 ">
            {NAV_ITEMS.map(({href, label}) => {
                const isActive = typeof window !== "undefined" && window.location.pathname === label;
                return (
                    <li
                        className={`transition-colors ${
                            isActive ? "text-yellow-500" : "hover:text-yellow-500"
                        }`}
                        key={href}
                    >
                        <Link href={href}>{label}</Link>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default NavItems