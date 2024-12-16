'use client'
import Image from "next/image"
import SearchBar from "./SearchBar"
import IconButton from "./IconButton"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const path = usePathname().replace('/', '');

  return (
    <div className="md:h-[124px] flex justify-between items-center md:px-16 p-6 gap-6">
      <div className="flex gap-11 flex-col md:flex-row w-full items-center">

        {path === 'category' && <div className="flex justify-between w-full md:w-fit">
          <Image src={'/menu.svg'} alt="menu-icon" width={100} height={100} className="size-8" />
          <div className="block md:hidden">
            <IconButton icon="/user.png" redDot={false} />
          </div>
        </div>}

        <div className="flex justify-between w-full md:w-fit">
          <Link href={'/'}><Image src={'/logo.svg'} alt="logo" width={200} height={200} /></Link>
          <div className="block md:hidden">
            {path !== 'category' && <IconButton icon="/user.png" redDot={false} />}
          </div>
        </div>
        <SearchBar />
      </div>
      <div className="gap-5 hidden md:flex ">
        <div className="lg:block hidden">
          <IconButton icon="/like.png" redDot={false} />
        </div>

        <div className="lg:block hidden">
          <IconButton icon="/bell.png" redDot />
        </div>

        <div className="lg:block hidden">
          <IconButton icon="/setting.png" redDot={false} />
        </div>

        <div className="hidden md:block">
          <IconButton icon="/user.png" redDot={false} />
        </div>
      </div>
    </div>
  )
}

export default Navbar