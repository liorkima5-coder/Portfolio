import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    // הפרויקט החדש: ClinicPro - מערכת BI וניהול מרפאות
    {
      id: 'clinicpro',
      title: "ClinicPro Enterprise",
      stack: "Next.js | TiDB | BI Analytics",
      desc: "מערכת SaaS מתקדמת לניהול מרפאות המשלבת דשבורדים של BI, מעקב מדדי BMI וניהול פיננסי בזמן אמת.",
      img: "/Clinic.png" // הלוגו שהעלינו לתיקיית 
    },
    {
      id: 'citypulse',
      title: "CityPulseAI",
      stack: "Next.Js | SupaBase",
      desc: "ניתוח נתונים מוניציפליים מבוסס מודלים לחיזוי לשיפור שירותים עירוניים.",
      img: "/citypulse-card.png"
    },
    {
      id: 'smartstock',
      title: "SmartStock",
      stack: "Python | MySQL | Logistics",
      desc: "מערכת ניהול מלאי מתקדמת המשלבת אוטומציית הזמנות ומעקב מלאי בזמן אמת.",
      img: "/smartstock-card.png"
    },
    {
      id: 'bi',
      title: "דשבורדים וניתוח נתונים",
      stack: "POWER BI | DATA ANALYSIS",
      desc: "הפקת תובנות עסקיות ותפעוליות באמצעות ויזואליזציה מתקדמת של נתוני עתק.",
      img: "/bi-card.png"
    },
    {
      id: 'shiftwise',
      title: "ShiftWise AI",
      stack: "PYTHON | SupaBase",
      desc: "אלגוריתם חכם לאופטימיזציית סידורי עבודה המאזן בין אילוצים עסקיים והעדפות עובדים.",
      img: "/shiftwise-card.png"
    },
    {
      id: 'dss-opti',
      title: "מערכת תומכת החלטה (DSS)",
      stack: "Python | Optimization | OR",
      desc: "מערכת אופטימיזציה מתקדמת המבוססת על מודלים מתמטיים לשיפור יעילות תפעולית וניהול משאבים.",
      img: "/dss-card.png"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] py-12 md:py-20" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-[900] text-slate-900 mb-4">פרויקטים נבחרים</h2>
          <p className="text-slate-500 text-base md:text-lg font-light max-w-2xl mx-auto italic">
            פתרונות הנדסיים המשלבים פיתוח תוכנה, אופטימיזציה וניתוח נתונים מתקדם.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* אזור התמונה עם אפקט זום */}
              <div 
                className="h-56 w-full bg-slate-100 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('${project.img}')` }}
              >
                {!project.img && (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900">
                    <span className="text-white font-black italic">CP</span>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow text-right italic">
                <span className="text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase mb-3">
                  {project.stack}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium opacity-80 line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="mt-auto flex items-center text-slate-900 font-black text-xs gap-3 group-hover:gap-5 transition-all">
                  <span className="uppercase tracking-widest">צפייה בפרויקט</span>
                  <span className="text-blue-600">←</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
