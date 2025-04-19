import { NavItem } from '../../types';
import './NavDropdown.css';

interface NavDropdownProps {
  items: NavItem[];
}

const NavDropdown = ({ items }: NavDropdownProps) => {
  return (
    <div className="nav-dropdown">
      <ul className="nav-dropdown-list">
        {items.map((item) => (
          <li key={item.label} className="nav-dropdown-item">
            <a href={item.href} className="nav-dropdown-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDropdown;