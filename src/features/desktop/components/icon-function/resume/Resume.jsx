export default function Resume() {
  return (
    <div className="h-full bg-white text-black p-4 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300">Experience</h2>
          <p className="mt-2">Software Developer - Unique Tech</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300">Skills</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>React & Vite</li>
            <li>JavaScript / Node.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
