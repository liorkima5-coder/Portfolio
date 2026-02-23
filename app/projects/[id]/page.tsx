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

// איחוד הסוגים ל-Type אחד שהקוד יזהה
type ProjectType = SingleProject | MultiProject;

// 2. אובייקט הנתונים המעודכן עם שמות הקבצים ל-Public
const projectDetails: Record<string, ProjectType> = {
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
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* כפתור חזרה */}
        <Link href="/projects" className="group text-blue-600 font-bold flex items-center gap-2 mb-10 no-underline">
          <i className="fa-solid fa-chevron-right transition-transform group-hover:translate-x-1"></i>
          <span>חזרה לפרויקטים</span>
        </Link>

        {project.isMulti ? (
          /* תצוגה לפרויקט BI */
          project.projects.map((sub, index) => (
            <div key={index} className="mb-20 border-b border-slate-100 pb-16 last:border-0 text-right">
              <h1 className="text-3xl font-black text-slate-900 mb-6">{sub.title}</h1>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-8">
                <img src={sub.img} alt={sub.title} className="w-full h-auto" />
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-list-check text-blue-600"></i>
                  היבטים מקצועיים בביצוע
                </h3>
                <ul className="space-y-4">
                  {sub.tasks.map((task, i) => (
                    <li key={i} className="flex gap-3 items-start justify-start">
                      <i className="fa-solid fa-check text-blue-600 mt-1.5 text-sm"></i>
                      <span className="text-slate-700 leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <a href={sub.url} download className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-all">
                    <i className="fa-solid fa-file-pdf"></i>
                    הורדת ניתוח פרויקט מלא
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* תצוגה לפרויקט רגיל */
          <div className="text-right">
            <h1 className="text-4xl font-[900] text-slate-900 mb-6 leading-tight">{project.title}</h1>
            <p className="text-xl text-slate-500 mb-10 font-light leading-relaxed">{project.description}</p>
            
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl mb-12">
              <img src={project.fullImg} alt={project.title} className="w-full h-auto" />
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <i className="fa-solid fa-gears text-blue-600"></i>
                מתודולוגיה וביצוע
              </h3>
              <ul className="space-y-5">
                {project.tasks.map((task, i) => (
                  <li key={i} className="flex gap-4 items-start justify-start">
                    <i className="fa-solid fa-circle-check text-blue-600 mt-1.5"></i>
                    <span className="text-slate-700 text-lg leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 text-center">
                <a href={project.url} target="_blank" className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-blue-200 shadow-lg">
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