import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      id: 'citypulse',
      title: "CityPulseAI",
      stack: "DATA SCIENCE | MACHINE LEARNING",
      desc: "ניתוח נתונים מוניציפליים מבוסס מודלים לחיזוי לשיפור שירותים עירוניים.",
      img: "/citypulse-card.png"
    },
    {
      id: 'smartstock',
      title: "SmartStock",
      stack: "LOGISTICS | WEB APP",
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
      stack: "PYTHON | OPTIMIZATION",
      desc: "אלגוריתם חכם לאופטימיזציית סידורי עבודה המאזן בין אילוצים עסקיים והעדפות עובדים.",
      img: "/shiftwise-card.png"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-[900] text-slate-900 mb-4">הפרויקטים שלי</h2>
          <p className="text-slate-500 text-base md:text-lg font-light max-w-2xl mx-auto">
            בחר פרויקט כדי לראות את הפירוט המלא, המתודולוגיה והתוצאה הסופית.
          </p>
        </div>

        {/* גריד מותאם לדפדפן - 3 בטור */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 flex flex-col"
            >
              {/* אזור התמונה */}
              <div 
                className="h-48 w-full bg-slate-100 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: `url('${project.img}')` }}
              >
                {!project.img && (
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="fa-solid fa-image text-slate-300 text-3xl"></i>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow text-right">
                <span className="text-blue-600 font-bold text-[10px] tracking-widest uppercase mb-2">
                  {project.stack}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="mt-auto flex items-center text-blue-600 font-bold text-sm gap-2">
                  <span>צפייה בפרטים</span>
                  <i className="fa-solid fa-arrow-left text-xs transition-transform group-hover:-translate-x-1"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}