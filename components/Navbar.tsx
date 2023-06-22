import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import ThemeButton from "./ThemeButton";

const Navbar = () => {

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/"  className="flex justify-center items-center">
          <Image src="/logo.svg"
          alt="logo"
          width={116}
          height={18}
          className="object-contain" />
          </Link>     
         
          <ThemeButton/>
       
          <CustomButton title="sign in" btnType="button" 
          containerStyles="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500
          rounded-full font-bold text-slate-50 min-w-[130px]"/>
         
      </nav>
    </header>
  )
}

export default Navbar