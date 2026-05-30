import React from "react";
import "../styles/TechStack.css";

export const TechStack = () => {
  const techs = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "C", icon: "C" },
    { name: "C++", icon: "++" },
    { name: "Kotlin", icon: "K" },
    { name: "HTML", icon: "🏷️" },
    { name: "CSS", icon: "🎨" },
    { name: "Bash", icon: "▶" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "N" },
    { name: "Bootstrap", icon: "B" },
    { name: "Node.js", icon: "⬢" },
    { name: "Django", icon: "D" },
    { name: "Flask", icon: "🍶" },
    { name: "FastAPI", icon: "⚡" },
    { name: "TensorFlow", icon: "T" },
    { name: "PyTorch", icon: "P" },
    { name: "Scikit-learn", icon: "S" },
    { name: "OpenCV", icon: "O" },
    { name: "Pandas", icon: "🐼" },
    { name: "MySQL", icon: "M" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Redis", icon: "R" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "A" },
    { name: "Git", icon: "G" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "V" },
    { name: "Jupyter", icon: "J" },
    { name: "Figma", icon: "F" },
    { name: "Postman", icon: "P" },
    { name: "Photoshop", icon: "Ps" },
  ];

  return (
    <div className="tech-stack-wrapper">
      <h3 className="tech-stack-title">TECH STACK</h3>
      <div className="tech-grid">
        {techs.map((tech, idx) => (
          <div
            key={idx}
            className="tech-item"
            style={{
              animationDelay: `${(idx % 6) * 0.08}s`,
            }}
            title={tech.name}
          >
            <div className="tech-icon-box">
              <span className="tech-icon">{tech.icon}</span>
            </div>
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
