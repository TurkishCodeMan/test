// src/app/page.tsx
"use client";

import { useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Cake,
  Calendar,
  Camera,
  Gift,
  Heart,
  MapPin,
  Music,
  Play,
  Sparkles,
  Star,
} from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    date: "5 Mart 2022",
    title: "İlk Karşılaşma",
    description:
      "Okul bahçesinde geçerken bana selam verdin... O an dünyam değişti, kalbim ilk defa bu kadar güzel heyecanlandı.",
    icon: <Heart className="h-5 w-5 text-rose-500 fill-rose-500" />,
  },
  {
    date: "Tanışmamızdan Sonra",
    title: "İlk Randevu",
    description:
      "Seni üniversitedeki o kafeye davet ettim. Çay içerken kalbim yerinden çıkacak gibiydi; çünkü karşımda hayatımın en güzel hikayesi duruyordu.",
    icon: <Calendar className="h-5 w-5 text-rose-500" />,
  },
  {
    date: "14 Haziran 2022",
    title: "Mezuniyet",
    description:
      "Bir dönemi birlikte kapattık, yeni hayatımıza el ele adım attık. O gün gururum da mutluluğum da seninle çoğaldı.",
    icon: <Star className="h-5 w-5 text-amber-400 fill-amber-400" />,
  },
  {
    date: "29 Haziran 2024",
    title: "Nişanlandık",
    description:
      "Sonsuzluğa giden yolda ilk resmi adımımız... O yüzük sadece parmağına değil, kalbimin en kıymetli yerine takıldı.",
    icon: <Heart className="h-5 w-5 text-rose-500 fill-rose-500" />,
  },
   {
    date: "28 Haziran 2025",
    title: "Evlendik!",
    description:
      "Hayatımın en güzel günü... Seninle bir ömre ‘Evet’ dediğim an, bütün dualarımın cevabı oldun.",
    icon: <Heart className="h-5 w-5 text-rose-500 fill-rose-500" />,
  },
  {
    date: "Temmuz 2025",
    title: "İstanbul Turu",
    description:
      "İstanbul'un büyüleyici sokaklarında ellerimiz kenetli gezdik. Şehir güzeldi ama sen yanımdayken her yer masal gibiydi.",
    icon: <MapPin className="h-5 w-5 text-rose-500" />,
  },
  {
    date: "Eylül 2025",
    title: "Tatil Rüyası",
    description:
      "Denizin, güneşin ve huzurun tadını birlikte çıkardık. En güzel manzaram, her zaman senin gülüşündü.",
    icon: <Camera className="h-5 w-5 text-rose-500" />,
  },
 
];

const reasons = [
  "Gülüşün evimin ışığı olduğu için",
  "En zor günlerimi bile yumuşacık yaptığın için",
  "Yanımda olduğunda her şey daha anlamlı olduğu için",
  "Kalbime her gün yeniden iyi geldiğin için",
];

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        size: 12 + ((i * 7) % 18),
        duration: 9 + (i % 6),
        delay: (i % 8) * 0.6,
        opacity: 0.16 + (i % 5) * 0.04,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-60px] text-rose-300"
          style={{ left: heart.left, opacity: heart.opacity }}
          animate={{
            y: [0, -900],
            x: [0, heart.id % 2 ? 35 : -35],
            rotate: [0, 18, -18, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          <Heart
            style={{ width: heart.size, height: heart.size }}
            className="fill-current"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startExperience = () => {
    setIsStarted(true);

    audioRef.current?.play().catch((error) => {
      console.error("Müzik çalınamadı:", error);
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#ffe4ec_0%,transparent_34%),linear-gradient(135deg,#fff7fb_0%,#fff1f2_42%,#fffaf0_100%)] text-slate-800">
      <audio ref={audioRef} src="/muzik.mp3" preload="auto" loop />

      <FloatingHearts />

      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.42)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.42)_1px,transparent_1px)] bg-[size:46px_46px] opacity-30" />

      <AnimatePresence mode="wait">
        {!isStarted ? (
          <motion.section
            key="overlay"
            exit={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
            transition={{ duration: 0.75 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_top,#fff_0%,#fff1f5_45%,#ffe4e6_100%)] px-5"
          >
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/65 p-8 text-center shadow-[0_30px_100px_rgba(244,63,94,.28)] backdrop-blur-xl md:p-12"
            >
              <div className="absolute -left-20 -top-20 h-44 w-44 rounded-full bg-rose-200/50 blur-3xl" />
              <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-amber-200/55 blur-3xl" />

              <motion.div
                animate={{ rotate: [-4, 4, -4], scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  ease: "easeInOut",
                }}
                className="relative mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-2xl shadow-rose-300"
              >
                <Gift className="h-14 w-14 text-white" />
                <Sparkles className="absolute -right-2 -top-2 h-8 w-8 text-amber-300 fill-amber-300" />
              </motion.div>

              <p className="relative mb-3 font-serif text-sm uppercase tracking-[0.35em] text-rose-400">
                Hayatımın en güzel kadınına
              </p>

              <h1 className="relative text-5xl font-black leading-tight text-rose-600 drop-shadow-sm md:text-7xl">
                İyi ki doğdun Hilalimmm
              </h1>

              <p className="relative mx-auto mt-5 max-w-xl font-serif text-lg leading-8 text-slate-600 md:text-xl">
                Bu sadece bir sayfa değil; ilk selamından bugüne, kalbimde
                biriktirdiğim bütün güzel anların küçük bir hediyesi.
              </p>

              <button
                onClick={startExperience}
                className="group relative mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 px-9 py-4 font-serif text-lg font-bold text-white shadow-2xl shadow-rose-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-rose-400"
              >
                <Play className="h-5 w-5 fill-current transition-transform group-hover:scale-125" />
                Hediyeni Aç ❤️
              </button>
            </motion.div>
          </motion.section>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-3 text-rose-500 shadow-xl backdrop-blur-md"
            >
              <Music className="h-5 w-5 animate-bounce" />
              <span className="hidden font-serif text-sm font-bold sm:inline">
                Şarkımız çalıyor
              </span>
            </motion.div>

            <section className="container mx-auto px-5 pb-16 pt-20 md:pt-28">
              <header className="mx-auto max-w-5xl text-center">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-5 py-2 font-serif text-sm font-bold text-rose-500 shadow-lg shadow-rose-100 backdrop-blur"
                >
                  <Cake className="h-4 w-4" />
                  Bugün senin günün, ama şükür sebebim her gün sensin
                </motion.div>

                <motion.h2
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-8xl"
                >
                  Bizim en güzel
                  <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 bg-clip-text text-transparent">
                    hikayemiz
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mx-auto mt-7 max-w-3xl font-serif text-xl leading-9 text-slate-600"
                >
                  Sen hayatıma girdiğinden beri sıradan günler bile bayram gibi.
                  Bu sayfa, sana her baktığımda içimden geçen cümlenin hali:
                  İyi ki varsın, iyi ki benim eşimsin.
                </motion.p>
              </header>

              <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-3xl border border-white/70 bg-white/65 p-5 text-center shadow-xl shadow-rose-100/70 backdrop-blur-md"
                  >
                    <Heart className="mx-auto mb-3 h-7 w-7 fill-rose-400 text-rose-400" />
                    <p className="font-serif text-sm leading-6 text-slate-600">
                      {reason}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="container mx-auto px-5 py-14">
              <div className="relative mx-auto max-w-4xl">
                <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-rose-300 to-transparent md:left-1/2" />

                {timelineData.map((item, index) => (
                  <motion.article
                    key={`${item.date}-${item.title}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-90px" }}
                    transition={{ duration: 0.7 }}
                    className={`relative mb-12 flex md:mb-16 ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <div className="absolute left-5 top-8 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl shadow-rose-200 md:left-1/2">
                      {item.icon}
                    </div>

                    <div
                      className={`ml-14 w-full md:ml-0 md:w-[45%] ${
                        index % 2 === 0 ? "md:pr-5" : "md:pl-5"
                      }`}
                    >
                      <div className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-2xl shadow-rose-100/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-rose-200">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300" />

                        <span className="inline-flex rounded-full bg-rose-50 px-3 py-1 font-serif text-xs font-bold uppercase tracking-widest text-rose-500">
                          {item.date}
                        </span>

                        <h3 className="mt-4 text-2xl font-black text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-3 font-serif text-[15px] leading-8 text-slate-600">
                          “{item.description}”
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

<section className="container mx-auto px-5 py-10">
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 p-1 shadow-[0_30px_90px_rgba(244,63,94,.35)]"
  >
    <div className="rounded-[2.3rem] bg-white/90 p-8 text-center backdrop-blur md:p-14">
      <Sparkles className="mx-auto mb-5 h-10 w-10 fill-amber-300 text-amber-300" />

      <h2 className="text-4xl font-black text-slate-900 md:text-6xl">
        Sana küçük bir sözüm var
      </h2>

      <p className="mx-auto mt-6 max-w-3xl font-serif text-xl leading-9 text-slate-600">
        Hilalcik, yeni yaşında da, bütün yaşlarında da; elini tutan, gözlerine
        aynı heyecanla bakan, seni her gün yeniden seçen kişi ben olacağım.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {[
          "Hep biz olmaya, hep sımsıkı olmaya",
          "Hüseyin ❤️ Hilal",
          "Sonsuz LLM teknik desteği",
          "Sonsuz ev desteği",
          "Hayatın her anında her zaman sımsıkı olma sözü",
        ].map((word) => (
          <span
            key={word}
            className="rounded-full bg-rose-50 px-5 py-2 font-serif font-bold text-rose-500"
          >
            {word} ❤️
          </span>
        ))}
      </div>
    </div>
  </motion.div>
</section>
            <footer className="px-5 pb-24 pt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-black text-rose-600 md:text-7xl">
                  Seni çok seviyorum!
                </h2>

                <p className="mt-5 font-serif text-xl leading-8 text-slate-600">
                  Nice doğum günlerine, nice kahkahalara, nice “biz” olan güzel
                  sabahlara...
                </p>

                <div className="mt-9 flex justify-center gap-2">
                  {[...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0], scale: [1, 1.15, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.7,
                        delay: i * 0.12,
                      }}
                    >
                      <Heart className="h-7 w-7 fill-rose-400 text-rose-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}