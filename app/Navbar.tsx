"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname() || "";
  
  // פונקציות עזר לסימון הטאב הפעיל
  const isActive = (path: string) => pathname === path;
  const isProjectActive = pathname.startsWith('/projects');

  return (
    <>
      {/* ניווט צף בסגנון Pill */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit px-2 py-2 bg-white/70 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex items-center gap-1">
        <Link href="/" className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 no-underline ${
          isActive('/') ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
        }`}>
          ראשי
        </Link>
        <Link href="/expertise" className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 no-underline ${
          isActive('/expertise') ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
        }`}>
          התמחות
        </Link>
        <Link href="/projects" className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 no-underline ${
          isProjectActive ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
        }`}>
          פרויקטים
        </Link>
        <Link href="/contact" className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 no-underline ${
          isActive('/contact') ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
        }`}>
          צור קשר
        </Link>
      </nav>

      {/* לוגו צף בפינה ימנית עליונה */}
      <div className="fixed top-8 right-10 z-[100] hidden lg:flex items-center gap-2">
         <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
         <span className="font-bold text-slate-900 text-sm tracking-tighter uppercase">Lior Kima</span>
      </div>
    </>
  );
}