export default function About() {
  const skills = [
    'Unity', 'C#', '.NET', 'JavaScript', 'TypeScript', 'PHP',
    'VR/AR Development', 'Multiplayer Networking', 'PUN2/Fusion', 'AI Systems',
    'Procedural Generation', 'Live-ops', 'Performance Optimization', 'Tools Development'
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm an experienced Unity Developer with 7+ years delivering production games
                to 100K+ MAU, including titles like Gorilla Tag and Darts Match Live.
                I have a proven track record creating revenue-generating features and tools across
                gameplay mechanics, AI systems, procedural generation, and multiplayer networking.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As a strong technical contributor, I bring experience in cross-timezone collaboration,
                technical guidance, and cross-discipline communication. My journey started with intensive
                VR development training at EON Reality, where I graduated as one of 12 out of 50 enrollments.
                I combine deep Unity expertise with business impact through tools that directly increase
                in-game sales and enhance player experience.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me out hiking, playing one sport or another, practicing photography, exploring VR/AR and other game technologies, 3D modelling,
                traveling, or playing piano - always seeking inspiration for my next innovative project.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-700/50 rounded-lg p-3 text-center border border-purple-500/20 hover:border-purple-400/50 transition-colors"
                  >
                    <span className="text-purple-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}