import Image from "next/image";
import Link from "next/link";
import { FiBox } from "react-icons/fi";

import logo from "../../public/box.svg"

export default function NavBar() {
  return (
    <div className="flex fixed inset-x-0 bottom-0 z-10 justify-center motion-safe:animate-slide-up-fade pointer-events-none bg-gradient-to-t from-neutral-900/50 to-transparent">
      <nav className="container flex overflow-x-auto overflow-y-hidden relative items-stretch p-1 m-4 max-w-xl bg-neutral-800/80 rounded-xl shadow-lg shadow-black/50 backdrop-blur-sm pointer-events-auto snap-x sm:snap-none"
        data-navigation-container>
        <Link href="/" passHref><a className="p-1 rounded-lg duration-100 md:hover:bg-white/10 hover:stroke-emerald-600">
          <div className="flex w-8 h-8 items-center justify-center">
            <FiBox size={24} color="#e5e5e5" className="hover:stroke-emerald-600"/>
          </div>
        </a></Link>
        <div className="flex-grow min-w-[2ch]"></div>
        <Link href="/" passHref>
          <a 
            className="flex relative justify-center items-center py-1 px-2 rounded-lg transition-colors snap-end md:px-4 before:absolute before:inset-x-2 before:rounded-t-full before:border-b before:pointer-events-none before:shadow motion-safe:before:transition-all before:bottom-[-8px] hover:before:bottom-[-4px] hover:before:shadow-neutral-400 before:border-neutral-400 before:border-opacity-0 hover:before:border-opacity-100" 
            data-navigation-link 
            data-external-link="false">Inicio</a>
        </Link>
      </nav>
    </div>
  );
}
