import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </section>
  );
}
