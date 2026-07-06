import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";

export default function NavigationBar({ activeSection }) {
  const email = "portfolio.arijit@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full h-18 fixed top-0 flex flex-row justify-between items-center px-3 md:px-4 lg:px-6 bg-[#f8f8f8]/50 backdrop-blur-3xl text-#232323] z-[999]">
      {/* Left Section */}

      <div className="flex flex-row items-center gap-3">
        {/* icon */}
        <div className="bg-[#232323] w-12 h-12 rounded-xl flex items-center justify-center">
          <div className="anton-regular text-[#fefefe] text-2xl tracking-wider cursor-pointer">
            AB
          </div>
        </div>
        <div className="px-4 py-2.5 rounded-xl shadow shadow-[0_0px_10px_0px_rgba(0,0,0,1] flex flex-row items-center gap-1">
          <Mail size={14} strokeWidth="1.5" className="mt-0.5" />
          <span className="cabin-sketch-bold text-sm ">
            portfolio.arijit@gmail.com
          </span>

          {/* copy to clipboard */}
          <button
            onClick={handleCopy}
            className={`p-1.5 rounded-lg transition-all duration-300 cursor-pointer ${
              copied
                ? "bg-green-200 text-green-700"
                : "hover:bg-gray-200 text-gray-700"
            }`}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Mid Section */}
      <div className="hidden lg:flex flex-row items-center justify-center gap-8">
        <div className="flex flex-row items-center gap-3 exo text-sm ">
          <div className={`${activeSection === "home" ? "bg-[#d9ed92] text-[#232323] shadow shadow-[0_5px_10px_0px_rgba(0,0,0,0.2)]" : "hover:bg-[#efefef]"} px-5 py-2 rounded-xl cursor-pointer transition-all duration-300`} onClick={() => scrollToSection("home")}>Home</div>
          <div className={`${activeSection === "experience" ? "bg-[#b5e48c] text-[#414e37] shadow shadow-[0_5px_10px_0px_rgba(0,0,0,0.2)]" : "hover:bg-[#efefef]"} px-5 py-2 rounded-xl cursor-pointer transition-all duration-300`} onClick={() => scrollToSection("experience")}>Experience</div>
          <div className={`${activeSection === "work" ? "bg-[#99d98c] text-[#31432d] shadow shadow-[0_5px_10px_0px_rgba(0,0,0,0.2)]" : "hover:bg-[#efefef]"} px-5 py-2 rounded-xl cursor-pointer transition-all duration-300`} onClick={() => scrollToSection("work")}>Work</div>
          <div className={`${activeSection === "about" ? "bg-[#76c893] text-[#ffffff] shadow shadow-[0_5px_10px_0px_rgba(0,0,0,0.2)]" : "hover:bg-[#efefef]"} px-5 py-2 rounded-xl cursor-pointer transition-all duration-300`} onClick={() => scrollToSection("about")}>About Me</div>
        </div>
        <div>
          <div className={`${activeSection === "lets-talk" ? "bg-[#f0f3bd] text-[#232323] shadow shadow-[0_5px_10px_0px_rgba(0,0,0,0.2)]" : "hover:bg-[#efefef]"} px-5 py-2 rounded-xl cursor-pointer transition-all duration-300`} onClick={() => scrollToSection("lets-talk")}>Let's Talk</div>
        </div>
      </div>

      {/* Right Section */}
    </div>
  );
}
