"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const surprises = [
  "Seni çok seviyorum çünkü güzel kalplisin ❤️",
  "Seni çok seviyorum çünkü gülüşüne eriyorum ❤️",
  "Seni çok seviyorum çünkü yanımdayken mutluyum ❤️",
  "Seni çok seviyorum çünkü hayatımın anlamısın ❤️",
  "Seni çok seviyorum çünkü hep yanımda oluyorsun ❤️",
  "Seni çok seviyorum çünkü sen benim her şeyimsin ❤️",
  "Seni çok seviyorum çünkü seninle her şey daha güzel ❤️",
  "Seni çok seviyorum çünkü sen benim en büyük şansımsın ❤️",
];

export default function HeartSurpriseGame() {
  const [activeSurprise, setActiveSurprise] = useState<number | null>(null);

  // Kalplerin pozisyonlarını sadece bir kez hesaplıyoruz
  const hearts = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        top: 10 + Math.random() * 80,
        left: 10 + Math.random() * 80,
      })),
    []
  );

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] bg-pink-50 flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Kalpler */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute cursor-pointer"
          style={{ top: `${heart.top}%`, left: `${heart.left}%` }}
          whileHover={{ scale: 1.3 }}
          onClick={() => setActiveSurprise(heart.id)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Heart className="h-10 w-10 text-rose-500 fill-rose-400 drop-shadow-lg" />
        </motion.div>
      ))}

      {/* Sürpriz mesaj */}
      <AnimatePresence>
        {activeSurprise !== null && (
          <motion.div
            key={activeSurprise}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 z-50 max-w-xs -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white/90 p-6 text-center shadow-2xl backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="mx-auto mb-3 h-10 w-10 fill-amber-300 text-amber-300 animate-spin-slow" />
            </motion.div>

            <p className="font-serif text-lg text-slate-800">
              {surprises[activeSurprise % surprises.length]}
            </p>

            <button
              onClick={() => setActiveSurprise(null)}
              className="mt-4 px-4 py-2 rounded-full bg-rose-500 text-white font-bold hover:scale-105 transition-transform"
            >
              Kapat 💖
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}