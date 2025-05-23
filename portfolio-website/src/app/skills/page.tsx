interface Skill {
  name: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    name: "Backend Development",
    skills: [
      { name: ".NET Framework" },
      { name: ".NET Core / .NET 8" },
      { name: "ASP.NET Core" },
      { name: "C#" },
      { name: "RESTful API Design" },
      { name: "Entity Framework / Core" },
      { name: "Microservices" },
      { name: "SignalR" },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5" },
      { name: "CSS3 / SCSS" },
      { name: "RxJS" },
      { name: "NgRx" },
      { name: "React (Basic)" },
      { name: "Next.js (Learning)" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "SQL Server" },
      { name: "T-SQL" },
      { name: "Azure SQL Database" },
      { name: "PostgreSQL (Familiar)" },
      { name: "MongoDB (Basic)" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Azure (App Service, Functions, Blob Storage, Service Bus)" },
      { name: "AWS (EC2, S3, Lambda - Basic)" },
      { name: "Docker" },
      { name: "Kubernetes (Basic)" },
      { name: "CI/CD" },
      { name: "Azure DevOps" },
      { name: "Git" },
    ],
  },
  {
    name: "Tools & Methodologies",
    skills: [
      { name: "Visual Studio / VS Code" },
      { name: "Git / GitHub / GitLab" },
      { name: "Agile / Scrum / Kanban" },
      { name: "Jira / Confluence" },
      { name: "Unit Testing (xUnit, NUnit, MSTest)" },
      { name: "Integration Testing" },
    ],
  },
  {
    name: "Other Technologies",
    skills: [
      { name: "GraphQL (Basic)" },
      { name: "gRPC" },
      { name: "Elasticsearch (Familiar)" },
      { name: "Redis" },
      { name: "OAuth 2.0 / OpenID Connect" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14 text-gray-800 dark:text-white">
        Technical Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skillData.map((category) => (
          <div
            key={category.name}
            className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-gray-700 dark:text-gray-100 border-b pb-2 border-gray-300 dark:border-gray-600">
              {category.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
