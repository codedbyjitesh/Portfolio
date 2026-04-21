import "./about.css";
import CodingStats from "./CodingStats";
import LocationCard from "./LocationCard";
import LifestyleCard from "./LifestyleCard";
import {  Zap,Edit3, Dumbbell,BookOpen,Gamepad2} from "lucide-react";

export default function About() {
  const lifestyleData = [
  {
    title: "Fast Learner",
    desc: "Quickly grasp new concepts and technologies, adapting efficiently to new tools and development environments.",
    icon: Zap,
  },
  {
    title: "Knowledge Sharing",
    desc: "Enjoy sharing what I learn and helping others while also learning from different perspectives.",
    icon: Edit3,
  },
  {
    title: "Active Lifestyle",
    desc: "Maintain a healthy routine with workouts and morning running to stay disciplined and focused.",
    icon: Dumbbell,
  },
  {
    title: "Manga Reader",
    desc: "Enjoy reading manga in my free time as a way to relax and stay creatively inspired.",
    icon: BookOpen,
  },
  {
    title: "Gaming Enthusiast",
    desc: "Love playing games that involve strategy, creativity, and problem-solving.",
    icon: Gamepad2,
  },
];

  return (
    <div className="about">
      {/* Title */}
      <div className="title-block">
        <h1 className="title">
          JITESH Bind <span>👨‍💻</span>
        </h1>
        <div className="underline"></div>
      </div>

      {/* Terminal - About */}
      <p className="terminal">$ cat about.txt 👨‍💻</p>

      {/* Description */}
      <div className="description-section">
        <p>
          Hi, I'm <span className="highlight">Jitesh Bind</span>, a Full Stack 
          Developer passionate about building modern, responsive, and user-friendly 
          web applications 🚀. I enjoy turning ideas into functional products and 
          continuously improving my problem-solving skills.
        </p>

        <p>
          With experience in JavaScript and Python, I specialize in the 
          <strong> MERN Stack</strong> and <strong>Django</strong> 🌐. By leveraging tools 
          like React, Node.js, and databases such as MongoDB and MySQL 🗄️, 
          I’m focused on building scalable backend systems and seamless user experiences.
        </p>

        <p>
          I’m a self-motivated learner 📚, a team player 🤝, and someone who genuinely 
          enjoys coding and building impactful projects 👨‍💻.
        </p>
      </div>
      <p className="highlight-line">
        Outside of development, I enjoy basketball 🏀, gaming 🎮, and photography 📷.
      </p>

      {/* Coding Stats */}
      <p className="terminal">$ ls -al coding-stats</p>

      <div className="stats-grid">
        <CodingStats />
        <LocationCard />
      </div>

      {/* Lifestyle */}
      <p className="terminal">$ ls -al lifestyle</p>

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