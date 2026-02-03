'use client';

interface ProjectLinks {
  demo?: string;
  github?: string;
  store?: string;
  playStore?: string;
}

interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tech: string[];
  status: string;
  videoUrls: string[];
  links: ProjectLinks;
  challenges: string[];
  solutions: string[];
  images: string[];
}

function isLocalVideo(url: string): boolean {
  return url.startsWith('/') && /\.(mp4|webm|ogg|mov)$/i.test(url);
}

function getVideoEmbedUrl(url: string): string | null {
  if (!url) return null;

  // If it's a local video file, return as-is
  if (isLocalVideo(url)) {
    return url;
  }

  // If it's already an embed/preview URL, return as-is
  if (url.includes('/preview') || url.includes('/embed')) {
    return url;
  }
  //<iframe src="https://drive.google.com/file/d/1JdtZ9N9p_QQtMXYPLHKBg8gZmbxoq4K-/preview" width="640" height="480"></iframe>
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

const projects: Project[] = [
  {
    id: "battle-pets",
    title: "Battle Pets – Horizon Worlds",
    role: "Unity Developer",
    description: "Built core mechanics for this VR multiplayer experience, including gameplay programming, multiplayer logic, procedural generation, and AI systems for Meta's Horizon Worlds platform.",
    tech: ["Unity", "VR", "Multiplayer", "AI Systems", "Procedural Generation"],
    status: "In Development",
    videoUrls: ["/BattleTreadmillTest.mp4","/BattlekinVid1.mp4","/BattlekinVid2.mp4"],
    links: {},
    challenges: [],
    solutions: [],
    images: [
      "/BattleKin4.jpg","BattleKin5.png","/BattleKin1.png","/BattleKin2.png","/BattleKin3.png"
    ]
  },
  {
    id: "gorilla-tag",
    title: "Gorilla Tag",
    role: "Unity Developer",
    description: "High-profile VR multiplayer game with 30-50K monthly active users. Worked on PUN2 to Fusion networking conversion, maintaining dual implementations during transition and delivering live-ops updates.",
    tech: ["Unity", "VR", "PUN2/Fusion", "Networking", "Live-ops"],
    status: "Live",
    videoUrls: [],
    links: {
      store: "https://store.steampowered.com/app/1533390/Gorilla_Tag/"
    },
    challenges: [],
    solutions: [],
    images: []
  },
  {
    id: "ccc",
    title: "Complete Character controller",
    role: "Unity Developer",
    description: "A personal project. A multipurpose character controller with various perspectives for developers to choose from: First person, third person, side scroller, three quarter/topdown.",
    tech: ["Unity", "Mobile", "Animation", "Editor Tools", "Tools"],
    status: "In Development",
    videoUrls: [],
    links: {},
    challenges: [
    ],
    solutions: [
    ],
    images: []
  },
  {
    id: "darts-match-live",
    title: "Darts Match Live!",
    role: "Unity Developer",
    description: "Enhanced gameplay with multiple new game modes and mini-games. Built multiplayer reconnection system to maintain seamless gameplay during network disruptions. Created Unity Editor tools for seasons management and developed procedural dart generation system with UV unwrapping and normal map generation.",
    tech: ["Unity", "Mobile", "PHP", "C#", "Editor Tools", "Procedural Generation", "Multiplayer", "Live-ops"],
    status: "Live Ops",
    videoUrls: ["https://drive.google.com/file/d/1JdtZ9N9p_QQtMXYPLHKBg8gZmbxoq4K-/view?usp=sharing"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.motionlab.darts2&hl=en_GB"
    },
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
    images: [
      "/DartToolPoint.png",
      "/ProcGen Dart 1.png",
      "/ProcGen Dart 2.png",
      "/Season Tool.png",
      "/Lucky Dart Pic 1.png",
      "/Lucky Dart Pic 2.png"
    ]
  },
  {
    id: "broken-grounds",
    title: "Broken Grounds",
    role: "Technical Lead",
    description: "Led project development implementing all game mechanics with seamless integration. Designed flexible architecture for easy feature additions and intuitive drag-and-drop level design tools. Optimized AI behavior with simple placement systems and conducted extensive stress testing for performance across various devices.",
    tech: ["Unity", "Mobile", "Game Architecture", "AI Systems", "Tools Development", "Performance Optimization"],
    status: "Released",
    videoUrls: ["https://www.youtube.com/watch?v=mVDXkYxU_PA","/movePlatformTest.mp4"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.motionlab.critter&hl=en_GB"
    },
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
    images: [
    ]
  },
  {
    id: "dungeon-explorer",
    title: "Dungeon Explorer",
    role: "Networking Developer",
    description: "Developed character controller and networking systems for multiplayer dungeon crawler. Implemented hybrid server-client authority using PUN2 with client-side prediction based on latency. Used modular prefabs for procedural level generation to create dynamic dungeon experiences.",
    tech: ["Unity", "Mobile", "PUN2", "Networking", "Procedural Generation", "Client Prediction"],
    status: "Shelved",
    videoUrls: ["https://drive.google.com/file/d/1xshnUhVaHEGC6V7H2angYFOB81-p8aV6/view?usp=sharing","/TeleportBetweenRoomsTest.mp4"],
    links: {},
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
    images: []
  },
  {
    id: "disk-drive",
    title: "Disk Drive",
    role: "Level Design Developer",
    description: "Developed procedural level generation with raycast-based obstacle placement ensuring viable completion paths. Implemented balanced difficulty scaling that introduces easier challenges when new mechanics are added. Focused on runtime level generation for endless gameplay variety.",
    tech: ["Unity", "Procedural Generation", "Level Design", "Game Mechanics", "Difficulty Balancing"],
    status: "Shelved",
    videoUrls: ["https://drive.google.com/file/d/17GcMlaz3D28C2m33GUDN4MQfW6xYQx36/view?usp=drive_link"],
    links: {},
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
    images: []
  },
  {
    id: "enchanted-forest",
    title: "Enchanted Forest Animation",
    role: "Animation Developer",
    description: "Created captivating wedding invitation animation using Unity Timeline to orchestrate multiple components. Combined scripts, animations, and Unity Timeline to bring an enchanting forest scene to life. Optimized video recording using OBS Studio for web-friendly output.",
    tech: ["Unity", "Timeline", "Animation", "Video Production", "OBS Studio"],
    status: "Completed",
    videoUrls: ["https://drive.google.com/file/d/1WTKuZdrr-bejx5ljt9fOLhwVgFqfZtMl/view?usp=sharing"],
    links: {},
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
    images: [
    ]
  },
  {
    id: "prototypes",
    title: "Prototypes and Tests",
    role: "Developer",
    description: "Videos of some prototype and works as they progressed.",
    tech: ["Unity"],
    status: "Prototype",
    videoUrls: ["/PathFinder.mp4","/tig.mp4","/LioPrototype.mp4"],
    links: {},
    challenges: [
    ],
    solutions: [
    ],
    images: [
    ]
  }
];

export default function Projects() {
  return (
    <section id="items" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            My Work
          </h2>
          
          <div className="space-y-16">
            {projects.map((item, index) => (
              <div key={item.id} className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20">
                {/* Header Section */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-purple-400 text-lg font-medium">{item.role}</p>
                    </div>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0 self-start ${
                      item.status === 'Released' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'Live' || item.status === 'Live Ops' ? 'bg-blue-500/20 text-blue-400' :
                      item.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                      item.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{item.description}</p>
                  
                  {/* Video and Links Section */}
                  <div className="mb-6">
                    {item.videoUrls.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-white mb-3">Videos</h4>
                        <div className={`grid gap-4 ${item.videoUrls.length === 1 ? 'md:grid-cols-1' : item.videoUrls.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                          {item.videoUrls.map((videoUrl, videoIndex) => {
                            const embedUrl = getVideoEmbedUrl(videoUrl);
                            const isLocal = isLocalVideo(videoUrl);

                            return (
                              <div key={videoIndex}>
                                {isLocal ? (
                                  <video
                                    src={embedUrl || undefined}
                                    className="w-full aspect-video rounded-lg border border-purple-500/20 bg-black object-co"
                                    controls
                                    preload="metadata"
                                  >
                                    Your browser does not support the video tag.
                                  </video>
                                ) : (
                                  <iframe
                                    src={embedUrl || undefined}
                                    className="w-full aspect-video rounded-lg border border-purple-500/20 bg-black object-co"
                                    allowFullScreen
                                    title={`${item.title} video ${videoIndex + 1}`}
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    
                    {Object.keys(item.links).length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-white mb-3">Links</h4>
                        <div className="flex flex-wrap gap-3">
                        {item.links.demo && (
                          <a
                            href={item.links.demo}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors text-sm"
                          >
                            Demo
                          </a>
                        )}
                        {item.links.github && (
                          <a
                            href={item.links.github}
                            className="border border-purple-400 text-purple-400 px-4 py-2 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-colors text-sm"
                          >
                            GitHub
                          </a>
                        )}
                        {item.links.store && (
                          <a
                            href={item.links.store}
                            className="bg-slate-700 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-slate-600 transition-colors text-sm"
                          >
                            Store
                          </a>
                        )}
                        {item.links.playStore && (
                          <a
                            href={item.links.playStore}
                            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition-all duration-300 text-sm"
                          >
                            Play Store
                          </a>
                        )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Detailed Section - Only show if there are challenges/solutions */}
                {(item.challenges.length > 0 || item.images.length > 0) && (
                  <div className="border-t border-purple-500/20 pt-6">
                    {item.challenges.length > 0 && (
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">Challenges</h4>
                          <ul className="space-y-2">
                            {item.challenges.map((challenge, i) => (
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
                            {item.solutions.map((solution, i) => (
                              <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start">
                                <span className="text-green-400 mr-2 mt-1">✓</span>
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {item.images.length > 0 && (
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">Project Images</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {item.images.map((image, i) => (
                            <div key={i} className="bg-slate-700/50 rounded-lg p-2 border border-purple-500/20">
                              <img
                                src={image}
                                alt={`${item.title} screenshot ${i + 1}`}
                                className="w-full h-32 object-cover rounded-lg"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.nextElementSibling?.classList.remove('hidden');
                                }}
                              />
                              <div className="hidden w-full h-32 bg-slate-600/50 rounded-lg flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Image not found: {image}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Technologies Section */}
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}