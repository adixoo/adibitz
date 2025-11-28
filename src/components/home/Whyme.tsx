import React from "react";

const items = [
    {
        number: "1",
        text: "5+ Years of\nReal Experience",
    },
    {
        number: "2",
        text: "Client-Focused\nApproach",
    },
    {
        number: "3",
        text: "Clear, Honest &\nTransparent Work",
    },
];

const Whyme = () => {
    return (
        <section className="w-full py-20 px-6 md:px-20 text-center">
            {/* Heading */}
            <h2 className="text-5xl font-bold text-white/80">
                Why clients <span className="text-purple-600">choose me?</span>
            </h2>

            {/* Subtext */}
            <p className="text-white/60 text-lg max-w-4xl mx-auto mt-6 leading-relaxed text-balance">
                I focus on delivering clean, high-quality work with a process that’s simple,
                transparent, and built around what your business truly needs. Here’s what
                makes my services the right fit for modern brands and startups.
            </p>

            {/* Items */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                {items.map((item, index) => (
                    <div key={index} className="relative flex flex-col items-center gap-4">
                        {/* Soft Background Number */}
                        <span
                            className="text-[15rem] font-bold opacity-30 select-none px-4 bg-linear-to-b from-transparent to-primary bg-clip-text text-transparent"
                        >
                            {item.number}
                        </span>

                        {/* Text */}
                        <p className="text-2xl absolute font-semibold whitespace-pre-line z-10 top-1/2 -translate-y-1/2 text-white/70">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Whyme;
