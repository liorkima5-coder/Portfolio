import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-24 pb-16 px-6">
        {/* Tag עליון */}
        <div className="bg-[#eff6ff] text-[#2563eb] px-5 py-1.5 rounded-md text-sm font-bold mb-8 border border-[#dbeafe] tracking-wide uppercase">
          Data Scientist & BI Developer
        </div>

        {/* כותרת מרכזית עבה */}
        <h1 className="text-[3.5rem] md:text-[4.5rem] font-[900] text-[#0f172a] leading-[1.1] mb-8 tracking-tight">
          פתרונות טכנולוגיים<br />לארגונים חכמים
        </h1>

        {/* תת-כותרת דקה */}
        <p className="text-xl md:text-2xl text-slate-500 max-w-[850px] mb-12 font-light leading-relaxed">
         מתמחה בהנדסת תהליכים ופתרונות Data Science. מוביל פרויקטים של אופטימיזציה תפעולית, בניית מערכות תומכות החלטה (DSS) ופיתוח דשבורדים חכמים המתרגמים נתוני עתק לתובנות עסקיות ומעשיות.
        </p>

        {/* כפתורי הנעה לפעולה (CTA) */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/contact" className="bg-[#1e293b] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#2563eb] transition-all transform hover:-translate-y-1 shadow-lg">
            תיאום שיחת ייעוץ
          </Link>
          <Link href="/projects" className="bg-white text-[#1e293b] border border-[#e2e8f0] px-10 py-4 rounded-xl font-bold text-lg hover:border-[#1e293b] transition-all transform hover:-translate-y-1">
            צפייה בתיק עבודות
          </Link>
        </div>

        {/* שורת לוגואים טכנולוגיים (Tech Strip) */}
        <div className="mt-24 pt-10 border-t border-slate-100 w-full max-w-4xl flex justify-center items-center gap-12 md:gap-16 text-3xl text-slate-400 opacity-80">
          <i className="fa-brands fa-python hover:text-[#3776ab] transition-colors cursor-help" title="Python"></i>
          <i className="fa-brands fa-react hover:text-[#61dafb] transition-colors cursor-help" title="React / Next.js"></i>
          <i className="fa-solid fa-database hover:text-[#336791] transition-colors cursor-help" title="SQL & Databases"></i>
          <i className="fa-brands fa-js hover:text-[#f7df1e] transition-colors cursor-help" title="JavaScript"></i>
          <i className="fa-brands fa-github hover:text-[#181717] transition-colors cursor-help" title="GitHub"></i>
        </div>
      </section>
    </main>
  );
}
