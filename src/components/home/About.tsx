const stats = [
  {
    value: "14",
    suffix: "+",
    text: "Projects successfully completed"
  },
  {
    value: "97",
    suffix: "%",
    text: "Happy and satisfied clients"
  },
  {
    value: "5",
    suffix: "+",
    text: "Years of experience delivering quality work"
  }
];

const About = () => {
  return (
    <section className="w-full px-6 py-20 md:px-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5">
        <div className="flex flex-col items-center md:col-span-2">
          <div className="bg-primary flex h-40 w-40 items-center justify-center rounded-full md:h-48 md:w-48">
            <span className="text-7xl font-bold text-white">5+</span>
          </div>
          <p className="mt-6 text-lg font-semibold tracking-wide text-white">
            YEARS OF EXPERIENCE
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-5xl leading-snug font-bold text-white/80">
            Building modern, high-performance{" "}
            <span className="text-purple-600">digital solutions</span> for
            brands across{" "}
            <span className="text-purple-600">India & beyond.</span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-white/60">
            I help businesses grow by creating fast, scalable, and beautifully
            designed digital products. From custom websites to intuitive UI/UX
            and SEO-optimized experiences — my goal is to deliver meaningful
            results that last.
          </p>
        </div>
      </div>

      <div className="mt-20 rounded-xl px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border-primary flex flex-col border-t border-b py-10"
            >
              <div className="flex items-end gap-2">
                <span className="text-7xl font-bold">{item.value}</span>
                <span className="text-4xl font-semibold">{item.suffix}</span>
              </div>

              <p className="mt-4 max-w-xs text-lg text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
