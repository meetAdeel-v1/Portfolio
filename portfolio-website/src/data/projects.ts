/**
 * Interface for a Project object.
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  imageUrl: string;
  details: string; // Can be simple text or markdown-formatted text
}

/**
 * Array of dummy project data.
 */
export const dummyProjects: Project[] = [
  {
    id: "erp-system",
    title: "Enterprise Resource Planning (ERP) System Modernization",
    description:
      "Led the modernization of a legacy ERP system, enhancing performance, scalability, and user experience through microservices architecture and a new Angular-based frontend.",
    technologies: [
      ".NET Core",
      "ASP.NET Core Web API",
      "Angular 12",
      "SQL Server",
      "Azure Kubernetes Service (AKS)",
      "Docker",
      "Azure DevOps (CI/CD)",
    ],
    role: "Lead .NET Developer & Architect",
    imageUrl: "/images/project-erp.jpg",
    details:
      "Key achievements included designing and implementing a scalable microservices backend using .NET Core, developing a responsive and feature-rich frontend with Angular, and migrating the database to Azure SQL. Implemented CI/CD pipelines using Azure DevOps for automated testing and deployment, significantly reducing release cycles.",
  },
  {
    id: "customer-portal",
    title: "Secure Customer Self-Service Portal",
    description:
      "Developed a secure and intuitive self-service portal for customers, enabling them to manage accounts, track orders, and access support resources, integrated with existing backend systems.",
    technologies: [
      "ASP.NET MVC 5",
      ".NET Framework 4.8",
      "C#",
      "RESTful Web APIs",
      "JavaScript",
      "jQuery",
      "SQL Server",
      "SSO (OAuth 2.0)",
    ],
    role: "Full-Stack .NET Developer",
    imageUrl: "/images/project-portal.jpg",
    details:
      "This portal provided customers with 24/7 access to their information, reducing support call volume. Focused on security best practices, including secure authentication and authorization mechanisms. Designed and consumed RESTful APIs for seamless data exchange with internal services.",
  },
  {
    id: "api-integration-platform",
    title: "Cloud-Based API Integration Platform",
    description:
      "Architected and built a cloud-native API integration platform to connect disparate internal and third-party services, improving data flow efficiency and enabling new business capabilities.",
    technologies: [
      ".NET 6",
      "Azure Functions",
      "Azure API Management",
      "Azure Service Bus",
      "Cosmos DB",
      "Docker",
      "Terraform",
    ],
    role: "Senior Cloud & .NET Developer",
    imageUrl: "/images/project-api.jpg",
    details:
      "The platform utilized Azure Functions for serverless compute, Azure API Management for securing and managing APIs, and Azure Service Bus for reliable messaging. Leveraged Cosmos DB for scalable data storage. Infrastructure was managed as code using Terraform.",
  },
];
