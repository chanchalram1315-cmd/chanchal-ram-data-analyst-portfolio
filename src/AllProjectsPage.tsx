import { ArrowUpRight } from 'lucide-react';
import { usePortfolio } from './hooks/usePortfolio';

export default function AllProjectsPage() {
  const { projects, profile } = usePortfolio();

  return (
    <main className="min-h-screen bg-[#0C0C0C] px-5 py-6 text-[#D7E2EA] sm:px-8 sm:py-8 md:px-10 md:py-10">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a href="/#projects" className="text-xs font-medium uppercase tracking-[0.25em] text-[#D7E2EA]/70 hover:text-[#D7E2EA]">
          ← Back to portfolio
        </a>
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#D7E2EA]/50">
          {profile.name}
        </span>
      </header>

      <section className="mx-auto max-w-6xl py-16 sm:py-20 md:py-28">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/60">Selected work</p>
        <h1 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 11vw, 10rem)' }}>
          All Projects
        </h1>
        <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-[#D7E2EA]/70 sm:text-lg">
          Data analysis projects built with SQL, Power BI, Excel, Python, and visualization tools.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-[30px] border border-[#D7E2EA]/20 bg-[#111111] sm:rounded-[40px]">
              {project.image ? (
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover sm:h-64" />
              ) : null}
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/55">{project.subtitle}</p>
                <h2 className="text-2xl font-medium text-[#D7E2EA] sm:text-3xl">{project.title}</h2>
                <p className="font-light leading-relaxed text-[#D7E2EA]/70">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-[#D7E2EA]/50 px-5 py-3 text-xs font-medium uppercase tracking-widest transition hover:bg-[#D7E2EA] hover:text-[#0C0C0C]"
                >
                  View project <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
