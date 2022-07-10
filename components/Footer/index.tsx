import { FiGithub, FiTwitter, FiAtSign } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col mb-[20vh]">
      <p className="text-center">Feito usando Nextjs e Tailwind CSS. Hospedado na Vercel</p>
      <div className="flex w-full flex-auto items-center justify-center gap-5 mt-3">
        <Link href="https://github.com/Ryannnkl"><FiGithub size={20} color="#e5e5e5" className="hover:stroke-emerald-600 cursor-pointer"/></Link>
        <Link href="https://twitter.com/RyannFerreira_"><FiTwitter size={20} color="#e5e5e5" className="hover:stroke-emerald-600 cursor-pointer"/></Link>
        <Link href="mailto:ryannnkl@gmail.com"><FiAtSign size={20} color="#e5e5e5" className="hover:stroke-emerald-600 cursor-pointer"/></Link>
      </div>
    </footer>
  );
}
