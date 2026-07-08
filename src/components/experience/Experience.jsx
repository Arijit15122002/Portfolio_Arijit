import { useRef, useState, useLayoutEffect } from "react";
import { ArrowRightIcon, Laptop2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import { Slide1, Slide2, Slide3, Slide4 } from "./Slides";

const SLIDE_COUNT = 4;

/** Tracks the active Swiper slide and animates a glowing dot along the track */
function SlideIndicator({ activeIndex, total, onDotClick }) {
  const containerRef = useRef(null);
  const dotRefs = useRef([]);
  const [dotTop, setDotTop] = useState(0);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const target = dotRefs.current[activeIndex];
      if (!container || !target) return;

      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const top = targetRect.top - containerRect.top + targetRect.height / 2;

      setDotTop(top);
      setReady(true);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex, total]);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          {i !== 0 && <div className="w-[2px] h-10 sm:h-16 bg-neutral-300" />}
          <button
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => onDotClick?.(i)}
            ref={(el) => (dotRefs.current[i] = el)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
              i === activeIndex ? "bg-lime-400/30" : "bg-neutral-300"
            }`}
          />
        </div>
      ))}

      {/* Floating dot that glides to the active stop */}
      {ready && (
        <motion.div
          className="absolute left-1/2 w-3 h-3 rounded-full bg-lime-400 pointer-events-none"
          style={{
            marginLeft: "-6px",
            boxShadow: "0 0 8px 2px rgba(163, 230, 53, 0.7)",
          }}
          animate={{ top: dotTop - 6 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        />
      )}

      {/* Ripple pulse on change */}
      {ready && (
        <motion.div
          key={activeIndex}
          className="absolute left-1/2 w-3 h-3 rounded-full bg-lime-400 pointer-events-none"
          style={{ marginLeft: "-6px", top: dotTop - 6 }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </div>
  );
}

export default function Experience({ carouselRef }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="w-full h-[100svh] pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-4 lg:px-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
      {/* Left Card */}
      <div className="w-full md:w-1/2 flex flex-col justify-end items-center gap-6">
        <div className="w-full flex justify-center md:block md:w-auto">
          <div className="relative w-full max-w-[420px] md:min-w-[400px] aspect-[420/300]">
            {/* Right Shape */}
            <div
              className="absolute bg-[#f0f3bd]"
              style={{
                left: "61.9%",
                top: 0,
                width: "38.1%",
                height: "100%",
                borderRadius: "36px 36px 36px 0",
              }}
            />
            {/* Left Shape */}
            <div
              className="absolute bg-[#f0f3bd]"
              style={{
                left: 0,
                top: "23.33%",
                width: "61.9%",
                height: "76.67%",
                borderRadius: "36px 0 0 36px",
              }}
            />
            {/* Bridge */}
            <svg
              className="absolute pointer-events-none"
              style={{
                left: "53.33%",
                top: "11.33%",
                width: "8.57%",
                height: "12%",
              }}
              viewBox="-36 0 36 36"
              preserveAspectRatio="none"
            >
              <path d="M 0 0 C 0 27 -7.2 36 -36 36 H 0 Z" fill="#f0f3bd" />
            </svg>

            <div className="absolute top-0 left-0 px-6 sm:px-8 md:px-10 py-3 sm:py-4 flex flex-row items-center gap-2 sm:gap-3">
              <Laptop2
                className="h-4 w-4 sm:h-5 sm:w-5 mt-1"
                strokeWidth={1.5}
              />
              <div className="text-base sm:text-lg exo tracking-wider">
                EXPERIENCE
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/biswas2002/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="absolute right-0 top-0 flex flex-row items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-4 sm:py-5">
                <FaLinkedin size={28} className="sm:hidden" />
                <FaLinkedin size={35} className="hidden sm:block" />
                <ArrowRightIcon size={20} className="sm:hidden" />
                <ArrowRightIcon size={24} className="hidden sm:block" />
              </div>
            </a>

            <div className="absolute top-[28%] left-[5%] right-[5%] font-semibold text-[#3e3e30] exo">
              <div className="text-base sm:text-sm md:text-md lg:text-lg">
                Software Development Engineer
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <div className="text-xs sm:text-sm">
                  Tata Consultancy Services
                </div>
                <div className="text-[10px] sm:text-xs sm:pr-[5%] text-[#64644e]">
                  April 2025 - Present
                </div>
              </div>
              <div className="text-[10px] sm:text-xs mt-3 sm:mt-5 leading-relaxed">
                As a Software Engineer at Tata Consultancy Services, I
                contribute to enterprise integration platforms serving one of
                the UK's largest retail organizations. I design Azure-based
                backend solutions, optimize distributed application workflows,
                and build AI-assisted automation that improves engineering
                efficiency.
              </div>
            </div>
          </div>
        </div>

        {/* Carousel + its own indicator, side by side, mobile only */}
        <div className="flex w-full items-center justify-center gap-4">
          <div
            ref={carouselRef}
            className="h-64 w-full max-w-[500px] rounded-xl cursor-pointer"
          >
            <Swiper
              onSwiper={(instance) => (swiperRef.current = instance)}
              onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
              direction="vertical"
              slidesPerView={1}
              spaceBetween={40}
              modules={[Mousewheel]}
              speed={800}
              mousewheel={{
                enabled: true,
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 0.4,
                thresholdDelta: 50,
                thresholdTime: 500,
              }}
              resistance={true}
              resistanceRatio={1.5}
              longSwipes={false}
              shortSwipes={true}
              followFinger={false}
              className="w-full h-full"
            >
              <SwiperSlide>
                <Slide1 />
              </SwiperSlide>
              <SwiperSlide>
                <Slide2 />
              </SwiperSlide>
              <SwiperSlide>
                <Slide3 />
              </SwiperSlide>
              <SwiperSlide>
                <Slide4 />
              </SwiperSlide>
            </Swiper>
          </div>

          <SlideIndicator
            activeIndex={activeIndex}
            total={SLIDE_COUNT}
            onDotClick={(i) => swiperRef.current?.slideTo(i)}
          />
        </div>
      </div>

      {/* Right Card — desktop only, same swiper synced indicator */}
      <div className="hidden md:flex w-1/2 h-full items-center px-4">
        <div
          className="relative w-[clamp(320px,30vw,600px)] aspect-[280/350]"
          style={{ "--card-w": "clamp(320px, 30vw, 600px)" }}
        >
          <div
            className="absolute top-0 left-0 w-[280px] h-[350px] origin-top-left"
            style={{ transform: "scale(calc(var(--card-w) / 280px))" }}
          >
            {/* Shape 1 */}
            <div className="absolute left-0 top-[49px] w-[280px] h-[200px] bg-[#c1db87] rounded-[0px_30px_0px_30px]" />

            {/* Shape 2 */}
            <div className="absolute left-0 top-0 w-[220px] h-[50px] bg-[#c1db87] rounded-[30px_30px_0px_0px]" />

            {/* Shape 3 */}
            <div className="absolute left-[50px] top-[245px] w-[230px] h-[100px] bg-[#c1db87] rounded-[0px_0px_30px_30px]" />

            {/* Bridge 1 */}
            <svg
              className="absolute left-[218px] top-[20px] w-[30px] h-[30px] pointer-events-none"
              viewBox="0 0 30 30"
              preserveAspectRatio="none"
            >
              <path d="M 0 0 C 0 22.5 6 30 30 30 H 0 Z" fill="#c1db87" />
            </svg>

            {/* Bridge 2 */}
            <svg
              className="absolute left-[21px] top-[248px] w-[30px] h-[30px] pointer-events-none"
              viewBox="-30 -30 30 30"
              preserveAspectRatio="none"
            >
              <path d="M 0 0 C 0 -22.5 -6 -30 -30 -30 H 0 Z" fill="#c1db87" />
            </svg>

            <div className="absolute inset-0 z-10 p-5">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
