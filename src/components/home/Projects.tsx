import { Laptop, Megaphone, Palette } from "lucide-react";
import LargeHeading from "../LargeHeading";

const services = [
  {
    title: "Web and App Development",
    icon: <Laptop className="mb-6 h-10 w-10 text-gray-700" />,
    highlight: false
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="text-primary mb-6 h-10 w-10" />,
    highlight: true
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="mb-6 h-10 w-10 text-gray-700" />,
    highlight: false
  }
];

const Projects = () => {
  return (
    <section>
      <LargeHeading>PROJECTS</LargeHeading>
      <div className="mx-auto w-full max-w-7xl py-20">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
              We Provide <br />
              Digital Services <br />
              <span className="text-primary">For you.</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-gray-700 md:text-base">
            The paragraph describes a peaceful scene with a gentle breeze, a
            setting sun, a calm lake, and ducks gliding across the water,
            creating shimmering ripples.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-background flex flex-col items-center justify-center rounded-3xl p-10 transition ${
                service.highlight
                  ? "border-primary border-2 shadow-md"
                  : "border shadow-sm hover:shadow-md"
              }`}
            >
              {service.icon}
              <h3 className="text-center text-lg font-medium text-gray-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
