import { useState, useEffect, useRef } from "react";
import Navbar from "../sectionElements/Navbar";
import ListGroupSocial from "../sectionElements/ListGroupSocial";
import { Link as ScrollLink } from "react-scroll";
// import HeadlessDemo from "../sectionElements/Sidebar";
import SidebarSocial from "../sectionElements/SidebarSocial";
import { px } from "framer-motion";
import content from "../../content/content";
import links from "../../content/links";
import Button from "../interactives/Button";

const whatsappContactLink = `` + `${links.ctaWhatsapp}`;

export default function NavbarSocial() {
  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sidebarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleSidebar = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowMenuIcon(!showMenuIcon);
      setShowSidebarContent(!showSidebarContent);
      if (showSidebar) {
        setTimeout(() => {
          setShowSidebar(false);
          setIsAnimating(false);
        }, 950);
      } else {
        setShowSidebar(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 0);
      }
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowListGroup(false);
    } else {
      setShowListGroup(true);
    }
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleCloseSidebar();
    }
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setShowSidebarContent(false);
    setIsAnimating(false);
    setShowMenuIcon(true);
  };

  const handleSidebarItemClick = () => {
    handleCloseSidebar();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className={`fixed z-20 w-full transition-colors duration-1000 ${
          scrolling
            ? "bg-lighter bg-opacity-100 shadow-lg transition-all duration-1000"
            : "transition-colors duration-1000"
        }`}
      >
        <Navbar>
          <ScrollLink
            to="home"
            className="flex items-center cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            href="#"
          >
            <img
              src={content.texts.navbar.logo.img}
              alt={content.texts.navbar.logo.alt}
              className={`${
                scrolling
                  ? "w-[20%] max-w-[50%] tablet2:w-[40%] tablet2:max-w-[40%] desktop1:w-[60%] desktop1:max-w-[20%] transition-all duration-1000 "
                  : "my-[20px] w-[20%] tablet1:w-[60%] tablet2:w-[50%] desktop1:w-[70%] desktop2:w-[100%] transition-all duration-1000 "
              } tablet3:mb-0`}
            />
            <div
              className={`${
                scrolling
                  ? "text-secondary  tablet1:text-title1 desktop1:text-paragraph5 desktop2:text-title1"
                  : "text-white  tablet1:text-title1 desktop1:text-paragraph3 desktop2:text-title1"
              } transition-all duration-1000 ml-[22px] h-auto`}
            >
              <h1 className="font-bold">DESCÃOPLICANDO</h1>
            </div>
          </ScrollLink>
          <div className="flex items-center justify-between gap-[16px]">
            <div
              className={`hidden tablet1:flex desktop1:hidden ${
                scrolling ? "" : ""
              }`}
            >
              <Button
                aria-label={content.texts.hero.ctaButtonAriaLabel}
                label={content.texts.navbar.ctaButtonTextResponsive}
                buttonLink={whatsappContactLink}
                className={`${scrolling ? "" : ""}`}
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 18 18"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                }
              />
            </div>
            <div
              className={`flex items-center desktop1:hidden ${
                scrolling ? "" : ""
              } `}
            >
              <SidebarSocial />
            </div>
          </div>
          {showListGroup ? <ListGroupSocial /> : null}
        </Navbar>
      </div>
    </div>
  );
}
