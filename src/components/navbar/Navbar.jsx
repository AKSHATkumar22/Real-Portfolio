import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebars */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Akshat Kumar */}
        </motion.span>
        {/* <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
            <img src="/instagram.png" alt="" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
