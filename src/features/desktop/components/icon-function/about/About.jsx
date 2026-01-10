export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        
        <h1 className="text-3xl font-semibold mb-6">
          About Me
        </h1>

        <p className="text-slate-300 mb-6 leading-relaxed">
          Hello! I’m Satya Prakash, a Computer Science Engineering student currently in my 3rd year.
          I have a strong interest in software development and enjoy building clean, functional, and user-friendly web applications.
          I’m constantly learning new technologies and improving my problem-solving skills to grow as a developer.
        </p>

        <p className="text-slate-300 mb-8 leading-relaxed">
          I focus mainly on frontend development, but I also have a solid foundation in core computer science concepts.
          I like working on real-world projects that challenge me to think logically and creatively.
        </p>

        <h2 className="text-xl font-medium mb-4">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
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
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
