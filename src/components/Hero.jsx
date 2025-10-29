import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Software Engineer",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)'
          }}></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/6 w-12 h-12 border-2 border-cyan-600/30 dark:border-cyan-400/30 rounded-lg animate-float rotate-45 opacity-40"></div>
        <div className="absolute top-1/3 right-1/5 w-8 h-8 border-2 border-blue-600/30 dark:border-blue-400/30 rounded-full animate-float delay-700 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/5 w-16 h-16 border-2 border-purple-600/20 dark:border-purple-400/20 rounded-lg animate-float delay-1200 opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-6 h-6 border-2 border-cyan-600/40 dark:border-cyan-400/40 rounded-full animate-float delay-500 opacity-50"></div>
        
        {/* Binary Code Animation */}
        <div className="absolute top-20 left-10 font-mono text-xs text-cyan-600/20 dark:text-cyan-400/20 animate-pulse">
          10101010
        </div>
        <div className="absolute bottom-32 right-16 font-mono text-xs text-blue-600/20 dark:text-blue-400/20 animate-pulse delay-1000">
          11001100
        </div>

        {/* Circuit Lines */}
        <div className="absolute top-40 right-32 opacity-20">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
            <path d="M10 20 L50 20 M30 10 L30 30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
            <circle cx="10" cy="20" r="2" fill="currentColor"/>
            <circle cx="50" cy="20" r="2" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-40 left-32 opacity-20">
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
            <path d="M20 10 L20 50 M10 30 L30 30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
            <circle cx="20" cy="10" r="2" fill="currentColor"/>
            <circle cx="20" cy="50" r="2" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left" data-aos="fade-right">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-white">
                Available for new opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Siyam
              </span>{" "}
              👋
            </h1>

            {/* Animated Roles Text */}
            <div className="text-xl md:text-2xl lg:text-3xl font-light mb-6 h-12 flex items-center justify-center lg:justify-start">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                {roles[currentRole]}
              </span>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Passionate about crafting{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                digital experiences
              </span>{" "}
              that solve real-world problems. Specializing in modern web
              technologies and{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                innovative solutions
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <button
                onClick={scrollToProjects}
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/25 flex items-center gap-3"
              >
                <span>View My Work</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>

              <button
                onClick={scrollToContact}
                className="group border-2 border-gray-300 dark:border-white/30 hover:border-gray-400 dark:hover:border-white/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-white/10 text-gray-800 dark:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </button>

              <a
                href="/src/assets/Resume.pdf"
                download
                className="group border-2 border-green-500/50 dark:border-green-500/30 hover:border-green-600 dark:hover:border-green-500/50 bg-green-500/10 dark:bg-green-500/5 backdrop-blur-sm hover:bg-green-500/20 dark:hover:bg-green-500/10 text-gray-800 dark:text-white font-semibold px-6 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              {[
                {
                  icon: <Github className="w-6 h-6" />,
                  href: "https://github.com/Siyam24",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  href: "https://www.linkedin.com/in/siyamvijayaraj",
                  label: "LinkedIn",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  href: "mailto:vijayarajsiyam01@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <div className="text-gray-700 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="relative mx-auto lg:mx-0 max-w-md">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Main Image Container */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                {/* Profile Image */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/50 dark:border-white/10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <img
                    src="src/assets/siyam1.JPG"
                    alt="Siyam Vijayaraj - Software Engineer"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />

                  {/* Fallback if image doesn't load */}
                  <div className="hidden w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 items-center justify-center">
                    <div className="text-center text-gray-600 dark:text-white/60">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <p className="text-lg font-semibold">Siyam Vijayaraj</p>
                      <p className="text-sm">Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements Around Image */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 dark:bg-yellow-400/10 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-xl animate-float delay-1000"></div>

              {/* Status Indicator */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/50 dark:bg-black/50 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-white">
                  Open to work
                </span>
              </div>
            </div>

            {/* Tech Stack Floating Badges */}
            <div className="absolute -left-4 top-1/4 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl p-3 transform -rotate-12">
              <div className="text-xs font-semibold text-gray-700 dark:text-white">React</div>
            </div>
            <div className="absolute -right-4 top-3/4 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl p-3 transform rotate-12">
              <div className="text-xs font-semibold text-gray-700 dark:text-white">Node.js</div>
            </div>
            <div className="absolute -left-8 bottom-1/4 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl p-3 transform -rotate-6">
              <div className="text-xs font-semibold text-gray-700 dark:text-white">Python</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center text-gray-600 dark:text-white/60 hover:text-gray-800 dark:hover:text-white transition-colors duration-300 group"
          aria-label="Scroll to projects"
        >
          <span className="text-sm mb-2 font-medium">Explore More</span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}