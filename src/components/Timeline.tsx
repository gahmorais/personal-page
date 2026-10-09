import { PRESENT, Role } from "@/data/profile";
import { Dictionary } from "@/i18n";

type TimelineText = Dictionary["timeline"];

const laneColumn: Record<Role["lane"], string> = {
  hardware: "md:col-start-2",
  software: "md:col-start-3",
  // O fundo cobre a linha da coluna de software que passaria por trás do texto
  both: "md:col-start-2 md:col-span-2 md:relative md:bg-paper md:border-l md:border-rule",
};

function period(role: Role, t: TimelineText) {
  const end = role.end === PRESENT ? t.present : role.end;
  return role.start === end ? role.start : `${role.start} – ${end}`;
}

function RoleHeading({ role, t }: { role: Role; t: TimelineText }) {
  return (
    <>
      {/* No desktop a coluna já mostra a área, mas a posição na grid é só visual:
          o rótulo continua no DOM para o leitor de tela não perder a informação */}
      <span className="block text-sm text-graphite md:sr-only">{t.lane[role.lane]}</span>
      <span className="block text-xl font-semibold">{t.role[role.id].title}</span>
      <span className="block text-graphite">{role.company}</span>
    </>
  );
}

export default function Timeline({ roles, t }: { roles: Role[]; t: TimelineText }) {
  return (
    <div className="relative">
      {/* Linhas verticais que separam as colunas de hardware e software no desktop */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[8.5rem] right-0 hidden grid-cols-2 gap-x-6 md:grid"
        aria-hidden="true"
      >
        <div className="border-l border-rule" />
        <div className="border-l border-rule" />
      </div>

      <div className="relative grid gap-x-6 md:grid-cols-[7rem_1fr_1fr]" aria-hidden="true">
        <span className="hidden pl-6 text-sm text-graphite md:col-start-2 md:block">
          {t.lane.hardware}
        </span>
        <span className="hidden pl-6 text-sm text-graphite md:col-start-3 md:block">
          {t.lane.software}
        </span>
      </div>

      <ol className="relative mt-6 space-y-8">
        {roles.map((role) => {
          const { summary, details } = t.role[role.id];
          return (
            <li key={role.id} className="grid gap-x-6 md:grid-cols-[7rem_1fr_1fr]">
              <span className="tabular-nums text-graphite md:col-start-1 md:pt-1">
                {period(role, t)}
              </span>
              <div className={`md:row-start-1 md:pl-6 ${laneColumn[role.lane]}`}>
                {details ? (
                  <details className="group" open>
                    <summary className="cursor-pointer list-none rounded-sm [&::-webkit-details-marker]:hidden">
                      <RoleHeading role={role} t={t} />
                      <p className="mt-2 max-w-prose">{summary}</p>
                      <span className="mt-2 inline-block text-sm text-graphite underline underline-offset-4">
                        <span className="group-open:hidden">{t.showDetails}</span>
                        <span className="hidden group-open:inline">{t.hideDetails}</span>
                      </span>
                    </summary>
                    <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5">
                      {details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <>
                    <RoleHeading role={role} t={t} />
                    <p className="mt-2 max-w-prose">{summary}</p>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
