import Head from "next/head";
import Barcode from "@/components/Barcode";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { education, links, nameBarcode, roles, skills } from "@/data/profile";
import { projects } from "@/data/projects";

const linkClass =
  "underline decoration-rule decoration-2 underline-offset-4 hover:decoration-ink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Morais | Engenheiro de software</title>
        <meta
          name="description"
          content="Engenheiro de software que lidera apps Android para coletores de dados e terminais de consulta no varejo."
        />
      </Head>

      <main className="mx-auto max-w-[880px] space-y-20 px-4 py-16 sm:px-6 sm:py-24">
        <header>
          <h1 className="text-5xl font-extrabold leading-none tracking-tight sm:text-[4.25rem]">
            Gabriel Morais
          </h1>
          <p className="mt-3 text-xl text-graphite">Engenheiro de software, Android embarcado</p>

          <div className="mt-10">
            <Barcode pattern={nameBarcode} text="GABRIEL MORAIS" />
          </div>

          <p className="mt-10 max-w-prose text-xl leading-relaxed">
            Comecei consertando impressoras e leitores de código de barras em nível de componente.
            Hoje lidero o desenvolvimento dos apps Android que rodam nesses mesmos equipamentos: de
            500 a 2.000 coletores e terminais de consulta em produção no varejo.
          </p>
          <p className="mt-4 max-w-prose text-xl leading-relaxed">
            Sou engenheiro de controle e automação, com MBA em desenvolvimento mobile, e trabalho
            com Kotlin, Go e C. O próximo passo é o software embarcado automotivo, com Android
            Automotive e redes veiculares.
          </p>

          <nav aria-label="Contato" className="mt-8 flex gap-6 text-lg font-semibold">
            <a className={linkClass} href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className={linkClass} href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
        </header>

        <Section
          id="trajetoria"
          title="Do hardware ao software"
          intro="Treze anos entre a bancada de reparo e o código. Cada cargo aparece na coluna em que eu trabalhava; o atual ocupa as duas."
        >
          <Timeline roles={roles} />
        </Section>

        <Section id="competencias" title="Competências">
          <dl className="grid gap-y-4 sm:grid-cols-[14rem_1fr] sm:gap-x-8 sm:gap-y-6">
            {skills.map((skill) => (
              <div key={skill.area} className="sm:contents">
                <dt className="font-semibold">{skill.area}</dt>
                <dd className="text-graphite">{skill.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="projetos" title="Projetos">
          <Projects projects={projects} />
        </Section>

        <Section id="formacao" title="Formação">
          <ul className="divide-y divide-rule border-y border-rule">
            {education.map((item) => (
              <li key={item.course} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
                <div>
                  <span className="block font-semibold">{item.course}</span>
                  <span className="block text-graphite">{item.school}</span>
                </div>
                <span className="tabular-nums text-graphite">{item.period}</span>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="border-t border-rule pt-8 text-graphite">
          Quer conversar sobre um projeto? Me chame no{" "}
          <a
            className={`${linkClass} text-ink`}
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </footer>
      </main>
    </>
  );
}
