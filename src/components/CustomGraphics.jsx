import React from "react";
import "../styles/CustomGraphics.css";

export const AnimatedCode = () => (
  <svg
    className="animated-code"
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="codeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
      <linearGradient id="codeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f093fb" />
        <stop offset="100%" stopColor="#f5576c" />
      </linearGradient>
    </defs>

    {/* Code window */}
    <rect
      x="20"
      y="20"
      width="360"
      height="260"
      rx="10"
      fill="none"
      stroke="url(#codeGrad1)"
      strokeWidth="2"
      opacity="0.6"
    />

    {/* Window header */}
    <rect
      x="20"
      y="20"
      width="360"
      height="40"
      rx="10"
      fill="url(#codeGrad1)"
      opacity="0.1"
    />

    {/* Traffic lights */}
    <circle cx="40" cy="40" r="4" fill="#ff5f56" opacity="0.8" />
    <circle cx="55" cy="40" r="4" fill="#ffbd2e" opacity="0.8" />
    <circle cx="70" cy="40" r="4" fill="#27c93f" opacity="0.8" />

    {/* Code lines */}
    <text
      x="35"
      y="75"
      fontSize="14"
      fill="#667eea"
      fontFamily="monospace"
      opacity="0.8"
    >
      <tspan x="35">const App = ()</tspan>
    </text>
    <text
      x="35"
      y="100"
      fontSize="14"
      fill="#764ba2"
      fontFamily="monospace"
      opacity="0.8"
    >
      <tspan x="35">return &lt;Portfolio /&gt;</tspan>
    </text>
    <text
      x="35"
      y="125"
      fontSize="14"
      fill="#f093fb"
      fontFamily="monospace"
      opacity="0.8"
    >
      <tspan x="35">{}</tspan>
    </text>

    {/* Cursor blink */}
    <line
      x1="55"
      y1="155"
      x2="55"
      y2="175"
      stroke="#f093fb"
      strokeWidth="2"
      className="cursor-blink"
    />
  </svg>
);

export const DataVisualization = () => (
  <svg
    className="data-visualization"
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="barGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
      <linearGradient id="barGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#f093fb" />
        <stop offset="100%" stopColor="#f5576c" />
      </linearGradient>
      <linearGradient id="barGrad3" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#4facfe" />
        <stop offset="100%" stopColor="#00f2fe" />
      </linearGradient>
    </defs>

    {/* Grid lines */}
    <line
      x1="50"
      y1="50"
      x2="350"
      y2="50"
      stroke="#e0e0e0"
      strokeWidth="1"
      opacity="0.3"
    />
    <line
      x1="50"
      y1="120"
      x2="350"
      y2="120"
      stroke="#e0e0e0"
      strokeWidth="1"
      opacity="0.3"
    />
    <line
      x1="50"
      y1="190"
      x2="350"
      y2="190"
      stroke="#e0e0e0"
      strokeWidth="1"
      opacity="0.3"
    />
    <line
      x1="50"
      y1="250"
      x2="350"
      y2="250"
      stroke="#e0e0e0"
      strokeWidth="1"
      opacity="0.3"
    />

    {/* Bars with animation */}
    <rect
      x="70"
      y="140"
      width="40"
      height="110"
      rx="4"
      fill="url(#barGrad1)"
      className="bar-chart"
      style={{ animationDelay: "0s" }}
    />
    <rect
      x="130"
      y="100"
      width="40"
      height="150"
      rx="4"
      fill="url(#barGrad2)"
      className="bar-chart"
      style={{ animationDelay: "0.1s" }}
    />
    <rect
      x="190"
      y="80"
      width="40"
      height="170"
      rx="4"
      fill="url(#barGrad3)"
      className="bar-chart"
      style={{ animationDelay: "0.2s" }}
    />
    <rect
      x="250"
      y="110"
      width="40"
      height="140"
      rx="4"
      fill="url(#barGrad1)"
      className="bar-chart"
      style={{ animationDelay: "0.3s" }}
    />

    {/* Labels */}
    <text x="85" y="270" fontSize="12" fill="#667eea" textAnchor="middle">
      JS
    </text>
    <text x="145" y="270" fontSize="12" fill="#764ba2" textAnchor="middle">
      React
    </text>
    <text x="205" y="270" fontSize="12" fill="#4facfe" textAnchor="middle">
      Node
    </text>
    <text x="265" y="270" fontSize="12" fill="#667eea" textAnchor="middle">
      DB
    </text>
  </svg>
);

export const FloatingParticles = () => (
  <svg
    className="floating-particles"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="particleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
    </defs>

    {/* Particles */}
    {[...Array(15)].map((_, i) => (
      <circle
        key={i}
        cx={Math.random() * 200}
        cy={Math.random() * 200}
        r={Math.random() * 3 + 1}
        fill="url(#particleGrad)"
        opacity={Math.random() * 0.5 + 0.3}
        className="particle"
        style={{
          animation: `floatParticle ${
            Math.random() * 4 + 3
          }s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </svg>
);

export default { AnimatedCode, DataVisualization, FloatingParticles };
