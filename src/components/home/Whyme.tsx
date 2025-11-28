const items = [
  {
    number: "1",
    text: "5+ Years of\nReal Experience"
  },
  {
    number: "2",
    text: "Client-Focused\nApproach"
  },
  {
    number: "3",
    text: "Clear, Honest &\nTransparent Work"
  }
];

const Whyme = () => {
  return (
    <section className="w-full px-6 py-20 text-center md:px-20">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-white/80">
        Why clients <span className="text-primary">choose me?</span>
      </h2>

      {/* Subtext */}
      <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-balance text-white/60">
        I focus on delivering clean, high-quality work with a process that’s
        simple, transparent, and built around what your business truly needs.
        Here’s what makes my services the right fit for modern brands and
        startups.
      </p>

      {/* Items */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center gap-4"
          >
            {/* Soft Background Number */}
            <span className="to-primary bg-linear-to-b from-transparent bg-clip-text px-4 text-[15rem] font-bold text-transparent opacity-30 select-none">
              {item.number}
            </span>

            {/* Text */}
            <p className="absolute top-1/2 z-10 -translate-y-1/2 text-2xl font-semibold whitespace-pre-line text-white/70">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whyme;
