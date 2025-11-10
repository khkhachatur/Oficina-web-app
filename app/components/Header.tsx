import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"
import UserDropDown from "./UserDropDown"

const Header = () => {
  return (
    <header className="sticky top-0 header">
        <div className="header-wrapper">
            <Link href='/'>
                <Image src="/icons/logo-yellow.png" alt='logo' height={32} width={120} className="h-8 w-auto"/>
            </Link>
            <NavItems/>
            <UserDropDown/>
        </div>
    </header>
  )
}

export default Header