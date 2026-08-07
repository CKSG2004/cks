"use client";
import { useState } from "react";
export default function Home(){
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isFading, setIsFading] = useState(false); // <--- Add this

  // Helper function to handle the smooth fade out
  const triggerFadeOut = () => {
    setIsFading(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 500); // 500ms matches the CSS transition duration
  };
  return(
    <>
      {/* ================= LOGO INTRO OVERLAY ================= */}
      {showIntro && (
        <div 
          className={`fixed inset-0 z-[100] w-screen h-screen flex items-center justify-center bg-[#0d0d0d] overflow-hidden transition-opacity duration-500 ease-out ${
            isFading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Skip Button */}
          <button
            onClick={triggerFadeOut}
            className="absolute top-6 right-6 z-[110] text-xs font-mono text-neutral-400 hover:text-neutral-100 bg-[#1c1b1b]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-800 transition-colors cursor-pointer"
          >
            skip ↗
          </button>

          {/* Fullscreen Zoomed Video */}
          <video
            autoPlay
            muted
            playsInline
            onEnded={triggerFadeOut}
            className="w-full h-full object-cover scale-150 md:scale-125"
          >
            <source src="/logo-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-[#111010] dark:text-neutral-100 antialiased">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row gap-12 lg:gap-24">


          {/* ================= LEFT SIDEBAR (Icon Only Menu) ================= */}
          <aside className="md:w-16 flex-shrink-0 md:sticky md:top-24 h-fit flex justify-center">
            <nav className="flex flex-row md:flex-col gap-6 items-center bg-[#1c1b1b] p-3 rounded-full border border-neutral-800/40 shadow-xl">
              
              {/* 1. About Me Link (Points to top/about section) */}
              <a 
                href="#about" 
                className="p-3 rounded-full text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 transition-all duration-200 group relative"
                aria-label="About Me"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                {/* Tooltip for hover clarity */}
                <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 bg-[#1c1b1b] text-xs text-neutral-200 px-2 py-1 rounded border border-neutral-800 transition-all duration-150 shadow-md hidden md:block">
                  about
                </span>
              </a>

              {/* 2. Blog Link */}
              <a 
                href="#blog" 
                className="p-3 rounded-full text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 transition-all duration-200 group relative"
                aria-label="Blog"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 bg-[#1c1b1b] text-xs text-neutral-200 px-2 py-1 rounded border border-neutral-800 transition-all duration-150 shadow-md hidden md:block">
                  blog
                </span>
              </a>

              {/* 3. Contact Link (Points to your custom router page anchor) */}
              <a 
                href="#contact" 
                className="p-3 rounded-full text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 transition-all duration-200 group relative"
                aria-label="Contact"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 bg-[#1c1b1b] text-xs text-neutral-200 px-2 py-1 rounded border border-neutral-800 transition-all duration-150 shadow-md hidden md:block">
                  contact
                </span>
              </a>

            </nav>
          </aside>


          {/*Right Col: Main content*/}
          <main className="flex-1 space-y-24 max-w-2xl">
                      {/* ================= UPDATED ABOUT SECTION ================= */}
            <section id="about" className="scroll-mt-24 space-y-6 relative">
              
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Hi, I'm{" "}
                <span 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative inline-block cursor-pointer text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Chinna!

                  {/* The popover element is now safely nested inside the target name element */}
                  {isHovered && (
                    <div className="absolute left-[calc(100%+16px)] top-1/2 -translate-y-1/2 z-50 animate-fade-in-right hidden md:block">
                      <img 
                        src="/ME.png"
                        alt="Chinna" 
                        className="w-32 h-32 max-w-none object-cover rounded-2xl border-2 border-cyan-400/80 shadow-2xl shadow-cyan-900/40"
                      />
                      {/* Custom arrow pointing perfectly left at the text */}
                      <div className="absolute top-1/2 -left-1 w-2.5 h-2.5 -translate-y-1/2 rotate-45 bg-cyan-400 z-40"></div>
                    </div>
                  )}
                </span>
              </h1>

              <p id="desc" className="text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                Curious student{" "} <a href="https://tce.edu" target="_blank" rel="noreferrer" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
                @TCE↗
                </a>
                , believes in life long learning, Full Stack Web Developer, Bachelor of Information Technology(2024-27). {" "}
                <button onClick={()=>setIsExpanded(!isExpanded)} className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors ml-1 focus:outline-none">{isExpanded ? "showLess↑" : "showMore↓"}</button>
                {isExpanded && (
                  <span className="block mt-4 space-y-4 animate-fade-in">
                    <span className="block">
                      I live in Sathyamangalam, surrounded by nature, but you can usually find me lost in other worlds. I’m a massive fan of books, manga, manhwa, and anime. While I wouldn’t call myself a professional artist, I love to draw—there’s something incredibly satisfying about bringing an idea to life on a blank page.
                    </span>
                    <span className="block">
                      Honestly, I never really thought about how drawing or reading connects to my career path, but looking at it now, it makes sense. IT is just another way of building things from scratch. Instead of using ink and paper, I use code, data, and logic to solve puzzles and build systems.
                    </span>
                    <span className="block">
                      Currently, I’m navigating my undergraduate degree in Information Technology. I’m focused on learning how the digital world works behind the scenes, and I’m looking for opportunities where I can apply my problem-solving skills to real-world tech challenges.
                    </span>
                    <span className="block">
                      When I'm not studying or debugging, I'm probably catching up on my reading list or working on a new sketch. Let’s connect!
                    </span>
                  </span>
                )}
              </p>
              
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
                github ↗
              </a>
            </section>
            {/*Projects*/}
            <section id="projects" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
              <div className="grid gap-2">
                <a href="#" className="block p-4 -mx-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1c1b1b] transition-colors">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium">Project One</h3>
                    <span className="text-xs text-neutral-400 font-mono">2026</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">A high-performance minimalist application.</p>
                </a>
              </div>
            </section>
            {/*Experience*/}
            <section id="experience" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
              <div className="border-l border-neutral-200 dark:border-neutral-800 pl-4 space-y-1">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Cyber Security Interen</span>
                    <span className="text-neutral-400 font-mono text-xs">April 2025–May 2025</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-0.5">Agna Business Applications India Pvt. Ltd - Coimbatore</p>
                </div>
              </div>
              <div className="border-l border-neutral-200 dark:border-neutral-800 pl-4 space-y-1">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Web Development Intern</span>
                    <span className="text-neutral-400 font-mono text-xs">April 2023–May 2023</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-0.5">Meganar Technologies - Madurai</p>
                </div>
              </div>
            </section>
            {/*Blog*/}
            <section id="blog" className="scroll-mt-24 space-y-6">
              <h2 className="text-xl font-semibold tracking-tight">Blog</h2>
              <div className="blog group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <span className="font-medium text-neutral-800 dark:text-neutral-200 group-hover:underline">
                    Building a Minimalist Portfolio Site
                  </span>
                  <span className="text-xs text-neutral-400 font-mono whitespace-nowrap">July 2026</span>
                  </div>
              </div>
            </section>
            {/*Contact*/}
            <section id="contact" className="scroll-mt-24 space-y-6 pb-12">
              <h2 className="text-xl font-semibold tracking-tight">Connect!!</h2>
              <p className="text-sm text-neutral-400 leading-reading">
                Feel free reach out guyzz, be it related to tech or some fun manga or anime or anything...
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <a href="mailto:chinnakarupusamyg2004@gmail.com" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
                  email ↗
                </a>
                <a href="https://github.com/cksg2004" target="_blank" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
                  github ↗
                </a>
                <a href="https://linkedin.com/in/cksg2004" target="_blank" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
                  linkedin ↗
                </a>
                <a href="https://www.instagram.com/c__k__s?igsh=MWkxdjZjcHo2cDBsaA==" target="_blank" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
                  instagram ↗
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}