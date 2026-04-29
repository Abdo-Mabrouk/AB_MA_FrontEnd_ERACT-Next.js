import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeNavbar from "../components/HomeNavbar";
import HomeHeroSection from "../components/HomeHeroSection";
import ContactSection from "../components/Contact";
import { featuredProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Services from "../components/Services";

const skills = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "SCSS",
  "JavaScript",
  "jQuery",
  "TypeScript",
  "React",
  "Redux Toolkit",
  "i18next",
  "Next.js",
  "Responsive Design",
];
export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden bg-slate-950 text-slate-100">
      <HomeNavbar />
      <HomeHeroSection />
      <Services/>
      <section id="portfolio" className="mx-auto max-w-6xl min-w-0 px-4 py-14">
        <div className="mb-8 flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="min-w-0 text-3xl font-bold">Featured Projects</h2>
          <Link
            to="/projects"
            className="shrink-0 rounded-lg border border-cyan-300 px-4 py-2 text-center text-cyan-200 sm:text-left"
          >
            View all projects
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={`${project.title}-${project.url}`}
              project={project}
            />
          ))}
        </div>
      </section>
      <section
        id="about"
        className="mx-auto max-w-6xl min-w-0 px-4 py-14 space-y-5"
        data-aos="fade-left"
      >
        <h2 className="mb-6 text-3xl font-bold">About me</h2>
        <p className="leading-8 text-slate-300 capitalize">
          Frontend Developer specializing in{" "}
          <span className="text-cyan-400 font-semibold">React.js</span> and{" "}
          <span className="text-cyan-400 font-semibold">TypeScript</span>, with
          hands-on experience building{" "}
          <span className="text-cyan-400 font-semibold">responsive</span>,{" "}
          <span className="text-cyan-400 font-semibold">scalable</span>, and{" "}
          <span className="text-cyan-400 font-semibold">high-performance</span>{" "}
          web applications. Proficient in modern{" "}
          <span className="text-cyan-400 font-semibold">JavaScript (ES6+)</span>
          , state management{" "}
          <span className="text-cyan-400 font-semibold">(Redux/Zustand)</span>,
          and <span className="text-cyan-400 font-semibold">RESTful API</span>{" "}
          integration. Passionate about{" "}
          <span className="text-cyan-400 font-semibold">clean code</span>,{" "}
          <span className="text-cyan-400 font-semibold">
            component-driven architecture
          </span>
          , and delivering smooth user experiences. A fast learner who thrives
          in collaborative, agile environments.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-cyan-400/60 px-3 py-1 text-sm text-cyan-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
