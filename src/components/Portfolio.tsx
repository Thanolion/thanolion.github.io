'use client';

const portfolioProjects = [
  {
    id: "darts-match-live",
    title: "Darts Match Live!",
    role: "Unity Developer",
    overview: "Enhanced gameplay experience with multiple new game modes, multiplayer reconnection systems, and custom Unity Editor tools.",
    challenges: [
      "Working within existing codebase while maintaining performance and code maintainability",
      "Creating user-friendly experience for new game modes",
      "Implementing reconnection feature without disrupting ongoing games",
      "Data management for incomplete and published seasons",
      "UV unwrapping and texturing through scripting for procedural dart generation"
    ],
    solutions: [
      "Seamless integration of new features while preserving game standards",
      "State synchronization system for multiplayer reconnection",
      "Scriptable Objects for editor tool data storage with UI Elements callbacks",
      "Procedural dart generation with high/low poly models and normal maps"
    ],
    technologies: ["Unity", "C#", "PHP", "UI Elements", "Scriptable Objects", "Mesh Manipulation", "UV Unwrapping"],
    images: [
      "/darts-ui-1.png", "/darts-ui-2.png", "/darts-tool.png"
    ]
  },
  {
    id: "broken-grounds",
    title: "Broken Grounds",
    role: "Project Lead",
    overview: "Spearheaded implementation of all game mechanics with flexible architecture for easy feature additions and intuitive level design tools.",
    challenges: [
      "Structuring classes for easy addition of new features",
      "Simplifying level design workflow for the team",
      "Optimizing AI behavior integration",
      "Ensuring performance across various devices"
    ],
    solutions: [
      "Flexible architecture streamlining new functionality incorporation",
      "Drag-and-drop system for core elements management",
      "Autonomous script management of tile arrays and communication",
      "Simple AI placement with guaranteed functionality",
      "Extensive stress testing and debugging for optimal performance"
    ],
    technologies: ["Unity", "C#", "AI Systems", "Level Design Tools", "Performance Optimization"],
    images: [
      "/broken-grounds-1.png"
    ]
  },
  {
    id: "dungeon-explorer",
    title: "Dungeon Explorer",
    role: "Networking Developer",
    overview: "Developed character controller and networking systems with hybrid server-client authority for optimal multiplayer experience.",
    challenges: [
      "Keeping all clients synchronized",
      "Deciding between server authoritative vs hybrid approach",
      "Managing client devices with limited network capabilities",
      "Minimizing player experience discrepancies"
    ],
    solutions: [
      "Hybrid server-client authority approach using PUN2",
      "Client and server-side prediction based on user latency",
      "Semi-authoritative clients ensuring enjoyable gameplay under non-ideal conditions",
      "Modular prefab system for procedural level generation"
    ],
    technologies: ["Unity", "PUN2", "Networking", "Client Prediction", "Procedural Generation"],
    images: []
  },
  {
    id: "disk-drive",
    title: "Disk Drive",
    role: "Level Design Developer",
    overview: "Developed procedural level generation system with strategic obstacle placement and balanced difficulty progression.",
    challenges: [
      "Ensuring each procedurally generated level had a viable completion path",
      "Maintaining balanced difficulty curve",
      "Avoiding overwhelming difficulty spikes when introducing new elements"
    ],
    solutions: [
      "Strategic raycast-based obstacle and pivot point positioning",
      "Difficulty balancing with easier challenges when new mechanics introduced",
      "Runtime level generation system for endless variety",
      "Progressive difficulty increase with additional obstacles and power-ups"
    ],
    technologies: ["Unity", "Procedural Generation", "Raycast Systems", "Difficulty Balancing"],
    images: []
  },
  {
    id: "enchanted-forest",
    title: "Enchanted Forest Animation",
    role: "Animation Developer",
    overview: "Created captivating wedding invitation animation using Unity Timeline with optimized video output for web usage.",
    challenges: [
      "Orchestrating multiple animation components effectively",
      "Capturing high-quality video recording",
      "Balancing output quality with manageable file size for web"
    ],
    solutions: [
      "Unity Timeline integration for component orchestration",
      "OBS Studio implementation for optimal quality-to-size ratio",
      "Combined scripts, animations, and Timeline for seamless experience"
    ],
    technologies: ["Unity", "Timeline", "Animation Systems", "OBS Studio", "Video Production"],
    images: [
      "/enchanted-forest.png"
    ]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Detailed Portfolio
          </h2>
          
          <div className="space-y-16">
            {portfolioProjects.map((project, index) => (
              <div key={project.id} className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-purple-400 text-lg font-medium mb-4">{project.role}</p>
                      <p className="text-gray-300 text-lg leading-relaxed">{project.overview}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">Challenges</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start">
                              <span className="text-purple-400 mr-2 mt-1">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">Solutions</h4>
                        <ul className="space-y-2">
                          {project.solutions.map((solution, i) => (
                            <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start">
                              <span className="text-green-400 mr-2 mt-1">✓</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {project.images.length > 0 && (
                    <div className="md:col-span-1">
                      <h4 className="text-xl font-semibold text-white mb-3">Project Images</h4>
                      <div className="space-y-4">
                        {project.images.map((image, i) => (
                          <div key={i} className="bg-slate-700/50 rounded-lg p-4 border border-purple-500/20">
                            <div className="w-full h-32 bg-slate-600/50 rounded-lg flex items-center justify-center">
                              <span className="text-gray-400 text-sm">Image: {image}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}