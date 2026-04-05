import "./codingStats.css";
import { FaLinux, FaPython, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiPhp, SiMongodb, SiExpress, SiMysql } from "react-icons/si";

export default function CodingStats() {
  return (
    <div className="card">
      <p className="card-title">⚡ Stacks</p>

      <div className="icons">

        {/* LEFT SCROLL */}
        <div className="row row-left">
          <div className="track">
            {[...Array(3)].map((_, i) => (
              <span key={i}>
                <FaReact />
                <FaNodeJs />
                <SiExpress />
                <SiMongodb />
                <SiMysql />
                <FaPython />
                <SiPhp />
                <FaLinux />
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SCROLL */}
        <div className="row row-right">
          <div className="track">
            {[...Array(3)].map((_, i) => (
              <span key={i}>
                <FaLinux />
                <SiPhp />
                <FaPython />
                <SiMysql />
                <SiMongodb />
                <SiExpress />
                <FaNodeJs />
                <FaReact />
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}