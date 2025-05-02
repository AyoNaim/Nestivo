import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Link from 'next/link'
  
  export function MobileNav() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Link href={'./'}>
              <img src='./menu.svg' alt='menu' width={40}  height={40} className="menu-icon"/>
          </Link>
        </SheetTrigger>
        <SheetContent className="flex justify-end items-center" side={"left"}>
          <SheetTitle className="hidden">modal</SheetTitle>
          <div className="h-full w-11/12 flex flex-col justify-start items-center">
            <div className="h-1/3 w-full flex justify-end">
            
            </div>
            <div className={`h-2/3 w-full flex flex-col justify-evenly text-4xl font-[family-name:var(--font-geist-mono)]`}>
              <Link href={'./'}><p className="text-green-600">Home</p></Link>
              <Link href={'./'} className="transition-all duration-500 hover:text-green-500"><p>About</p></Link>
              <Link href={'./'} className="hover:text-green-500"><p>Projects</p></Link>
              <Link href={'./'} className="hover:text-green-500"><p>Contact</p></Link>
            </div>
            <div className="h-1/3 w-full flex justify-start items-end">
              <div className="w-1/3 h-2/3"></div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
  }