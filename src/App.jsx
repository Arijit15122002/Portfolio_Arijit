import Home from "./components/landingPage/Home";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import About from "./components/about/About";
import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import LetsTalk from "./components/connect/LetsTalk";
import { useEffect, useRef, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef(["home", "experience", "work", "about", "lets-talk"]);
  const currentIndexRef = useRef(0);
  const scrollLockRef = useRef(false);
  const wheelIdleTimerRef = useRef(null);
  const swiperHoveredRef = useRef(false);

  // Synchronous setter (a ref updates instantly, unlike state which batches)
  const setSwiperHovered = (val) => {
    swiperHoveredRef.current = val;
  };

  // Keeps activeSection (nav highlighting) + currentIndexRef in sync,
  // but ignores updates while we're mid-programmatic-scroll.
  useEffect(() => {
    const sectionEls = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollLockRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
          const idx = sectionsRef.current.indexOf(visible.target.id);
          if (idx !== -1) currentIndexRef.current = idx;
        }
      },
      { threshold: [0.2, 0.4, 0.6, 0.8] }
    );

    sectionEls.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Single source of truth for "move one section" logic
  const goToSection = (direction) => {
    if (swiperHoveredRef.current) return false;
    if (scrollLockRef.current) return false;

    const sections = sectionsRef.current;
    const current = currentIndexRef.current;
    let nextIndex = current;

    if (direction > 0) nextIndex = Math.min(current + 1, sections.length - 1);
    else if (direction < 0) nextIndex = Math.max(current - 1, 0);

    if (nextIndex === current) return false;

    scrollLockRef.current = true;
    currentIndexRef.current = nextIndex;

    document.getElementById(sections[nextIndex])?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    return true;
  };

  // Desktop / trackpad wheel navigation
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (swiperHoveredRef.current) return;

      // Every wheel tick pushes the idle timer back. The lock only releases
      // once wheel events stop for 300ms — this is what stops one trackpad
      // swipe (which fires many wheel events via inertia) from being read
      // as multiple separate swipes.
      clearTimeout(wheelIdleTimerRef.current);
      wheelIdleTimerRef.current = setTimeout(() => {
        scrollLockRef.current = false;
      }, 300);

      if (scrollLockRef.current) return;

      goToSection(e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Mobile touch navigation
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      if (swiperHoveredRef.current) return;
      if (scrollLockRef.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const threshold = 50;

      if (Math.abs(deltaY) < threshold) return;

      const navigated = goToSection(deltaY > 0 ? 1 : -1);
      if (navigated) {
        setTimeout(() => {
          scrollLockRef.current = false;
        }, 800);
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="h-[100dvh] w-full relative">
      <NavigationBar activeSection={activeSection} />

      <section id="home">
        <Home activeSection={activeSection} />
      </section>

      <section id="experience">
        <Experience setSwiperHovered={setSwiperHovered} />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="lets-talk">
        <LetsTalk />
      </section>
    </div>
  );
}

export default App;