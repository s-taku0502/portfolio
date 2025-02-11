const projects = [
    { title: "Stamp Rally App", description: "A web app for a regional stamp rally experience.", link: "#" },
    { title: "Portfolio Website", description: "Personal portfolio showcasing my work.", link: "#" },
  ];
  
  export default function ProjectsPage() {
    return (
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-base text-gray-700">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 underline mt-2 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </main>
    );
  }
  