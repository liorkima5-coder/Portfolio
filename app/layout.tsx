import './globals.css';
import { Rubik } from 'next/font/google';
import Navbar from './Navbar'; // ייבוא רכיב הניווט שהפרדנו

const rubik = Rubik({ subsets: ['hebrew', 'latin'] });

// הגדרת המטא-דאטה והלוגו בלשונית (Favicon)
export const metadata = {
  title: 'Lior Kima | Portfolio',
  description: 'פתרונות טכנולוגיים לארגונים חכמים',
  icons: {
    // מצביע לקובץ logo.png שנמצא בתוך תיקיית public
    icon: '/logo.png', 
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* טעינת FontAwesome לאייקונים בכל האתר */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={`${rubik.className} bg-white antialiased text-slate-900`}>
        
        {/* רכיב הניווט (Client Component) הכולל את הלוגו והטאבים */}
        <Navbar /> 
        
        {/* תוכן העמודים - pt-32 נותן מרווח מהניווט הצף */}
        <div className="pt-32">
          {children}
        </div>

        {/* פוטר פשוט ומקצועי */}
        <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-50 mt-20">
          © 2026 Lior Kima. Engineering & Development Solutions.
        </footer>
      </body>
    </html>
  );
}
