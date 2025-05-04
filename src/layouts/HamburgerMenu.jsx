import { NavLink, useLocation } from "react-router";
import { menuItems } from "./menu-list.js";
import "../assets/scss/components/hamburger.scss";
import PropTypes from "prop-types";

function HamburgerMenu({ isOn, closeFn }) {
  const { pathname } = useLocation();

  return (
    <nav className={`burger-nav ${isOn ? "on" : null}`}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.to}
              className={({ isActive }) => {
                const isAdminPath = item.to.includes("/admin");
                return isActive || (isAdminPath && pathname.includes("/admin")) ? "gnb-menu-btn on" : "gnb-menu-btn";
              }}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (closeFn) {
            closeFn();
          }
        }}
      >
        <img src="/img/main-icons/ic_cancle_small-24x24.svg" alt="취소" />
      </button>
    </nav>
  );
}
export default HamburgerMenu;

HamburgerMenu.propTypes = {
  isOn: PropTypes.bool,
  closeFn: PropTypes.func,
};
