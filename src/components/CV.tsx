export default function CV() {
  const experience = [
    {
      title: "Game Developer / Programmer",
      company: "Coatsink",
      period: "July 2023 – February 2026",
      description: "Working on high-profile VR multiplayer games including Gorilla Tag (30-50K MAU). Delivered networking conversion from PUN2 to Fusion, live-ops updates, and core mechanics for Battle Pets – Horizon Worlds."
    },
    {
      title: "Game Developer / Programmer",
      company: "Motionlab Interactive",
      period: "Aug 2018 – Jul 2023",
      description: "Developed features and tools for multiple live production games with 10-20K MAU. Created procedural dart-making tool that increased in-game sales, built multiplayer systems, and handled live-ops support."
    },
    {
      title: "VR Academy Application Developer / Apprentice",
      company: "EON Reality",
      period: "Sep 2016 – Aug 2017",
      description: "Completed 12-month VR development program (12 out of 50 graduates). Developed JavaScript VR functionality testing, built VR applications for HTC Vive and Oculus Rift, and created AR/VR content used internationally."
    }
  ];

  const education = [
    {
      degree: "VR Development Training",
      school: "EON Reality Innovation Academy",
      period: "2017",
      description: "Specialized VR development program focusing on immersive technology creation."
    },
    {
      degree: "Diploma in Information Systems Engineering",
      school: "CTI Johannesburg",
      period: "2015",
      description: "Comprehensive foundation in software engineering and systems design."
    },
    {
      degree: "AS-Level",
      school: "International Pre-University College Johannesburg",
      period: "2014",
      description: "Pre-university academic preparation with focus on mathematics and sciences."
    }
  ];

  return (
    <section id="cv" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Experience & Education
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-purple-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="bg-slate-700/30 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {job.title}
                      </h4>
                      <div className="text-purple-400 font-medium mb-2">
                        {job.company} • {job.period}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-purple-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="bg-slate-700/30 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <div className="text-purple-400 font-medium mb-2">
                        {edu.school} • {edu.period}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}