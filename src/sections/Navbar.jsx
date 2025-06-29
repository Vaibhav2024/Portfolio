import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
      <li className="nav-li">
        <a
          href="https://vaibhavpatil.vercel.app/MyCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link font-semibold text-sm hover:text-white"
        >
          Resume
        </a>
      </li>
      <li className="nav-li">
        <a
          href="https://github.com/Vaibhav2024"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="/assets/socials/github.svg"
            alt="GitHub"
            className="w-5 h-5 hover:scale-110 transition-transform"
          />
        </a>
      </li>
      <li className="nav-li">
        <a
          href="https://www.linkedin.com/in/vaibhavpatil36/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="/assets/socials/linkedIn.svg"
            alt="LinkedIn"
            className="w-5 h-5 hover:scale-110 transition-transform"
          />
        </a>
      </li>
      <li className="nav-li">
        <a
          href="https://wa.me/919146224887"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="/assets/socials/whatsApp.svg"
            alt="WhatsApp"
            className="w-5 h-5 hover:scale-110 transition-transform"
          />
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Vaibhav Patil
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
