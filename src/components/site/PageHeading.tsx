export function PageHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="bg-ember text-ember-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
        <p className="eyebrow animate-rise text-saffron">{eyebrow}</p>
        <h1 className="mt-3 animate-rise font-display text-5xl font-semibold leading-[0.95] md:text-7xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl animate-rise text-lg text-ember-muted">{intro}</p>}
      </div>
    </section>
  );
}
