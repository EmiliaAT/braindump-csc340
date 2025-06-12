import type { ChangeEvent } from "react";
import "./Header.css";

export interface HeaderProps {
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onNavigate: (key: "dashboard") => void;
}

export default function Header({ onSearch, onNavigate }: HeaderProps) {
  return (
    <header className="header-container">
      {/* Header Title */}
      <div className="header-title-container">
        <button type="button" className="header-title-text">
          Brain<span className="title-accent">Dump</span>
        </button>
      </div>
      {/* Header Search */}
      <div className="header-search-container">
        <input
          type="text"
          className="header-search-field"
          onChange={onSearch}
        />
      </div>
      {/* Header Navbar */}
      <nav className="header-navbar-container">
        <button
          type="button"
          className="header-navbar-item"
          onClick={() => {
            onNavigate("dashboard");
          }}
        >
          Dashboard
        </button>
      </nav>
    </header>
  );
}
