import { useState, useEffect } from "react";
import CursorFollower from "./components/CursorFollower";
import ProfileAvatar from "./components/ProfileAvatar";
import { AnimatedCode, DataVisualization } from "./components/CustomGraphics";
import { TechStack } from "./components/TechStack";
import "./styles/TechStack.css";
import "./App.css";

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
      icon: "🍎",
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
              Full-Stack Software Developer | React Native | Node.js |
              TypeScript
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
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <span>→</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
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

          <div className="skills-content">
            {/* <div className="skills-left">
              <div className="graphics-container">
                <DataVisualization />
              </div>
            </div> */}

            <div className="skills-right">
              <div className="skills-grid">
                {Object.entries(skills).map(([category, items], idx) => (
                  <div
                    key={category}
                    className="skill-group"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <h3 className="skill-category-title">
                      {category === "languages" && "Languages"}
                      {category === "frontend" && "Frontend/Mobile"}
                      {category === "backend" && "Backend/APIs"}
                      {category === "databases" && "Databases"}
                      {category === "tools" && "Tools/Platforms"}
                    </h3>
                    <div className="skill-items">
                      {items.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            <div className="education-card">
              <div className="edu-icon">📰</div>
              <h3>Publication</h3>
              <p className="edu-name">IJISAE (Q3 Journal)</p>
              <p className="edu-detail">
                Machine Learning Model for OCR-Based Food Allergen Detection
              </p>
              <p className="edu-highlight">Model Accuracy: 86%</p>
            </div>
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
              >
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
              >
                <span>GitHub</span>
              </a>
              <a
                href="https://leetcode.com/u/Arishi_Gupta/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn leetcode"
              >
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2024 Arishi Gupta. Built with React & Modern Web
            Technologies.
          </p>
          <p className="footer-subtitle">
            Crafted with ❤️ and ☕ | All Resume Information Verified
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
