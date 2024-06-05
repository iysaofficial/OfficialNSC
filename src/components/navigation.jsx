import "../assets/css/styles.css";
import React, { useState, useEffect } from "react";
import logo from "/assets/logo/NSC.png";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteBrandText, setSiteBrandText] = useState(
    window.innerWidth < 426 ? "NSC" : "NATIONAL SCIENCE COMPETITION"
  );
  const [winnersOpen, setWinnersOpen] = useState(false);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleWinners = () => {
    setWinnersOpen(!winnersOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 420) {
        setSiteBrandText("WSC");
      } else {
        setSiteBrandText("NATIONAL SCIENCE COMPETITION");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div id="menuHolder" className={menuOpen ? "drawMenu" : ""}>
        <div
          role="navigation"
          className="sticky-top border-bottom border-top"
          id="mainNavigation"
        >
          <div className="flexMain" >
            <div className="flex3 text-center" id="siteBrand">
              {siteBrandText === "WSC" ? (
                <img src={logo} alt="WSC Logo" style={{ width: "90px" }} />
              ) : (
                "NATIONAL SCIENCE COMPETITION"
              )}
            </div>
            <div className="flex">
              <button
                className="whiteLink siteLink"
                style={{ borderRight: "1px solid #eaeaea" }}
                onClick={menuToggle}
              >
                MENU <i className="fas fa-bars ms-2"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="menuDrawer">
          <div className="p-4 border-bottom">
            <div className="row">
              <div className="col text-start">
                <i
                  className="fas fa-times"
                  role="button"
                  onClick={menuToggle}
                ></i>
              </div>
            </div>
          </div>
          <div>
            <a href="/" className="nav-menu-item">
              <i className="fas fa-home me-3"></i>Beranda
            </a>
            <a href="/#About" className="nav-menu-item">
              <i className="fas fa-building me-3"></i>Tentang Kami
            </a>
            <a href="/faq" className="nav-menu-item">
              <i className="fas fa-file-alt me-3"></i>FAQ
            </a>
            <a href="/#Contact" className="nav-menu-item">
              <i className="fas fa-phone me-3"></i>Kontak
            </a>
            {/* <a href="/tahun" className="nav-menu-item"><i className="fas fa-book me-3"></i>List Of Winner</a> */}

            {/* NAVIGASI DROPDOWN */}
            {/* <a href="#" className="nav-menu-item" onClick={toggleWinners}><i className="fas fa-search me-3"></i>List of Winners</a>
                        {winnersOpen && (
                            <div className="submenu">
                                <a href="#" className="nav-menu-item"><i className="fas fa-calendar me-3"></i>2022</a>
                                <a href="#" className="nav-menu-item"><i className="fas fa-calendar me-3"></i>2023</a>
                                <a href="#" className="nav-menu-item"><i className="fas fa-calendar me-3"></i>2024</a>
                            </div>
                        )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
