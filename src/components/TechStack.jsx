import React from "react";
import "../styles/TechStack.css";
export const TechStack = () => {
  const techs = [
    // Languages
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    // Frontend/Mobile
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    // Backend/APIs
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "REST APIs",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "Postman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "Salesforce",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg",
    },
    // Databases
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "SQL Server",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    // Tools/Platforms
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      color: "#F1502F",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      color: "#181717",
    },
    {
      name: "Jest",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
      color: "#C21325",
    },
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "IntelliJ IDEA",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    },
    {
      name: "Maven",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
    },
    {
      name: "OpenCV",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-original.svg",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
    },
  ];

  return (
    <div className="tech-stack-wrapper">
      <div className="tech-grid">
        {techs.map((tech, itemIdx) => (
          <div
            key={itemIdx}
            className="tech-item"
            style={{
              animationDelay: `${itemIdx * 0.05}s`,
            }}
            title={tech.name}
          >
            <div className="tech-icon-box">
              <img
                src={tech.logo}
                alt={tech.name}
                className="tech-logo"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechStack;
