import { ReactNode } from "react";

interface IPropsSection {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function Section({ id, title, intro, children }: IPropsSection) {
  return (
    <section aria-labelledby={id} className="border-t border-rule pt-12">
      <h2 id={id} className="text-[2.625rem] font-extrabold leading-tight tracking-tight">
        {title}
      </h2>
      {intro && <p className="mt-3 max-w-prose text-xl text-graphite">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
