"use client";
import { useState } from "react";
export default function Home(){
  const [isHovered, setIsHovered] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const triggerFadeOut = () => {
    setIsFading(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 500);
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

              {/* 2. Projects Link */}
              <a 
                href="#projects" 
                className="p-3 rounded-full text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 transition-all duration-200 group relative"
                aria-label="Projects"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
                <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 bg-[#1c1b1b] text-xs text-neutral-200 px-2 py-1 rounded border border-neutral-800 transition-all duration-150 shadow-md hidden md:block">
                  projects
                </span>
              </a>

              {/* 3. Blog Link */}
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

              {/* 4. Contact Link (Points to your custom router page anchor) */}
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
            <section id="about" className="scroll-mt-24 space-y-8 relative">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-400 font-semibold">Full-stack developer · IT student · product-focused</p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  Hi, I’m{" "}
                  <span 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative inline-block cursor-pointer text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Chinna
                    {isHovered && (
                      <div className="absolute left-[calc(100%+16px)] top-1/2 -translate-y-1/2 z-50 hidden md:block">
                        <div className="relative">
                          <img 
                            src="/ME.png"
                            alt="Chinna"
                            className="w-32 h-32 max-w-none object-cover rounded-2xl border-2 border-cyan-400/80 shadow-2xl shadow-cyan-900/40"
                          />
                          <div className="absolute top-1/2 -left-1 w-2.5 h-2.5 -translate-y-1/2 rotate-45 bg-cyan-400"></div>
                        </div>
                      </div>
                    )}
                  </span>
                  .
                </h1>
              </div>

              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                <p>
                  I build web products that feel intentional and perform smoothly. As an IT student at TCE, I combine curiosity with practical development experience to create modern interfaces and reliable backend workflows.
                </p>
                <p>
                  My focus is responsive web apps, clean components, and learning software practices that scale beyond a classroom project.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-neutral-300/70 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200">Next.js</span>
                <span className="rounded-full border border-neutral-300/70 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200">React</span>
                <span className="rounded-full border border-neutral-300/70 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200">TypeScript</span>
                <span className="rounded-full border border-neutral-300/70 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200">Tailwind</span>
                <span className="rounded-full border border-neutral-300/70 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200">Node.js</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400">View projects</a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900">Contact me</a>
              </div>
            </section>

            <section id="projects" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Work that shows what I build, not just what I learn.</p>
                </div>
                <span className="text-xs uppercase tracking-[0.35em] text-neutral-400">featured</span>
              </div>

              <div className="grid gap-4">
                <a href="#" className="group block rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 dark:border-neutral-800 dark:bg-[#111010]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-500">Student dashboard</p>
                      <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-neutral-100">Course Planner</h3>
                    </div>
                    <span className="text-xs text-neutral-400">2026</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">A responsive planner for tracking semesters, assignments, and skills. Built with Next.js, Prisma, and Tailwind CSS so students can manage course progress in one place.</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="rounded-full border border-neutral-200 px-2 py-1">Next.js</span>
                    <span className="rounded-full border border-neutral-200 px-2 py-1">Prisma</span>
                    <span className="rounded-full border border-neutral-200 px-2 py-1">TypeScript</span>
                  </div>
                </a>

                <a href="#" className="group block rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 dark:border-neutral-800 dark:bg-[#111010]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-500">UI system</p>
                      <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-neutral-100">Portfolio UI Kit</h3>
                    </div>
                    <span className="text-xs text-neutral-400">2025</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">A reusable component library for personal websites, including dark mode, responsive cards, and accessible typography.</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="rounded-full border border-neutral-200 px-2 py-1">React</span>
                    <span className="rounded-full border border-neutral-200 px-2 py-1">Tailwind</span>
                    <span className="rounded-full border border-neutral-200 px-2 py-1">Storybook</span>
                  </div>
                </a>
              </div>
            </section>

            <section id="experience" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Real internships and product-focused work.</p>
                </div>
                <span className="text-xs uppercase tracking-[0.35em] text-neutral-400">timeline</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-[#111010]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div>
                      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Cyber Security Intern</p>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Agna Business Applications India Pvt. Ltd · Coimbatore</p>
                    </div>
                    <span className="text-xs text-neutral-400">Apr 2025 – May 2025</span>
                  </div>
                  <ul className="mt-4 list-disc pl-5 text-sm leading-6 text-neutral-600 dark:text-neutral-300 space-y-2">
                    <li>Supported security assessments and documented vulnerabilities in web applications.</li>
                    <li>Applied secure coding practices for frontend and backend workflows.</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-[#111010]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div>
                      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Web Development Intern</p>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Meganar Technologies · Madurai</p>
                    </div>
                    <span className="text-xs text-neutral-400">Apr 2023 – May 2023</span>
                  </div>
                  <ul className="mt-4 list-disc pl-5 text-sm leading-6 text-neutral-600 dark:text-neutral-300 space-y-2">
                    <li>Built responsive website features and UI components with HTML, CSS, and JavaScript.</li>
                    <li>Delivered client updates on schedule while collaborating with designers and developers.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="blog" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">Blog</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Short updates on what I’m building and learning.</p>
                </div>
                <span className="text-xs uppercase tracking-[0.35em] text-neutral-400">notes</span>
              </div>

              <div className="grid gap-4">
                <article className="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-[#111010]">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Building a Minimal Portfolio Site</h3>
                    <span className="text-xs text-neutral-400">July 2026</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">Lessons from designing a portfolio that is fast, readable, and easy to maintain across mobile and desktop.</p>
                </article>
                <article className="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-[#111010]">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Why I prefer practical project work</h3>
                    <span className="text-xs text-neutral-400">May 2026</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">A quick reflection on learning by shipping features, not just studying tutorials, and how the best lessons come from real build work.</p>
                </article>
              </div>
            </section>

            <section id="contact" className="scroll-mt-24 space-y-6 pb-12">
              <h2 className="text-xl font-semibold tracking-tight">Connect</h2>
              <p className="max-w-2xl text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Whether you want to collaborate, discuss a project, or share a manga recommendation, I’m happy to connect. I’m especially interested in internships and development opportunities that help me grow as a builder.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm">
                <a href="mailto:chinnakarupusamyg2004@gmail.com" className="rounded-3xl border border-neutral-200 bg-white px-5 py-4 text-neutral-700 transition hover:border-cyan-300 hover:text-cyan-600 dark:border-neutral-800 dark:bg-[#111010] dark:text-neutral-200">Email</a>
                <a href="https://github.com/cksg2004" target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-neutral-200 bg-white px-5 py-4 text-neutral-700 transition hover:border-cyan-300 hover:text-cyan-600 dark:border-neutral-800 dark:bg-[#111010] dark:text-neutral-200">GitHub</a>
                <a href="https://linkedin.com/in/cksg2004" target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-neutral-200 bg-white px-5 py-4 text-neutral-700 transition hover:border-cyan-300 hover:text-cyan-600 dark:border-neutral-800 dark:bg-[#111010] dark:text-neutral-200">LinkedIn</a>
                <a href="https://www.instagram.com/c__k__s?igsh=MWkxdjZjcHo2cDBsaA==" target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-neutral-200 bg-white px-5 py-4 text-neutral-700 transition hover:border-cyan-300 hover:text-cyan-600 dark:border-neutral-800 dark:bg-[#111010] dark:text-neutral-200">Instagram</a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}