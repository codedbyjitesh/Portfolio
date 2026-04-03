import "./navbar.css";

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <div className="navbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "active" : ""}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}