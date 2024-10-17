"use client"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Sidebar(props: SiderbarProps) {

  const {user} = props

  const pathName = usePathname()

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className='flex mb-12 cursor-pointer items-center gap-2'
        >
          <Image
            src="/icons/logo.svg"
            alt="Budget Logo"
            width={34}
            height={34}
            className='size-[24px] max-xl:size-14'
          /> 
          <h1 className="sidebar-logo whitespace-nowrap">Budget App</h1>
        </Link>

        {sidebarLinks.map((i) => {
          
          const isActive = pathName === i.route || pathName.startsWith(`${i.route}/`)

          return (
            <Link
              href={i.route}
              key={i.label}
              className={cn('sidebar-link', {"bg-bank-gradient": isActive})}
            >
              <div className="relative size-6">
                <Image
                  src={i.imgURL}
                  alt={i.label}
                  fill
                  className={
                    cn({'brightness-[3] invert-0': isActive})
                  }
                />
              </div>
              <p className={cn('sidebar-label', {"!text-white": isActive})}>
                {i.label}
              </p>
            </Link>
        )})}
      </nav>
    </section>
  )
}

export default Sidebar