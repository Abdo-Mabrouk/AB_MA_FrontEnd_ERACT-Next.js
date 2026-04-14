import { FaGithub } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-cyan-900/30 bg-slate-900/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/50">
      
      {/* Thumbnail / Hero */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-cyan-800 to-sky-700">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
        />
        {project.category && (
          <span className="absolute right-3 top-3 rounded-lg bg-black/40 px-2.5 py-1 text-xs text-cyan-300">
            {project.category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="space-y-3 p-4">
        <h3 className="text-base font-medium text-slate-100">{project.title}</h3>
        <p className="text-xs text-slate-400">{project.tools}</p>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-sky-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-sky-400"
            >
              <BsFillPlayCircleFill size={13} />
              Live
            </a>
          )}
          {project.github && (
                        <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10"
            >
              <FaGithub size={13} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}