//React icons
import { AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

//Assets
import acmLogo from '../assets/acmLogo.webp';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={acmLogo} alt="ACM Logo" className="acm-logo" />
                </div>
                <div className="footer-right">
                    <a href="https://www.instagram.com/acmjuit/" target='_blank'>
                        <AiOutlineInstagram className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/acmjuit/mycompany/" target='_blank'>
                        <AiFillLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/ACM-JUIT" target='_blank'>
                        <AiOutlineGithub className="social-icon" />
                    </a>
                </div>
            </div>
            <hr className="divider" />
            <div className="copyright">Copyright &copy; ACM-JUIT 2023</div>
        </footer>
    );
};

export default Footer;
