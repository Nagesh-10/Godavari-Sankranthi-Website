import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/places', label: 'Famous Places' },
  { to: '/food', label: 'Famous Food' },
  { to: '/events', label: 'Sankranthi Events' },
  { to: '/temples', label: 'Temples' },
  { to: '/plan', label: 'Date-wise Plan' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          Godavari Sankranthi
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={mobileMenuOpen ? 'nav-open' : ''}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? 'nav-link nav-link-active' : 'nav-link'
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="cta header-cta" to="/plan" onClick={() => setMobileMenuOpen(false)}>
          Plan Your Visit
        </Link>
      </div>
    </header>
  );
}
