"use client";

import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({
  id,
  children,
  className = "",
}: SectionWrapperProps) => {
  return (
    <section id={id} className={`scroll-mt-[110px] ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
