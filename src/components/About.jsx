import React from "react";
import { Code2, Database, Cpu, TrendingUp } from "lucide-react";

export default function About() {
  const skills = [
    { icon: <Code2 className="w-5 h-5" />, name: "Full-Stack Development", description: "React, Flask, Spring Boot" },
    { icon: <Database className="w-5 h-5" />, name: "Database Management", description: "MySQL, PostgreSQL, MongoDB" },
    { icon: <Cpu className="w-5 h-5" />, name: "System Design", description: "Scalable & Secure Architecture" },
    { icon: <TrendingUp className="w-5 h-5" />, name: "Data Analytics", description: "Time Series Forecasting" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6" data-aos="fade-right">
            <div>
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">First Class Honours Software Engineering graduate</span> passionate about crafting innovative digital solutions that make a real impact.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                With expertise spanning both frontend and backend development, I specialize in building dynamic, scalable applications using modern technologies like <strong className="text-gray-800 dark:text-gray-200">React, Flask, Java Spring Boot, and MySQL</strong>.
              </p>

              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                My experience includes developing data-driven systems like sales forecasting platforms and comprehensive management software. I thrive in <strong className="text-gray-800 dark:text-gray-200">Agile environments</strong>, enjoy tackling complex challenges, and am committed to continuous learning and delivering exceptional results.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1st</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Class Honours</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Accuracy Improved</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="200">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together or learning more about my projects?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Let's Connect
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}