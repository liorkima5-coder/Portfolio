export default function ExpertisePage() {
  const expertise = [
    {
      title: "דיגיטציה של תהליכים עסקיים",
      desc: "זיהוי צווארי בקבוק בארגון והטמעת פתרונות טכנולוגיים שמחליפים עבודה ידנית. המטרה: חיסכון במשאבים, צמצום טעויות אנוש ושיפור השליטה הארגונית.",
      icon: "fa-sliders",
    },
    {
      title: "אופטימיזציה וניהול נתונים (BI)",
      desc: "הפיכת נתונים גולמיים לכלי ניהול ויזואליים. יצירת דשבורדים עסקיים ומערכות תומכות החלטה לשיפור היעילות התפעולית וזיהוי מגמות בזמן אמת.",
      icon: "fa-chart-pie",
    },
    {
      title: "פיתוח מערכות WEB בהתאמה אישית",
      desc: "בניית פלטפורמות דיגיטליות מתקדמות המותאמות במדויק לצרכי הארגון. התמקדות בפתרונות יציבים, מאובטחים ובעלי ביצועים גבוהים, המאפשרים גמישות תפעולית מקסימלית.",
      icon: "fa-code",
    },
  ];

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* כותרת הדף */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 mb-4">תחומי התמחות</h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* גריד הכרטיסיות */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group text-center"
            >
              {/* אייקון בתוך תיבה */}
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-8 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-5 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}