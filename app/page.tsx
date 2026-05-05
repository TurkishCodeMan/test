// src/app/page.tsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Calendar, MapPin, Music, Play, Sparkles } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    date: "5 Mart 2022",
    title: "İlk Karşılaşma",
    description: "Okul bahçesinde geçerken bana selam verdin... O an dünyam değişti, senden çok etkilendim.",
    icon: <Heart className="text-rose-500" />,
  },
  {
    date: "Mart 2022",
    title: "İlk Randevu",
    description: "Seni üniversitedeki o kafeye davet ettim. Çay içerken kalbim yerinden çıkacak gibiydi, çok heyecanlıydım.",
    icon: <Calendar className="text-rose-500" />,
  },
  {
    date: "14 Haziran 2022",
    title: "Mezuniyet",
    description: "Birlikte bir dönemi kapattık, yeni hayatımıza beraber adım attık.",
    icon: <MapPin className="text-rose-500" />,
  },
  {
    date: "29 Haziran 2024",
    title: "Nişanlandık",
    description: "Sonsuzluğa giden yolda ilk resmi adımımız. Kalbim seninle bir ömre hazır.",
    icon: <Heart className="text-rose-500" />,
  },
  {
    date: "Temmuz 2025",
    title: "İstanbul Turu",
    description: "İstanbul'un büyüleyici sokaklarında, tarihin içinde ellerimiz kenetli gezdik.",
    icon: <MapPin className="text-rose-500" />,
  },
  {
    date: "Eylül 2025",
    title: "Tatil Rüyası",
    description: "Denizin ve güneşin tadını birlikte çıkardığımız, huzur dolu o eşsiz günler.",
    icon: <MapPin className="text-rose-500" />,
  },
  {
    date: "28 Haziran 2025",
    title: "Evlendik!",
    description: "Hayatımın en güzel günü, seninle bir ömre 'Evet' dediğim gün. Seni her şeyden çok seviyorum!",
    icon: <Heart className="text-rose-500" />,
  },
];

// Arka planda yüzen kalpler bileşeni
const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: "110vh", 
            x: Math.random() * 100 + "vw", 
            opacity: 0 
          }}
          animate={{ 
            y: "-10vh", 
            opacity: [0, 0.5, 0] 
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            delay: Math.random() * 20 
          }}
          className="absolute text-rose-200/40"
        >
          <Heart fill="currentColor" size={Math.random() * 30 + 10} />
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startExperience = () => {
    setIsStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => console.error("Müzik hatası:", error));
    }
  };

  return (
    <main className="min-h-screen relative bg-[#fffafb] text-gray-800 selection:bg-rose-100">
      <audio ref={audioRef} src="/muzik.mp3" preload="auto" loop />
      <FloatingHearts />

      <AnimatePresence>
        {!isStarted ? (
          <motion.div
            key="overlay"
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fffafb]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center px-6"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="inline-block mb-8"
              >
                <Heart className="w-24 h-24 text-rose-500 fill-rose-500 shadow-rose-200" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-handwriting text-rose-600 mb-6">
                Sana Bir Sürprizim Var...
              </h1>
              <p className="text-gray-500 mb-10 font-serif text-xl italic">
                "Her şey seninle başladı..."
              </p>
              <button
                onClick={startExperience}
                className="group relative px-10 py-4 bg-rose-500 text-white rounded-full font-serif text-xl hover:bg-rose-600 transition-all shadow-[0_10px_20px_rgba(244,63,94,0.3)] hover:shadow-[0_15px_30px_rgba(244,63,94,0.4)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Play className="w-6 h-6 fill-current" />
                  Hikayemizi Başlat
                </span>
                <motion.div 
                  className="absolute inset-0 bg-rose-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween" }}
                />
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 container mx-auto px-4 py-20"
          >
            {/* Müzik İkonu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed bottom-8 right-8 z-50 bg-white/60 backdrop-blur-md p-4 rounded-full shadow-lg text-rose-500 border border-rose-100"
            >
              <Music className="w-6 h-6 animate-pulse" />
            </motion.div>

            {/* Header */}
            <header className="text-center mb-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h2 className="text-6xl md:text-8xl font-handwriting text-rose-600 mb-6">
                  Bizim Hikayemiz
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[1px] w-12 md:w-24 bg-rose-200" />
                  <span className="text-rose-400 font-serif tracking-widest uppercase text-sm">Sonsuza Dek</span>
                  <div className="h-[1px] w-12 md:w-24 bg-rose-200" />
                </div>
              </motion.div>
            </header>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Orta Çizgi */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-rose-200 via-rose-300 to-transparent" />

              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`relative mb-24 flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Nokta/İkon */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-rose-50 shadow-md z-20">
                    <div className="scale-75">{item.icon}</div>
                  </div>

                  {/* Kart */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  } pl-12 md:pl-0`}>
                    <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-[2rem] shadow-xl shadow-rose-100/50 border border-white hover:border-rose-200 transition-all duration-500 hover:-translate-y-2">
                      <span className="inline-block px-4 py-1 rounded-full bg-rose-50 text-rose-500 font-serif text-xs font-bold mb-3">
                        {item.date}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed italic font-light">
                        "{item.description}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <motion.footer 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mt-40 pb-20"
            >
              <div className="inline-block relative">
                <h2 className="text-6xl md:text-8xl font-handwriting text-rose-600 mb-6">
                  Seni Çok Seviyorum!
                </h2>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-6 -right-6"
                >
                  <Heart className="w-10 h-10 text-amber-400 fill-amber-400" />
                </motion.div>
              </div>
              <p className="font-serif text-gray-400 text-xl tracking-widest">
                28.06.2025 • Sonsuza Dek
              </p>
              <div className="flex justify-center mt-10 space-x-3">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="text-rose-400 fill-rose-400 w-6 h-6" />
                ))}
              </div>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}