import './globals.css';
import { Rubik } from 'next/font/google';
import Navbar from './Navbar'; // וודא שקיים קובץ בשם Navbar.tsx בתיקיית app

const rubik = Rubik({ subsets: ['hebrew', 'latin'] });

export const metadata = {
  title: 'Lior Kima | Solutions',
  description: 'פתרונות טכנולוגיים לארגונים חכמים',
  icons: {
    icon: '/logo.png', // הלוגו שלך מתיקיית public יופיע בלשונית
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={`${rubik.className} bg-white antialiased text-slate-900`}>
        {/* רכיב הניווט המקצועי שהפרדנו */}
        <Navbar /> 
        
        <div className="pt-32">
          {children}
        </div>

        <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-50 mt-20">
          © 2026 Lior Kima. Engineering & Development Solutions.
        </footer>
      </body>
    </html>
  );
}