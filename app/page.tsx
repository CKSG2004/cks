export default function Home(){
  return(
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-[#111010] dark:text-neutral-100 anatialiased">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row gap-12 lg:gap-24">
        {/*Left Col: side menu*/}
        <aside className="md:w-56 flex-shrink-0 md:sticky md:top-24 h-fit">
          <nav className="flex flex-col gap-8 border-l border-neutral-200 dark:border-neutral-800 pl-6">
            {/*About*/}
            <div>
              <a href="#about" className="font-medium tracking-tight hover:text-neutral-500 transition-colors">about me</a>
              <ul className="mt-3 ml-2 space-y-2 border-l border-neutral-200 dark-border-neutral-800 pl-4 text-sm text-neutral-500">
                <li><a href="#desc" className="hover:text-neutral-900 dark:hover:text-neutral-200">description</a></li>
                <li><a href="#projects" className="hover:text-neutral-900 dark:hover:text-neutral-200">projects</a></li>
                <li><a href="#experience" className="hover:text-neutral-900 dark:hover:text-neutral-200">experience</a></li>
              </ul>
            </div>
            {/*Blog*/}
            <div>
              <a href="#blog" className="font-medium tracking-tight hover:text-neutral-500 transition-colors">blog</a>
            </div>
            {/*Contact*/}
            <div>
              <span className="font-medium tracking-tight">contact</span>
              <ul className="mt-3 ml-2 space-y-2 border-l border-neutral-200 dark:border-neutral-800 pl-4 text-sm text-neutral-500">
                <li><a href="mailto:chinnakarupusamyg2004@gmail.com" className="hover:text-neutral-900 dar:hover:text-neutral-200">email</a></li>
                <li><a href="https://github.com/cksg2004" className="hover:text-neutral-900 dar:hover:text-neutral-200">github</a></li>
              </ul>
            </div>
          </nav>
        </aside>
        {/*Right Col: Main content*/}
        <main className="flex-1 space-y-24 max-w-2xl">
          <section id="about" className="scroll-mt-24 space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">cks</h1>
            <p id="#desc" className="text:neutral-600 dark:text-neutral-300 leading-relaxed">
              🙋🏻‍♂️ Guys!!, I am chinna from 📍sathyamangalam. dumb🫨, playfull😊, careless😓, curious🌅, obscure🕵🏻 human 😂😂...
            </p>
          </section>
          {/*Projects*/}
          <section id="projects" className="scroll-mt-24 space-y-6">
            <h2 className="text-xl font-semibold tracking-tight">projects</h2>
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
            <h2 className="text-xl font-semibold tracking-tight">experience</h2>
            <div className="border-l border-neutral-200 dark:border-neutral-800 pl-4 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Developer</span>
                <span className="text-neutral-400 font-mono text-xs">Present</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}