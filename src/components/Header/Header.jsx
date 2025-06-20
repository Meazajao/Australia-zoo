import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import zoo_logo from "../../assets/logo.png"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={zoo_logo} alt="Zoo Logo" />
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
          Home
        </NavLink>
        <NavLink to="/mammals" className={({ isActive }) => isActive ? styles.active : ""}>
          Mammals
        </NavLink>
        <NavLink to="/birds" className={({ isActive }) => isActive ? styles.active : ""}>
          Birds
        </NavLink>
        <NavLink to="/reptiles" className={({ isActive }) => isActive ? styles.active : ""}>
          Reptiles
        </NavLink>
      </nav>
    </header>
  );
}
