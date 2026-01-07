function getVideoEmbedUrl(url: string): string | null {
  if (!url) return null;
  
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId;
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  }
  
  if (url.includes('drive.google.com')) {
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
  }
  
  return null;
}

export default function ProjectsOld() {
  const projects = [
    {
      title: "Battle Pets – Horizon Worlds",
      description: "Built core mechanics for this VR multiplayer experience, including gameplay programming, multiplayer logic, procedural generation, and AI systems for Meta's Horizon Worlds platform.",
      tech: ["Unity", "VR", "Multiplayer", "AI Systems", "Procedural Generation"],
      status: "In Development",
      videoUrl: "",
      links: {}
    },
    {
      title: "Gorilla Tag",
      description: "High-profile VR multiplayer game with 30-50K monthly active users. Worked on PUN2 to Fusion networking conversion, maintaining dual implementations during transition and delivering live-ops updates.",
      tech: ["Unity", "VR", "PUN2/Fusion", "Networking", "Live-ops"],
      status: "",
      videoUrl: "",
      links: {
        store: "https://store.steampowered.com/app/1533390/Gorilla_Tag/"
      }
    },
    {
      title: "Darts Match Live",
      description: "Enhanced gameplay with multiple new game modes and mini-games. Built multiplayer reconnection system to maintain seamless gameplay during network disruptions. Created Unity Editor tools for seasons management and developed procedural dart generation system with UV unwrapping and normal map generation.",
      tech: ["Unity", "Mobile", "PHP", "C#", "Editor Tools", "Procedural Generation", "Multiplayer", "Live-ops"],
      status: "Live Ops",
      videoUrl: "",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.motionlab.darts2&hl=en_GB"
      }
    },
    {
      title: "Broken Grounds",
      description: "Led project development implementing all game mechanics with seamless integration. Designed flexible architecture for easy feature additions and intuitive drag-and-drop level design tools. Optimized AI behavior with simple placement systems and conducted extensive stress testing for performance across various devices.",
      tech: ["Unity", "Mobile", "Game Architecture", "AI Systems", "Tools Development", "Performance Optimization"],
      status: "Released",
      videoUrl: "https://www.youtube.com/watch?v=mVDXkYxU_PA",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.motionlab.critter&hl=en_GB"
      }
    },
    {
      title: "Dungeon Explorer",
      description: "Developed character controller and networking systems for multiplayer dungeon crawler. Implemented hybrid server-client authority using PUN2 with client-side prediction based on latency. Used modular prefabs for procedural level generation to create dynamic dungeon experiences.",
      tech: ["Unity", "Mobile", "PUN2", "Networking", "Procedural Generation", "Client Prediction"],
      status: "In Development",
      videoUrl: "",
      links: {}
    },
    {
      title: "Disk Drive",
      description: "Developed procedural level generation with raycast-based obstacle placement ensuring viable completion paths. Implemented balanced difficulty scaling that introduces easier challenges when new mechanics are added. Focused on runtime level generation for endless gameplay variety.",
      tech: ["Unity", "Procedural Generation", "Level Design", "Game Mechanics", "Difficulty Balancing"],
      status: "Shelved",
      videoUrl: "",
      links: {}
    },
    {
      title: "Enchanted Forest Animation",
      description: "Created captivating wedding invitation animation using Unity Timeline to orchestrate multiple components. Combined scripts, animations, and Unity Timeline to bring an enchanting forest scene to life. Optimized video recording using OBS Studio for web-friendly output.",
      tech: ["Unity", "Timeline", "Animation", "Video Production", "OBS Studio"],
      status: "Completed",
      videoUrl: "",
      links: {}
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            My Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Released' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {project.videoUrl && (
                  <div className="mb-4">
                    <iframe
                      src={getVideoEmbedUrl(project.videoUrl) || undefined}
                      className="w-full h-48 rounded-lg border border-purple-500/20"
                      allowFullScreen
                      title={`${project.title} video`}
                    />
                  </div>
                )}
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors text-sm"
                    >
                      Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="border border-purple-400 text-purple-400 px-4 py-2 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.store && (
                    <a
                      href={project.links.store}
                      className="bg-slate-700 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-slate-600 transition-colors text-sm"
                    >
                      Store
                    </a>
                  )}
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition-all duration-300 text-sm"
                    >
                      Play Store
                    </a>
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