import { ArrowRightIcon, Laptop2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import { Slide1, Slide2, Slide3, Slide4 } from "./Slides";

export default function Experience({ setSwiperHovered }) {
  return (
    <section className="min-h-screen w-full pt-24 px-5 md:px-10 flex flex-row items-center justify-center gap-10">
      {/* Left Card */}
      <div className="w-full h-auto flex flex-col md:flex-row items-center gap-6">
        <div>
          <div className="relative min-w-[400px] max-w-[420px] aspect-[420/300]">
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

            <div className="absolute top-0 left-0 px-10 py-4 flex flex-row items-center gap-3">
              {/* <img src="/freelancer.png" alt="" className="h-10 w-10"/> */}
              <Laptop2 className="h-5 w-5 mt-1" strokeWidth={1.5} />
              <div className="text-lg exo tracking-wider">EXPERIENCE</div>
            </div>

            <a href="https://www.linkedin.com/in/biswas2002/" target="_blank">
              <div className="absolute right-0 top-0 flex flex-row items-center gap-3 px-8 py-5">
                <FaLinkedin size={35} />
                <ArrowRightIcon size={24} />
              </div>
            </a>

            <div className="absolute top-[28%] left-[5%] font-semibold text-[#3e3e30] exo">
              <div className="text-lg">Software Development Engineer</div>
              <div className="flex flex-row justify-between">
                <div className="text-sm">Tata Consultancy Services</div>
                <div className="text-xs pr-[5%] text-[#64644e]">
                  April 2025 - Present
                </div>
              </div>
              <div className="text-xs mt-5">
                As a Software Engineer at Tata Consultancy Services, I
                contribute to enterprise integration platforms serving one of
                the UK's largest retail organizations. I design Azure-based
                backend solutions, optimize distributed application workflows,
                and build AI-assisted automation that improves engineering
                efficiency. Every project has reinforced my passion for creating
                scalable, reliable, and intelligent software systems.
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex md:hidden h-52 w-[70%] max-w-[500px] rounded-xl"
          onMouseEnter={() => setSwiperHovered(true)}
          onMouseLeave={() => setSwiperHovered(false)}
          onTouchStart={() => setSwiperHovered(true)}
          onTouchEnd={() => setSwiperHovered(false)}
        >
          <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={40}
            modules={[Mousewheel, Scrollbar]}
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
            scrollbar={{
              draggable: true,
              hide: false,
            }}
            className="w-full h-full"
          >
            <SwiperSlide className="">
              <Slide1 />
            </SwiperSlide>

            <SwiperSlide>
              <Slide2/>
            </SwiperSlide>

            <SwiperSlide>
              <Slide3 />
            </SwiperSlide>

            <SwiperSlide>
              <Slide4 />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Right Card */}
      <div className="w-auto flex flex-row items-center">
        <div className="hidden md:flex h-52 w-[70%] min-w-[250px] max-w-[500px] bg-[#232323]"></div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold tracking-widest">2025</span>

          <div className="w-[2px] h-16 bg-neutral-300" />

          <div className="w-3 h-3 rounded-full bg-lime-400" />

          <div className="w-[2px] h-16 bg-neutral-300" />

          <div className="w-3 h-3 rounded-full bg-neutral-300" />

          <div className="w-[2px] h-16 bg-neutral-300" />

          <div className="w-3 h-3 rounded-full bg-neutral-300" />

          <div className="w-[2px] h-16 bg-neutral-300" />

          <div className="w-3 h-3 rounded-full bg-neutral-300" />

          <div className="w-[2px] h-16 bg-neutral-300" />

          <span className="text-xs font-semibold">Present</span>
        </div>
      </div>
    </section>
  );
}
