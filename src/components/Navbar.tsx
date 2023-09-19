import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarOpaque(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    if(id==='home'){
      window.scrollTo({ top: 0, behavior: "smooth" });
    }else{
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isNavbarOpaque ? "opaque" : ""}`}>
      <div className="navbar-container">
        <FaBars className="checkbtn" onClick={toggleMenu} />
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a onClick={() => scrollToSection("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("guidelines")}>Guidelines</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("sponsors")}>Sponsors</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("register")}>Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
