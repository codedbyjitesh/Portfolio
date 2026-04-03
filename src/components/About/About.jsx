import "./about.css";
import CodingStats from "./CodingStats";
import LocationCard from "./LocationCard";
import LifestyleCard from "./LifestyleCard";
import { GitBranch, Edit3, Target, Camera, Gamepad2 } from "lucide-react";
export default function About() {
  const lifestyleData = [
    {
      title: "Open Source Enthusiast",
      desc: "Committed to advancing the tech community through active contributions to GitHub projects in AI, computer vision, and software engineering.",
      icon: GitBranch, // Matches the 'branch/fork' icon
    },
    {
      title: "Knowledge Sharer",
      desc: "Dedicated to mentoring and sharing insights on data science, computer vision, and AI advancements.",
      icon: Edit3, // Matches the pencil icon
    },
    {
      title: "Active Lifestyle",
      desc: "Strive for balance with basketball games and fitness routines that fuel my creativity and focus.",
      icon: Target, // Matches the target/circle icon
    },
    {
      title: "Creative Photographer",
      desc: "Find inspiration through photography—capturing the vastness of skies and the vibrance of urban life.",
      icon: Camera, // Matches the image/camera icon
    },
    {
      title: "Gaming Enthusiast",
      desc: "Dive into immersive gaming experiences, blending strategy, creativity, and a passion for design.",
      icon: Gamepad2, // Matches the controller icon
    },
  ];
  return (
    <div className="about">
      {/* Title */}
      <div className="title-block">
        <h1 className="title">
          HAMZAOUI Amine <span>👨‍💻</span>
        </h1>
        <div className="underline"></div>
      </div>

      {/* Terminal */}
      <p className="terminal">$ ls -al sabo 👨‍💻</p>

      {/* Description */}
      <div className="description-section">
        <p>
          Hi, I'm <span className="highlight">Hamzaoui Amine</span>, a Visual
          Computing Engineer with a passion for AI 🤖, Computer Vision 👁️,
          and Machine Learning 📊. I focus on developing innovative AI models, 
          intelligent agents, and AI-powered mobile applications 📱 that solve 
          real-world problems.
        </p>

        <p>
          With a strong engineering background and a curiosity for deep learning 
          and automation 🔌, I strive to push the boundaries of technology. I'm 
          also an open-source contributor 🌐, mentor, and lifelong learner 📚.
        </p>

        <p>
          Outside of work, I enjoy basketball 🏀, gaming 🎮, photography 📷, 
          and storytelling 🖋️. Let's connect to explore my work!.
        </p>
      </div>

      <p className="highlight-line">
        Self-motivated, Team player, AI Enthusiast, Love coding 👨‍💻
      </p>

      {/* Coding Stats */}
      <p className="terminal">$ ls -al Coding Stats</p>

      <div className="stats-grid">
        <CodingStats />
        <LocationCard />
      </div>
      {/* Lifestyle Cards */}
      <p className="terminal">$ ls -al Life Style</p>
      <div className="lifestyle-grid">
        {lifestyleData.map((item, index) => (
          <LifestyleCard 
            key={index} 
            Icon={item.icon} 
            title={item.title} 
            desc={item.desc} 
          />
        ))}
      </div>

    </div>
  );
}