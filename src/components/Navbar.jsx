import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <NavLink to="/">미손소리</NavLink>
        </div>
        <button className="menu-toggle" aria-label="메뉴 열기" onClick={() => setOpen((v) => !v)}>≡</button>
        <div className={`nav-links${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">홈</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/education">교육</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/background">이력</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/performances">공연</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/interpretation">문화 해석</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/community">지역·커뮤니티</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/blog">블로그</NavLink>
        </div>
      </div>
    </nav>
  );
} 