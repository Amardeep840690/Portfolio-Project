export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16 flex justify-center">
      <div className="max-w-5xl w-full bg-slate-950 border border-slate-800 rounded-lg p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold">Satya Prakash</h1>
            <p className="text-slate-400 mt-1">
              Computer Science Engineering • 3rd Year Student
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-sm hover:border-slate-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-sm hover:border-slate-500 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-3">Profile</h2>
          <p className="text-slate-300 leading-relaxed">
            Motivated Computer Science student with a strong interest in software development and web technologies.
            Passionate about building responsive, user-friendly applications and continuously improving problem-solving
            and coding skills through real-world projects.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-3">Education</h2>
          <div className="text-slate-300">
            <p className="font-medium text-white">B.Tech in Computer Science Engineering</p>
            <p className="text-slate-400">3rd Year Undergraduate</p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-3">Experience</h2>
          <div className="text-slate-300">
            <p className="font-medium text-white">Software Developer Intern</p>
            <p className="text-slate-400">Unique Tech — Project-based Internship</p>
            <ul className="list-disc list-inside mt-2 text-slate-400 space-y-1">
              <li>Built responsive frontend components using React and Tailwind CSS.</li>
              <li>Improved UI consistency and usability across projects.</li>
              <li>Collaborated on project-based development tasks.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-3">Highlighted Projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-slate-800 rounded-md p-4">
              <p className="font-medium">Portfolio Website</p>
              <p className="text-slate-400 text-sm mt-1">
                Personal portfolio built with React and Tailwind CSS.
              </p>
            </div>
            <div className="border border-slate-800 rounded-md p-4">
              <p className="font-medium">Admin Dashboard UI</p>
              <p className="text-slate-400 text-sm mt-1">
                Interactive dashboard interface design.
              </p>
            </div>
            <div className="border border-slate-800 rounded-md p-4">
              <p className="font-medium">Landing Page</p>
              <p className="text-slate-400 text-sm mt-1">
                Responsive product landing page.
              </p>
            </div>
            <div className="border border-slate-800 rounded-md p-4">
              <p className="font-medium">JavaScript Mini Apps</p>
              <p className="text-slate-400 text-sm mt-1">
                Small interactive apps for practice.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-medium mb-3">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git & GitHub",
              "C++",
              "Data Structures & Algorithms"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
