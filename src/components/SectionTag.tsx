// Server Component — no "use client" needed
export default function SectionTag({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-[6px] bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.3)] rounded-full text-[12px] font-semibold text-(--accent-primary) tracking-[0.08em] uppercase font-mono">
      <span className="w-1.5 h-1.5 bg-(--accent-primary) rounded-full" />
      {text}
    </div>
  );
}
