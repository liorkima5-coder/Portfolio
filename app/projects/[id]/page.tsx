'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// 1. הגדרת המבנים (Interfaces)
interface SubProject {
  title: string;
  img: string;
  tasks: string[];
  url: string;
}

interface SingleProject {
  title: string;
  fullImg: string;
  description: string;
  tasks: string[];
  url: string;
  isMulti: false;
}

interface MultiProject {
  title: string;
  isMulti: true;
  projects: SubProject[];
}

type ProjectType = SingleProject | MultiProject;

// 2. אובייקט הנתונים המעודכן כולל ClinicPro
const projectDetails: Record<string, ProjectType> = {
  clinicpro: {
    title: "ClinicPro Enterprise",
    fullImg: "/Clinic.png", // וודא שיש לך צילום מסך של הדשבורד בתיקיית public
    description: " מערכת SaaS מקיפה לניהול מרפאות, המשלבת ניתוח נתונים מתקדם (BI), מעקב מדדים פיזיולוגיים וניהול יומן תורים חכם.",
    tasks: [
      "בניית ארכיטקטורת Full-Stack מבוססת Next.js 15 ו-TiDB Serverless לאחסון נתונים רפואיים.",
      "פיתוח דשבורד BI למנהלי מערכת הכולל ויזואליזציה של הכנסות לפי מרפאה ועומסי עבודה בזמן אמת.",
      "הטמעת אלגוריתם לחישוב מדדי BMI ופרופיל בריאותי אינטראקטיבי עבור מטופלים.",
      "עיצוב ממשק משתמש (UI/UX) מודרני בשיטת Glassmorphism עם תמיכה מלאה ב-RTL.",
      "פיתוח מנגנון ניהול פיננסי למטפלים המאפשר מעקב הכנסות מצטברות לפי תעריפים אישיים."
    ],
    url: "https://clinic-pro-omega.vercel.app/",
    isMulti: false
  },
  citypulse: {
    title: "CityPulseAI",
    fullImg: "/citypulse-card.png",
    description: "מערכת תומכת החלטה (DSS) לערים חכמות, המנתחת נתוני תושבים ותשתיות לשיפור איכות החיים העירונית.",
    tasks: [
      "פיתוח מודלים לחיזוי מגמות עירוניות ודמוגרפיות באמצעות Machine Learning.",
      "ניתוח נתונים גיאוגרפיים (GIS) לזיהוי פערים בשירותים מוניציפליים.",
      "בניית ממשק אינטראקטיבי לקבלת החלטות מבוססות דאטה ב-Vercel."
    ],
    url: "https://city-pulse-ai-two.vercel.app/",
    isMulti: false
  },
  "dss-opti": {
    title: "מערכת תומכת החלטה (DSS) לאופטימיזציה תפעולית",
    fullImg: "/dss-card.png",
    description: "פיתוח כלי ניהולי מתקדם המבוסס על מודלים מתמטיים של חקר ביצועים (OR) לקבלת החלטות אופטימליות בארגונים.",
    tasks: [
      "מידול מתמטי של בעיות הקצאת משאבים תחת אילוצים (Optimization Models).",
      "ביצוע ניתוחי רגישות (Sensitivity Analysis) לבחינת השפעת שינויים בפרמטרי השוק.",
      "פיתוח ממשק משתמש ב-Python המאפשר למנהלים לבצע סימולציות 'What-if' באופן עצמאי.",
      "הטמעת אלגוריתמים לשיפור היעילות התפעולית וצמצום עלויות בשרשרת הערך."
    ],
    url: "https://municipal-dss.vercel.app/",
    isMulti: false
  },
  bi: {
    title: "דשבורדים וניתוח נתונים",
    isMulti: true,
    projects: [
      {
        title: "1. ניתוח E-commerce (Olist)",
        img: "/ecommerce-full.png",
        tasks: [
            "פיתוח תהליכי ETL לאיחוד מקורות נתונים מרובים.",
            "בניית מודל נתונים רלציוני לאופטימיזציית שאילתות.",
            "יצירת דשבורד KPIs לניטור זמני אספקה ורווחיות."
        ],
        url: "/Ecommerce_Analysis.pdf"
      },
      {
        title: "2. ניתוח מדדי בריאות ויעילות תפעולית - רשת מרפאות",
        img: "/healthcare-full.png",
        tasks: [
            "ויזואליזציה של עומסי מרפאה לפי שעות פעילות.",
            "ניתוח מגמות ביקוש לשיפור הקצאת משאבים רפואיים.",
            "זיהוי צווארי בקבוק בתהליכי קליטת מטופלים."
        ],
        url: "/Healthcare_Analysis.pdf"
      }
    ]
  },
  shiftwise: {
    title: "ShiftWise AI",
    fullImg: "/shiftwise-card.png",
    description: "מערכת מבוססת Python הפותרת בעיות קומבינטוריות מורכבות בניהול כוח אדם.",
    tasks: [
      "פיתוח מנוע אופטימיזציה המבוסס על אילוצים קשיחים ורכים.",
      "מימוש ממשק משתמש אינטראקטיבי המאפשר ניהול משמרות בזמן אמת.",
      "שילוב אלגוריתמים לחיזוי עומסי עבודה עתידיים."
    ],
    url: "https://shiftwise-ai.streamlit.app/",
    isMulti: false
  },
  smartstock: {
    title: "SmartStock",
    fullImg: "/smartstock-card.png",
    description: "פלטפורמת Web לניהול שרשרת אספקה, המיועדת לצמצום מלאי מת ושיפור תהליכי רכש.",
    tasks: [
      "אוטומציה של נקודות הזמנה מחדש (Reorder Points).",
      "ניהול מלאי מרובה מחסנים עם סנכרון נתונים.",
      "בניית ממשק ניהול רספונסיבי המותאם לעבודה במחסן ובמשרד."
    ],
    url: "https://smartstockls.netlify.app/",
    isMulti: false
  }
};

export default function ProjectPage() {
  const params = useParams();
  const id = params?.id as string;
  const project = projectDetails[id];

  if (!project) {
    return <div className="py-20 text-center font-bold">הפרויקט לא נמצא</div>;
  }

  return (
    <main className="min-h-screen bg-white py-12 px-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* כפתור חזרה */}
        <Link href="/projects" className="group text-blue-600 font-bold flex items-center gap-2 mb-10 no-underline">
          <i className="fa-solid fa-chevron-right transition-transform group-hover:translate-x-1"></i>
          <span>חזרה לפרויקטים</span>
        </Link>

        {project.isMulti ? (
          project.projects.map((sub, index) => (
            <div key={index} className="mb-20 border-b border-slate-100 pb-16 last:border-0 text-right italic">
              <h1 className="text-3xl font-black text-slate-900 mb-6">{sub.title}</h1>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-8">
                <img src={sub.img} alt={sub.title} className="w-full h-auto" />
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-list-check text-blue-600"></i>
                  היבטים מקצועיים בביצוע
                </h3>
                <ul className="space-y-4 font-medium opacity-90">
                  {sub.tasks.map((task, i) => (
                    <li key={i} className="flex gap-3 items-start justify-start">
                      <i className="fa-solid fa-check text-blue-600 mt-1.5 text-sm"></i>
                      <span className="text-slate-700 leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <a href={sub.url} download className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-3.5 rounded-xl font-black hover:bg-blue-600 transition-all italic text-sm">
                    <i className="fa-solid fa-file-pdf"></i>
                    הורדת ניתוח פרויקט מלא
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-right italic">
            <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter uppercase">
               {project.title}
            </h1>
            <p className="text-xl text-slate-400 mb-10 font-bold leading-relaxed opacity-80">
               {project.description}
            </p>
            
            <div className="rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl mb-12">
              <img src={project.fullImg} alt={project.title} className="w-full h-auto" />
            </div>

            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4 text-slate-900 uppercase">
                <i className="fa-solid fa-gears text-blue-600"></i>
                מתודולוגיה וביצוע הנדסי
              </h3>
              <ul className="space-y-6">
                {project.tasks.map((task, i) => (
                  <li key={i} className="flex gap-5 items-start justify-start">
                    <i className="fa-solid fa-circle-check text-blue-600 mt-1.5 shadow-sm rounded-full"></i>
                    <span className="text-slate-700 text-lg leading-relaxed font-medium opacity-90">{task}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-14 text-center">
                <a href={project.url} target="_blank" className="inline-flex items-center gap-4 bg-slate-900 text-white px-14 py-5 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 uppercase tracking-tight">
                  כניסה לפרויקט אונליין
                  <i className="fa-solid fa-external-link text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
