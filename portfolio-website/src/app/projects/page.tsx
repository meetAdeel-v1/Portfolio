import { dummyProjects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard"; // Assuming ProjectCard is in src/components

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14 text-gray-800 dark:text-white">
        My Projects
      </h1>

      {dummyProjects.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
          No projects to display at the moment. Please check back later!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dummyProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
