import { useEffect, useState } from "react";

const services = [
  {
    title: "Frontend Development",
    desc: (
      <>
        Building fast, scalable apps with
        <span className="text-cyan-400 font-medium">React.js</span> and
        <span className="text-cyan-400 font-medium">Next.js</span> using modern
        best practices.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-cyan-400">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Responsive Design",
    desc: (
      <>
        Pixel-perfect UI across all devices using
        <span className="text-cyan-400 font-medium">Tailwind CSS</span> and
        <span className="text-cyan-400 font-medium">SCSS</span>.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-cyan-400">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Performance Optimization",
    desc: (
      <>
        Optimizing load times and
        <span className="text-cyan-400 font-medium">Core Web Vitals</span>.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-cyan-400">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "API Integration",
    desc: (
      <>
        Connecting apps via
        <span className="text-cyan-400 font-medium">REST APIs</span>.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-cyan-400">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "UI/UX Implementation",
    desc: (
      <>
        Smooth interfaces using
        <span className="text-cyan-400 font-medium">Framer Motion</span>.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-cyan-400">
        <path d="M12 20h9" />
      </svg>
    ),
  },
  {
    title: "State Management",
    desc: (
      <>
        Using <span className="text-cyan-400 font-medium">Redux Toolkit</span>
        and <span className="text-cyan-400 font-medium">Zustand</span>.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-cyan-400">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function Services() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const timers = services.map((_, i) =>
      setTimeout(() => {
        setVisible((prev) => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, i * 100),
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="mx-auto max-w-6xl min-w-0 px-4 py-14" id="services">
      <p className="text-cyan-400 text-sm font-medium mb-2">What I do</p>
      <h2 className="text-2xl font-semibold mb-6">Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className={`relative p-5 rounded-xl border border-gray-200 overflow-hidden transition-all group duration-300 hover:scale-[1.02]  hover:border-cyan-300 ${
              visible[i]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-400/10 to-transparent opacity-0 hover:opacity-100 transition duration-300 rounded-xl" />
            <div className="w-11 h-11 mb-4 flex items-center group-hover:-rotate-12 group-hover:scale-3d group-hover:scale-[1.2] justify-center rounded-md bg-cyan-400/10 transition-all duration-300 group-hover:bg-cyan-400/20">
              {service.icon}
            </div>
            <h3 className="text-sm font-medium mb-1">{service.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
