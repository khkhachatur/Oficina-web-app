import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"
import UserDropDown from "./UserDropDown"

interface HeaderProps {
  variant?: 'default' | 'auth'
}

const Header = ({variant = 'default'}: HeaderProps  ) => {
  const isAuth = variant === 'auth'
  return (
<header className="header">
        <div className="header-wrapper">
            <Link href='/'>
                <Image src="/icons/logo-yellow.png" alt='logo' height={32} width={120} className="h-8 w-auto"/>
            </Link>
            {!isAuth &&(
              <>
                <NavItems/>
                <UserDropDown/>
              </>
            )}
        </div>
    </header>
  )
}

export default Header