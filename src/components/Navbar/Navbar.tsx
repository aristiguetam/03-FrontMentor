'use client';
import './navbar.css'

import Image from "next/image";
import Link from 'next/link';
import { usePathname, } from "next/navigation"

export const Navbar = () => {

  const pathname = usePathname()

  return (
    <nav className="mt-10 mx-6 md:mx-0 relative flex items-center">

      <Image src={"/assets/shared/logo.svg"} alt={"Logo"} width={0} height={0} sizes='(100vw)' className="ml-0 md:ml-10 w-12 h-12" />

      <div className="lineDivider" />

      <div className="flex-1" />

      <div className="bgEnlacesNav ">

        <Link href='/'>

          <div className='ml-12 lg:ml-24 flex items-center justify-center gap-2 relative py-9  hover:opacity-60'>
            <span className="span">00</span>
            <h3 className='enlaces uppercase'>
              Home
            </h3>
            <div className={`${pathname === '/' ? 'fadeInWidth h-[3px] bg-[#fff] absolute bottom-0' : 'hidden'}  `} />
          </div>

        </Link>

        <Link href='/destination'>
          <div className='flex items-center justify-center gap-2 relative py-9 hover:opacity-60' >
            <span className="span">01</span>
            <h3 className='enlaces uppercase'>
              Destination
            </h3>
            <div className={`${pathname === '/destination' ? 'fadeInWidth h-[3px] bg-[#fff] absolute bottom-0' : 'hidden'}  `} />
          </div>

        </Link >

        <Link href='/crew'>

        <div className="flex items-center justify-center gap-2 relative py-9 hover:opacity-60">
          <span className="span">02</span>
          <h3 className='enlaces uppercase' >
            Crew
          </h3>
          <div className={`${pathname === '/crew' ? 'fadeInWidth  h-[3px] bg-[#fff] absolute bottom-0' : 'hidden'}  `} />
        </div>

        </Link>
        <Link href='/technology'>

        <div className="flex items-center justify-center gap-2 relative py-9 hover:opacity-60">
          <span className="span">03</span>
          <h3 className='enlaces uppercase'>
            Technology
          </h3>
          <div className={`${pathname === '/technology' ? 'fadeInWidth  h-[3px] bg-[#fff] absolute bottom-0' : 'hidden'}  `} />
        </div>
        </Link>

      </div>

      <div className="md:hidden">
        <Image src={"/assets/shared/icon-hamburger.svg"} alt={"menu"} width={40} height={40} />
      </div>

    </nav>
  )
}
