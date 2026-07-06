import { ArrowBigDown, Download, Mail, MoveDown, MoveRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Home({ activeSection }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    amount: 0.5,
    once: false, // explicit: retrigger every time it enters/leaves
  });

  const cardControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      cardControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      });

      imageControls.start({
        y: 0,
        opacity: 1,
        transition: { delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      });
    } else {
      cardControls.set({ x: 600, opacity: 0 });
      imageControls.set({ y: 300, opacity: 0 });
    }
  }, [isInView, cardControls, imageControls]);

  return (
    <div ref={cardRef} className="pt-20 px-5 md:px-10 w-full h-[100dvh] flex items-center justify-center overflow-x-hidden">
      <div className="w-full md:w-[90%] flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-6">
        <div className="w-full h-full flex flex-col gap-18 items-center justify-center text-[#232323]">
          <div className="flex flex-col items-end tracking-wider">
            <div className="text-9xl font-bold smooch tracking-widest">
              Hello!
            </div>
            <div className="text-sm smooch font-bold">
              - it's Arijit, a Software Wizard
            </div>
          </div>

          <div className="hidden md:flex flex-row w-full justify-between px-10">
            <div
              className="px-4 py-2 rounded-xl cursor-pointer"
              onClick={() => scrollToSection("experience")}
            >
              <div className="text-3xl smooch">Experience</div>
              <div className="font-bold">1+</div>
            </div>
            <div
              className="px-4 py-2 rounded-xl cursor-pointer"
              onClick={() => scrollToSection("work")}
            >
              <div className="text-3xl smooch">Projects</div>
              <div className="font-bold">10+</div>
            </div>
            <div
              className="px-4 py-2 rounded-xl cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <div className="text-3xl smooch">Skills</div>
              <div className="font-bold">37+</div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-row items-center gap-1 rounded-xl px-5 py-2 exo text-xs text-[#232323] cursor-pointer">
              <div onClick={() => scrollToSection("experience")}>SCROLL DOWN</div>
              <MoveDown size={16} />
          </div>
        </div>

        <motion.div
          className="relative w-full sm:min-w-[300px] md:min-w-[400px] lg:max-w-[480px] aspect-[480/490] overflow-hidden flex flex-row justify-center items-center"
          initial={{ x: 600, opacity: 0 }}
        animate={cardControls}
        >
          <div className="relative w-full max-w-[480px] aspect-[480/490] overflow-hidden">
            {/* Shape 1 */}
            <div className="absolute top-0 left-0 w-[83.333%] h-full rounded-[32px] bg-[#fefb59]" />

            {/* Shape 2 */}
            <div className="absolute left-[83.333%] top-[30.61%] w-[16.667%] h-[53.061%] rounded-r-[32px] bg-[#fefb59]" />

            {/* Bridge 1 */}
            <svg
              className="absolute left-[83.333%] top-[24.08%] w-[6.667%] h-[6.531%] pointer-events-none"
              viewBox="0 0 32 32"
              preserveAspectRatio="none"
            >
              <path d="M 0 0 C 0 24 6.4 32 32 32 H 0 Z" fill="#fefb59" />
            </svg>

            {/* Bridge 2 */}
            <svg
              className="absolute left-[83.333%] top-[83.673%] w-[6.667%] h-[6.531%] pointer-events-none"
              viewBox="0 -32 32 32"
              preserveAspectRatio="none"
            >
              <path d="M 0 0 C 0 -24 6.4 -32 32 -32 H 0 Z" fill="#fefb59" />
            </svg>

            <motion.div
              className="absolute bottom-0 left-[0.2%] h-[90%] w-[80%]"
              initial={{ y: 300, opacity: 0 }}
            animate={imageControls}
            >
              <img
                src="/portfolio_anime_bgremoved.png"
                alt="Portfolio Anime"
                className="h-full w-full object-contain object-bottom"
              />
            </motion.div>

            {/* Bottom Button */}
            <div className="absolute bottom-[3%] right-[3%]">
              <div className="p-3 rounded-2xl bg-[#232323] hover:scale-110 transition-all duration-300 cursor-pointer">
                <MoveRight strokeWidth={3} className="text-white" />
              </div>
            </div>

            {/* Top Button */}
            <div className="absolute top-[17%] right-[3%]">
              <div className="p-3 rounded-2xl bg-[#d9ed92] hover:scale-110 transition-all duration-300 cursor-pointer">
                <Mail strokeWidth={2} className="text-[#232323]" />
              </div>
            </div>

            <div className="absolute top-[3%] left-[5%] flex flex-col items-end">
              <div className="anton-regular text-[#232323] text-3xl tracking-widest font-bold">
                Beyond the Code
              </div>
              <div className="text-xs font-bold antonio"> - Arijit</div>
            </div>
          </div>
        </motion.div>
        <div className=""></div>
      </div>
    </div>
  );
}
