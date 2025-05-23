import Image from "next/image";
import Link from "next/link"; // Import Link for the "View Details" button
import { Project } from "@/data/projects"; // Import the Project interface

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col h-full">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="bg-gray-100 dark:bg-gray-700" // Placeholder background
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Role:
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {project.role}
          </p>
        </div>

        <div className="mb-5">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2.5 py-1 rounded-full text-xs font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* "View Details" button - links to a non-existent dynamic page for now */}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href={`/projects/${project.id}`} // Example dynamic route
            className="inline-block w-full text-center px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition-colors duration-150 ease-in-out text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => console.log("View details for", project.id)} // Placeholder action
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
