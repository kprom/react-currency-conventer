import logo from "../../images/panda.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.title}>
      <img className={styles.logo} src={logo} alt="app-logo" />
      <h1 className={styles.heading}>CURRENCY CONVERTER</h1>
    </header>
  );
};

export default Header;
