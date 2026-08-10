import { education, skillList, workProcess } from "../data/skills";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-line px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-condensed text-3xl uppercase tracking-tight sm:text-4xl">
            Educación <span className="text-accent">&amp; Habilidades</span>
          </h2>

          <div className="mt-8 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-accent">Educación</p>
            {education.map((e) => (
              <div
                key={e.title}
                className="flex items-baseline justify-between gap-4 border-b border-line pb-3 text-sm"
              >
                <span className="text-paper/90">{e.title}</span>
                <span className="shrink-0 text-xs text-paper/40">{e.org}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.14em] text-accent">Habilidades</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="glass glass-hover px-3 py-1.5 text-[11px] uppercase tracking-wide text-paper/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-condensed text-3xl uppercase tracking-tight sm:text-4xl">
            Proceso <span className="text-accent">de Trabajo</span>
          </h2>

          <div className="mt-8 space-y-4">
            {workProcess.map((step) => (
              <div
                key={step.number}
                className="glass glass-hover flex gap-5 p-4"
              >
                <span className="font-condensed text-2xl text-accent">{step.number}</span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-paper/60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
