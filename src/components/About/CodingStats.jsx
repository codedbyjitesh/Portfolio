import "./codingStats.css";
import { FaLinux, FaPython, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiPhp, SiTensorflow } from "react-icons/si";

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
                <SiCplusplus />
                <SiPhp />
                <SiTypescript />
                <FaLinux />
                <FaPython />
                <SiTensorflow />
                <FaNodeJs />
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SCROLL */}
        <div className="row row-right">
          <div className="track">
            {[...Array(3)].map((_, i) => (
              <span key={i}>
                <FaNodeJs />
                <SiTensorflow />
                <FaPython />
                <FaLinux />
                <SiTypescript />
                <SiPhp />
                <SiCplusplus />
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}