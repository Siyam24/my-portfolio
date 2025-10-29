import React from "react";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="p-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
          Ready to bring your ideas to life? Let's collaborate and build something 
          <span className="font-semibold text-blue-600 dark:text-blue-400"> extraordinary </span>
          together 🚀
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {/* Email */}
          <a 
            href="mailto:vijayarajsiyam01@gmail.com"
            className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 hover:border-blue-400"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mt-4 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                vijayarajsiyam01@gmail.com
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/Siyam24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 hover:border-purple-400"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors">
                <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mt-4 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                GitHub
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                @Siyam24
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/siyamvijayaraj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 hover:border-cyan-400"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-cyan-500/10 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                <Linkedin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="font-semibold mt-4 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                LinkedIn
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                siyamvijayaraj
              </p>
            </div>
          </a>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            📍 Based in Colombo, Sri Lanka<br />
            💬 Always open to discussing new opportunities and collaborations
          </p>
        </div>
      </div>
    </section>
  );
}