import React, { useEffect, useState, Suspense, memo } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { ExternalLink, Github, Star, Eye } from "lucide-react";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function importAll(globImport) {
  return Object.values(globImport);
}

const images = {
  meals: importAll(
    import.meta.glob("../assets/projects/meals/*.{png,jpg,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ),
  gold: importAll(
    import.meta.glob("../assets/projects/gold/*.{png,jpg,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ),
  virtuvibe: importAll(
    import.meta.glob("../assets/projects/virtuvibe/*.{png,jpg,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ),
  emart: importAll(
    import.meta.glob("../assets/projects/emart/*.{png,jpg,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ),
  admin: importAll(
    import.meta.glob("../assets/projects/admin/*.{png,jpg,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ),
  eduprime: importAll(
    import.meta.glob("../assets/projects/eduprime/*.{png,jpg,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ),
  ecommerce: importAll(
    import.meta.glob("../assets/projects/ecommerce/*.{png,jpg,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ),
  bananaCipher: importAll(
    import.meta.glob("../assets/projects/game/*.{png,jpg,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ),
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  adaptiveHeight: true,
  dotsClass: "slick-dots !bottom-3",
};

// Featured projects - highlight your best work
const featuredProjects = ["meals", "bananaCipher", "gold"];

// 🧱 Project Card Component (memoized for performance)
const ProjectCard = memo(({ project, index }) => {
  const [loaded, setLoaded] = useState(false);
  const isFeatured = featuredProjects.includes(project.key);

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group relative flex flex-col h-full ${
        isFeatured ? "ring-2 ring-blue-500 dark:ring-blue-400" : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </span>
        </div>
      )}

      {/* Image Carousel */}
      <div className="relative overflow-hidden">
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <div className="bg-black/60 backdrop-blur-sm rounded-full p-2">
              <Eye className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        <Slider {...sliderSettings}>
          {images[project.key]?.map((img, idx) => (
            <div key={idx} className="relative">
              {!loaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse rounded-t-2xl"></div>
              )}
              <img
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                className={`w-full h-56 object-cover transition-all duration-700 group-hover:scale-105 rounded-t-2xl ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content - Fixed height for consistent alignment */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors flex-shrink-0"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Fixed height description container */}
        <div className="mb-4 flex-grow">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {project.desc}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t, j) => (
            <span
              key={j}
              className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 text-xs px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-600"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
          </a>

          {project.category && (
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                project.category === "Full Stack"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : project.category === "Mobile"
                  ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                  : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              }`}
            >
              {project.category}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
});

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      key: "meals",
      title: "Meals Forecast",
      desc: "Final year research project developing a food sales forecasting system for small shops using Prophet time series analysis with React + Flask full-stack implementation.",
      tech: ["React", "Flask", "Prophet", "PostgreSQL", "Time Series"],
      link: "https://github.com/Siyam24/Meals-Forecast",
      category: "Full Stack",
      demo: "#",
    },
    {
      key: "bananaCipher",
      title: "Banana Cipher Game",
      desc: "Real-time puzzle cryptography game with MERN stack, featuring custom encryption logic, live scoreboard, and interactive gameplay.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Banana API"],
      link: "https://github.com/Siyam24/Banana-Cipher_FinalYear.git",
      category: "Full Stack",
      demo: "#",
    },
    {
      key: "gold",
      title: "Gold Management System",
      desc: "Comprehensive jewelry shop management platform developed for Inov8IT with inventory tracking, transaction management, and real-time analytics.",
      tech: ["Java", "JavaFX", "MySQL", "Postman", "Trello"],
      link: "https://github.com/Siyam24/inov8IT",
      category: "Desktop",
    },
    {
      key: "virtuvibe",
      title: "Virtuvibe Academy",
      desc: "Music class management system with event calendar, scheduling features, and responsive UI supporting dark/light mode themes.",
      tech: ["React", "Spring Boot", "MySQL", "Postman"],
      link: "https://github.com/Siyam24/Virtuvibe-Academy-Music-Class-Management-Website",
      category: "Full Stack",
      demo: "#",
    },
    {
      key: "emart",
      title: "E-Mart Grocery App",
      desc: "Mobile application for grocery shopping with Firebase authentication, real-time updates, and user-friendly interface design.",
      tech: ["Java", "Firebase", "Android Studio", "Figma"],
      link: "https://github.com/Siyam24/E-Mart-Grocery-Mobile-Application",
      category: "Mobile",
    },
    {
      key: "admin",
      title: "Administrative Software",
      desc: "Java Swing desktop system automating business processes including invoice generation, receipt printing, and user enrollment management.",
      tech: ["Java", "Swing", "OOP", "Team Collaboration"],
      link: "https://github.com/G-Kavinesh/myShare",
      category: "Desktop",
    },
    {
      key: "eduprime",
      title: "EduPrime System",
      desc: "Student enrollment web application with responsive design and efficient data management capabilities.",
      tech: ["NodeJS", "Express", "Bootstrap", "MySQL"],
      link: "#",
      category: "Full Stack",
    },
    {
      key: "ecommerce",
      title: "E-Commerce Platform",
      desc: "Complete e-commerce solution with user authentication, product management, and admin dashboard functionalities.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      link: "#",
      category: "Full Stack",
    },
  ];

  const categories = ["all", "Full Stack", "Mobile", "Desktop"];
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A collection of my work spanning full-stack web development, mobile
            apps, and desktop solutions. Each project represents unique
            challenges and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Suspense
            fallback={
              <div className="col-span-full text-center py-12">
                <div className="inline-flex items-center gap-3 text-gray-500 dark:text-gray-400">
                  <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  Loading projects...
                </div>
              </div>
            }
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.key} project={project} index={index} />
            ))}
          </Suspense>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-gray-400 dark:text-gray-500 text-lg">
              No projects found in this category.
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
