import { Link } from "react-router-dom";
import { allProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full min-w-0 overflow-x-hidden bg-slate-950 px-4 py-14 text-slate-100">
      <div className="mx-auto max-w-6xl min-w-0">
        <div className="mb-8 flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="min-w-0 text-3xl font-bold">All Projects</h1>
          <Link to="/" className="shrink-0 rounded-lg border border-cyan-300 px-4 py-2 text-center text-cyan-200 sm:text-left">
            Back to home
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => (
            <ProjectCard key={`${project.title}-${project.url}`} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
