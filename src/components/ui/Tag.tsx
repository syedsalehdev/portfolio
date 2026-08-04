export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-[11px] tracking-wide text-text-muted transition-colors group-hover:border-border-hover">
      {children}
    </span>
  );
}
