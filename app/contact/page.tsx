'use client';
import { useState, useRef } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // הלינק המדויק מה-index.html המקורי שלך
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw4Pk92yGelNebNThg_VYwov3Q1ESskGl_4GDwZ_icdXUsyWgRFNaLs1rsjmFQPKGVC/exec';
    
    if (!formRef.current) return;

    try {
      await fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(formRef.current) 
      });
      
      setStatus('success');
      formRef.current.reset();
      
      // חזרה למצב רגיל אחרי 3 שניות
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error!', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-[900] text-slate-900 mb-4">בואו נניע תהליכים</h1>
          <p className="text-slate-500 text-lg font-light">
            מוזמנים להשאיר פרטים או להוריד את קורות החיים שלי למטה.
          </p>
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-sm">
          
          {/* כפתור קורות חיים בולט */}
          <div className="mb-12">
            <a 
              href="/Lior_Kima_CV.pdf" 
              download 
              className="flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              הורדת קורות חיים (PDF)
            </a>
          </div>

          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-slate-50 px-4 text-slate-400 font-medium uppercase tracking-widest">או השאירו פנייה</span>
            </div>
          </div>

          {/* טופס מחובר ל-Google Sheets */}
          <form ref={formRef} name="submit-to-google-sheet" onSubmit={handleSubmit} className="space-y-6 text-right" dir="rtl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 mr-1">שם מלא</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 mr-1">מספר טלפון</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 mr-1">כתובת אימייל</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 mr-1">איך אוכל לעזור?</label>
              <textarea 
                name="message" 
                rows={4} 
                required 
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                status === 'success' ? 'bg-blue-600 text-white' : 
                status === 'error' ? 'bg-red-500 text-white' : 
                'bg-slate-900 text-white hover:bg-blue-600 shadow-lg'
              }`}
            >
              {status === 'idle' && 'שליחת פנייה'}
              {status === 'sending' && 'שולח...'}
              {status === 'success' && 'הפרטים נשלחו בהצלחה'}
              {status === 'error' && 'שגיאה בשליחה'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}