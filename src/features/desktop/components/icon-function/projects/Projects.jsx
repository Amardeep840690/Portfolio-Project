export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A sample web application project.",
      link: "https://example.com/project1"
    },
    {
      title: "Project Two",
      description: "A dummy portfolio showcase project.",
      link: "https://example.com/project2"
    },
    {
      title: "Project Three",
      description: "A demo dashboard interface project.",
      link: "https://example.com/project3"
    },
    {
      title: "Project Four",
      description: "A simple landing page project.",
      link: "https://example.com/project4"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <h1 className="text-3xl font-semibold mb-10 text-center">
        Projects
      </h1>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-slate-500 transition"
          >
            <h2 className="text-xl font-medium mb-2">
              {project.title}
            </h2>
            
            <p className="text-slate-400 mb-4">
              {project.description}
            </p>
            
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-200 underline hover:text-white"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
