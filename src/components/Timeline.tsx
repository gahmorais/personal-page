import { Lane, Role } from "@/data/profile";

const laneLabel: Record<Lane, string> = {
  hardware: "Hardware",
  software: "Software",
  both: "Hardware e software",
};

const laneColumn: Record<Lane, string> = {
  hardware: "md:col-start-2",
  software: "md:col-start-3",
  // O fundo cobre a linha da coluna de software que passaria por trás do texto
  both: "md:col-start-2 md:col-span-2 md:relative md:bg-paper md:border-l md:border-rule",
};

function period(role: Role) {
  return role.start === role.end ? role.start : `${role.start} – ${role.end}`;
}

function RoleHeading({ role }: { role: Role }) {
  return (
    <>
      <span className="block text-sm text-graphite md:hidden">{laneLabel[role.lane]}</span>
      <span className="block text-xl font-semibold">{role.title}</span>
      <span className="block text-graphite">{role.company}</span>
    </>
  );
}

export default function Timeline({ roles }: { roles: Role[] }) {
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
        <span className="hidden pl-6 text-sm text-graphite md:col-start-2 md:block">Hardware</span>
        <span className="hidden pl-6 text-sm text-graphite md:col-start-3 md:block">Software</span>
      </div>

      <ol className="relative mt-6 space-y-8">
        {roles.map((role) => (
          <li
            key={`${role.start}-${role.title}`}
            className="grid gap-x-6 md:grid-cols-[7rem_1fr_1fr]"
          >
            <span className="tabular-nums text-graphite md:col-start-1 md:pt-1">
              {period(role)}
            </span>
            <div className={`md:row-start-1 md:pl-6 ${laneColumn[role.lane]}`}>
              {role.details ? (
                <details className="group" open>
                  <summary className="cursor-pointer list-none rounded-sm [&::-webkit-details-marker]:hidden">
                    <RoleHeading role={role} />
                    <p className="mt-2 max-w-prose">{role.summary}</p>
                    <span className="mt-2 inline-block text-sm text-graphite underline underline-offset-4">
                      <span className="group-open:hidden">Ver o que faço hoje</span>
                      <span className="hidden group-open:inline">Ocultar detalhes</span>
                    </span>
                  </summary>
                  <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5">
                    {role.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </details>
              ) : (
                <>
                  <RoleHeading role={role} />
                  <p className="mt-2 max-w-prose">{role.summary}</p>
                </>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
