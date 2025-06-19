// src/components/Header.tsx
import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>나의 메모장</h1>
      <nav>
        <a href="/">홈</a>
        <a href="/todo_List">TodoList</a>
      </nav>
    </header>
  );
};

export default Header;
