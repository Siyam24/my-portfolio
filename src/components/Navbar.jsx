import React, { useState, useEffect } from "react";
import { Menu, X, Code2, Download, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lazy init: read saved preference first, fall back to system preference.
  // Prevents dark mode resetting to system default on every reload.
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Use lowercase path consistently across the app (matches Hero.jsx).
  // Make sure your actual file in /public is named resume.pdf (lowercase).
  const resumePath = "/resume.pdf";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleResumeClick = () => {
    // Wire this up to real analytics (e.g. a GA/Plausible event) if you want
    // actual tracking. Left as a no-op click handler for now.
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg py-3 border-b border-gray-200 dark:border-gray-700"
            : "bg-white dark:bg-gray-900 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold tracking-tight text-black dark:text-white">
              <span>Siyam</span>
              <span>.dev</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="relative font-medium transition-all duration-300 group text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-lg transition-all duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-lg transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>

            <button
              className="p-2 rounded-lg transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 w-full md:hidden transition-all duration-500 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-6 py-6 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium transition-all duration-300 hover:translate-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Resume Button */}
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleResumeClick();
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                View Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}