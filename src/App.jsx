import { useState, useEffect } from "react";
import CursorFollower from "./components/CursorFollower";
import ProfileAvatar from "./components/ProfileAvatar";
import { AnimatedCode, DataVisualization } from "./components/CustomGraphics";
import { TechStack } from "./components/TechStack";
import "./styles/TechStack.css";
import "./App.css";
import "./App.mobile.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "skills", "experience", "projects", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const skills = {
    languages: ["JavaScript", "TypeScript", "Java", "Python", "C++", "SQL"],
    frontend: [
      "React.js",
      "React Native",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "MUI",
    ],
    backend: ["Node.js", "Express", "REST APIs", "Salesforce", "Postman"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"],
    tools: ["Git", "GitHub", "Jest", "AccelQ", "VS Code", "Maven", "Power BI"],
  };

  const experiences = [
    {
      title: "Software Developer",
      company: "Syngenta",
      location: "Pune, Maharashtra",
      period: "July 2024 – Present",
      description:
        "Building production-grade mobile and web applications for digital agriculture platform",
      projects: [
        {
          name: "SmartAgro",
          tech: "React Native, TypeScript, JavaScript, Salesforce, SQL, Postman",
          highlights: [
            "Delivered 70+ production features and resolved 150+ high-impact bugs",
            "Designed offline-first architecture for low-connectivity environments",
            "Developed end-to-end features using Java, Node.js, and REST APIs",
            "Built modular region-specific modules with CRUD, localization, and Salesforce CRM integration",
          ],
        },
        {
          name: "Syngenta Survey Portal",
          tech: "React, Redux Toolkit, MUI, Node.js, Express, PostgreSQL, Zod, Nodemailer, ExcelJS",
          highlights: [
            "Built full-stack survey platform with SurveyJS drag-and-drop builder (20+ field types)",
            "Implemented AI-assisted 'Build with AI' mode for schema generation",
            "Designed secure invite system with crypto-generated single-use tokenized URLs",
            "Shipped 10-language UI with Postgres translation table and Excel export",
          ],
        },
        {
          name: "MyField",
          tech: "Java, Node.js, TypeScript, REST APIs, Salesforce, Postman",
          highlights: [
            "Developing backend services for grower workflows: proof-of-purchase and offer tracking",
            "Integrating Salesforce CRM with Cropwise ecosystem",
            "Collaborating cross-functionally with product, frontend, and Salesforce teams",
          ],
        },
      ],
    },
    {
      title: "SDE Intern",
      company: "Syngenta",
      location: "Pune, Maharashtra",
      period: "Jan 2024 – June 2024",
      description:
        "Developed React components and automated testing for grower loyalty platform",
      projects: [
        {
          name: "Admin Portal for Grower Loyalty",
          tech: "React.js, Redux Toolkit, REST APIs",
          highlights: [
            "Built reusable React components and dynamic UI modules",
            "Implemented Redux Toolkit for state management and API handling",
          ],
        },
        {
          name: "SmartAgro Automation Testing",
          tech: "AccelQ, React Native",
          highlights: [
            "Designed and executed automated test scenarios for SmartAgro mobile app",
            "Improved testability by integrating test IDs into React Native codebase",
          ],
        },
      ],
    },
    {
      title: "SDE Intern",
      company: "BMC Software",
      location: "Pune, Maharashtra",
      period: "Jan 2023 – June 2023",
      description: "Built CLI tools and managed build automation",
      projects: [
        {
          name: "Internal Utility Tool",
          tech: "PicoCLI, Maven, Java",
          highlights: [
            "Integrated PicoCLI for robust command-line interface",
            "Used Maven for dependency management and build automation",
          ],
        },
      ],
    },
  ];

  const projects = [
    {
      title: "Crop Recommendation Application",
      description:
        "ML-powered recommendation engine using soil moisture, N/P/K levels, pH, and temperature",
      tech: ["Python", "Streamlit", "Scikit-learn", "Machine Learning"],
      achievement: "🏆 2nd place at StartGlobal Hackathon - 97.95% Accuracy",
      icon: "🌾",
    },
    {
      title: "OCR-Based Food Allergen Detection",
      description:
        "Intelligent system for detecting food allergens from packaging labels",
      tech: ["OpenCV", "OCR", "Flask", "MySQL", "REST APIs", "ML"],
      achievement: "📰 Published in IJISAE (Q3 Journal) - 86% Accuracy",
      icon: "📱",
    },
    {
      title: "Deep Fake Detection Using InceptionResNetV2",
      description:
        "Advanced deep learning model for detecting manipulated media",
      tech: ["TensorFlow", "Python", "InceptionResNetV2", "Deep Learning"],
      achievement: "🎯 99.15% Training Accuracy",
      icon: "🎬",
    },
  ];

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <CursorFollower />

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-brand"></div>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
            <li>
              <a
                href="#home"
                onClick={() => handleSectionClick("home")}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => handleSectionClick("skills")}
                className={activeSection === "skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => handleSectionClick("experience")}
                className={activeSection === "experience" ? "active" : ""}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handleSectionClick("projects")}
                className={activeSection === "projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleSectionClick("contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
          >
            <span className="toggle-icon">{isDark ? "☀️" : "🌙"}</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="greeting">👋 Welcome to my portfolio</div>
            <h1>Hi, I'm Arishi Gupta</h1>
            <p className="hero-subtitle">
              Full-Stack Software Developer | React JS | React Native | Node JS
              | TypeScript | Salesforce
            </p>
            <p className="hero-description">
              Software Developer with 2+ years of experience building
              production-grade mobile and web applications. I specialize in
              creating scalable solutions, reducing technical debt, and
              delivering features in enterprise Agile environments. Experienced
              in Salesforce-integrated systems, RESTful API development,
              offline-first mobile architecture, and cross-functional
              collaboration.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">
                <span>View My Work</span>
                <span>→</span>
              </a>
              <a href="#contact" className="btn">
                Get In Touch
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-value">70+</span>
                <span className="stat-label">Features Shipped</span>
              </div>
              <div className="stat">
                <span className="stat-value">150+</span>
                <span className="stat-label">High-Impact Bugs Fixed</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <ProfileAvatar />
          </div>
        </div>
      </section>

      {/* Skills Section with Graphics */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
          <div style={{ marginBottom: "4rem" }}>
            <TechStack />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2>Professional Experience</h2>
          <p className="section-subtitle">
            My professional journey and achievements
          </p>

          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="timeline-item"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="exp-header">
                    <div>
                      <h3>{exp.title}</h3>
                      <p className="company">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  {exp.description && (
                    <p className="exp-description">{exp.description}</p>
                  )}
                  {exp.projects && (
                    <div className="projects-list">
                      {exp.projects.map((proj, pidx) => (
                        <div key={pidx} className="project-item">
                          <h4>✦ {proj.name}</h4>
                          <p className="project-tech">{proj.tech}</p>
                          <ul>
                            {proj.highlights.map((highlight, hidx) => (
                              <li key={hidx}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my best work and achievements
          </p>

          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="project-achievement">{project.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
            Education & Publications
          </h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="edu-icon">🎓</div>
              <h3>Education</h3>
              <p className="edu-name">MIT World Peace University</p>
              <p className="edu-detail">Pune, Maharashtra</p>
              <p className="edu-detail">
                B.Tech in Computer Science & Engineering
              </p>
              <p className="edu-detail">2020 – 2024</p>
              <p className="edu-highlight">CGPA: 9.34 / 10.0</p>
            </div>
            <a
              href="https://ijisae.org/index.php/IJISAE/article/view/5757"
              target="_blank"
              rel="noopener noreferrer"
              className="education-card publication-card"
              style={{ textDecoration: "none" }}
            >
              <div className="edu-icon">📰</div>
              <h3>Publication</h3>
              <p className="edu-name">IJISAE (Q3 Journal)</p>
              <p className="edu-detail">
                Machine Learning Model for OCR-Based Food Allergen Detection
              </p>
              <p className="edu-highlight">Model Accuracy: 86%</p>
              <div className="publication-link">
                <span>View Publication</span>
                <span className="link-icon">→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Work Together</h2>
          <p className="section-subtitle">
            I'd love to hear from you. Feel free to reach out!
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <a href="mailto:arishi.guptaa@gmail.com" className="contact-link">
                <span className="contact-icon">📧</span>
                <span>arishi.guptaa@gmail.com</span>
              </a>
              <a href="tel:+919001296981" className="contact-link">
                <span className="contact-icon">📱</span>
                <span>+91-9001296981</span>
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/arishi-gupta-07a86a200/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                title="LinkedIn"
              >
                <svg
                  className="social-icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
                title="GitHub"
              >
                <svg
                  className="social-icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
