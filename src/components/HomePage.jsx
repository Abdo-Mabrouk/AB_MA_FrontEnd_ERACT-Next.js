import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { featuredProjects } from "../data/projects";
import HomeHeroSection from "./HomeHeroSection";
import HomeNavbar from "./HomeNavbar";
import ProjectCard from "./ProjectCard";

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

      <section id="services" className="mx-auto max-w-6xl min-w-0 px-4 py-14" data-aos="fade-right">
        <h2 className="mb-4 text-3xl font-bold">What I do</h2>
        <p className="leading-8 text-slate-300">
          I create scalable and interactive web interfaces using modern front-end stacks, focusing on clean code,
          high performance, and smooth experience across all devices.
        </p>
      </section>

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
            <ProjectCard key={`${project.title}-${project.url}`} project={project} />
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl min-w-0 px-4 py-14" data-aos="fade-left">
        <h2 className="mb-6 text-3xl font-bold">About me</h2>
        <p className="mb-7 max-w-3xl leading-8 text-slate-300">
          I am a passionate front-end developer focused on writing maintainable code and delivering polished UI
          experiences. I keep learning modern practices and enjoy building products that users love.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-lg border border-cyan-400/60 px-3 py-1 text-sm text-cyan-200">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl min-w-0 px-4 pb-16 pt-14">
        <h2 className="mb-6 text-3xl font-bold">Contact me</h2>
        <form
          action="https://formspree.io/f/xjkekndg"
          method="POST"
          className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-5 md:grid-cols-2"
        >
          <input name="First-name" type="text" placeholder="First name" className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400" />
          <input name="Email" type="email" placeholder="Email address" className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400" />
          <textarea name="message" placeholder="Your message" rows={5} className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400 md:col-span-2" />
          <button type="submit" className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-black md:col-span-2 md:w-fit">
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
