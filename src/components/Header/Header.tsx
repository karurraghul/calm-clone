import { useState, useEffect } from 'react';
import './Header.css';
import { navigationData } from '../../data/mockData';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavDropdown from './NavDropdown';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="/" className="header-logo">
          <Logo />
        </a>

        <nav className="header-nav">
          <ul className="nav-list">
            {navigationData.main.map((item) => (
              <li key={item.label} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-dropdown-wrapper">
              <button className="nav-dropdown-trigger">Company</button>
              <NavDropdown items={navigationData.company} />
            </li>
            <li className="nav-dropdown-wrapper">
              <button className="nav-dropdown-trigger">Offers</button>
              <NavDropdown items={navigationData.offers} />
            </li>
            <li className="nav-dropdown-wrapper">
              <button className="nav-dropdown-trigger">Help</button>
              <NavDropdown items={navigationData.help} />
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="/login" className="btn-login">
            Log in
          </a>
          <a href="/signup" className="btn btn-primary">
            Sign up free
          </a>
          <button
            className="mobile-menu-toggle"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-icon"></span>
          </button>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        navigationData={navigationData}
      />
    </header>
  );
};

export default Header;