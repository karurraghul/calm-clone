import { navigationData } from '../../data/mockData';
import Logo from '../Header/Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="footer-nav">
            <div className="footer-nav-section">
              <h3 className="footer-nav-title">Main</h3>
              <ul className="footer-nav-list">
                {navigationData.main.map((item) => (
                  <li key={item.label} className="footer-nav-item">
                    <a href={item.href} className="footer-nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-nav-section">
              <h3 className="footer-nav-title">Company</h3>
              <ul className="footer-nav-list">
                {navigationData.company.map((item) => (
                  <li key={item.label} className="footer-nav-item">
                    <a href={item.href} className="footer-nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-nav-section">
              <h3 className="footer-nav-title">Offers</h3>
              <ul className="footer-nav-list">
                {navigationData.offers.map((item) => (
                  <li key={item.label} className="footer-nav-item">
                    <a href={item.href} className="footer-nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-nav-section">
              <h3 className="footer-nav-title">Help</h3>
              <ul className="footer-nav-list">
                {navigationData.help.map((item) => (
                  <li key={item.label} className="footer-nav-item">
                    <a href={item.href} className="footer-nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://twitter.com/calm" className="footer-social-link" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3.01001C22.0424 3.68001 20.9821 4.20301 19.86 4.56001C19.2577 3.85725 18.4573 3.34192 17.567 3.08481C16.6767 2.82771 15.7395 2.84424 14.8821 3.13137C14.0247 3.41851 13.2884 3.96139 12.773 4.68544C12.2575 5.4095 11.9877 6.27762 12 7.16001V8.16001C10.2426 8.20767 8.50127 7.80648 6.93101 6.99552C5.36074 6.18457 4.01032 4.99408 3 3.54001C3 3.54001 -1 13 8 17C5.94053 18.398 3.48716 19.0991 1 19C10 24 21 19 21 7.09001C20.9991 6.81648 20.9723 6.54372 20.92 6.27001C21.9406 5.17677 22.6608 3.8236 23 2.36001V3.01001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://facebook.com/calm" className="footer-social-link" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://instagram.com/calm" className="footer-social-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://youtube.com/calm" className="footer-social-link" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57883 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.57883 17.5546 1.82072 17.9894 2.16135 18.3406C2.50198 18.6918 2.92925 18.9468 3.4 19.08C5.12 19.54 12 19.54 12 19.54C12 19.54 18.88 19.54 20.6 19.08C21.0708 18.9468 21.498 18.6918 21.8387 18.3406C22.1793 17.9894 22.4212 17.5546 22.54 17.08C22.8524 15.3427 22.9981 13.5733 23 11.75C23.0113 9.96295 22.8568 8.1787 22.54 6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.75 15.02L15.5 11.75L9.75 8.47998V15.02Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="footer-info">
            <p className="copyright">© {new Date().getFullYear()} Calm. All rights reserved.</p>
            <p className="footer-legal">
              <a href="/terms">Terms</a> · <a href="/privacy">Privacy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;