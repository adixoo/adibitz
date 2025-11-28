import { Marquee } from "../ui/marquee";

const Ribbon = () => {
  const items = ["WEB DEVELOPMENT", "UI/UX DESIGN", "SEO OPTIMIZATION", "CLOUD SERVICES"];

  return (
    <div className="bg-primary flex w-full items-center justify-center  py-4">
      <Marquee className="[--duration:20s]">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="text-4xl font-semibold text-white">{item}</span>
            <span className="text-5xl leading-none text-white">•</span>
          </div>
        ))}
      </Marquee>

    </div>
  );
};

export default Ribbon;
