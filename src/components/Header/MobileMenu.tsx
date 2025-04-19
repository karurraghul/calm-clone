import { useState } from 'react';
import { NavItem } from '../../types';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationData: Record<string, NavItem[]>;
}

const MobileMenu = ({ isOpen, onClose, navigationData }: MobileMenuProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
      <div className="mobile-menu-header">
        <button className="mobile-menu-close" onClick={onClose}>
          <span className="close-icon"></span>
        </button>
      </div>
      
      <nav className="mobile-menu-nav">
        <ul className="mobile-menu-list">
          {navigationData.main.map((item) => (
            <li key={item.label} className="mobile-menu-item">
              <a href={item.href} className="mobile-menu-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Company Section */}
        <div className="mobile-accordion">
          <button 
            className="mobile-accordion-trigger"
            onClick={() => toggleSection('company')}
            aria-expanded={expandedSection === 'company'}
          >
            Company
            <span className={`accordion-icon ${expandedSection === 'company' ? 'accordion-icon-expanded' : ''}`}></span>
          </button>
          
          <div className={`mobile-accordion-content ${expandedSection === 'company' ? 'mobile-accordion-expanded' : ''}`}>
            <ul className="mobile-submenu-list">
              {navigationData.company.map((item) => (
                <li key={item.label} className="mobile-submenu-item">
                  <a href={item.href} className="mobile-submenu-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offers Section */}
        <div className="mobile-accordion">
          <button 
            className="mobile-accordion-trigger"
            onClick={() => toggleSection('offers')}
            aria-expanded={expandedSection === 'offers'}
          >
            Offers
            <span className={`accordion-icon ${expandedSection === 'offers' ? 'accordion-icon-expanded' : ''}`}></span>
          </button>
          
          <div className={`mobile-accordion-content ${expandedSection === 'offers' ? 'mobile-accordion-expanded' : ''}`}>
            <ul className="mobile-submenu-list">
              {navigationData.offers.map((item) => (
                <li key={item.label} className="mobile-submenu-item">
                  <a href={item.href} className="mobile-submenu-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Help Section */}
        <div className="mobile-accordion">
          <button 
            className="mobile-accordion-trigger"
            onClick={() => toggleSection('help')}
            aria-expanded={expandedSection === 'help'}
          >
            Help
            <span className={`accordion-icon ${expandedSection === 'help' ? 'accordion-icon-expanded' : ''}`}></span>
          </button>
          
          <div className={`mobile-accordion-content ${expandedSection === 'help' ? 'mobile-accordion-expanded' : ''}`}>
            <ul className="mobile-submenu-list">
              {navigationData.help.map((item) => (
                <li key={item.label} className="mobile-submenu-item">
                  <a href={item.href} className="mobile-submenu-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="mobile-menu-actions">
        <a href="/login" className="mobile-btn-login">
          Log in
        </a>
        <a href="/signup" className="btn btn-primary mobile-btn-signup">
          Sign up free
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;