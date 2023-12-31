import { IconContext } from "react-icons";
import styles from "./TopNavBar.module.css";
import Search from "./components/Search";
import Menu from "./components/Menu";

const TopNavBar = () => {
  return (
    <div className={`${styles.topNav}`}>
      <IconContext.Provider value={{ className: `${styles.search_icon}` }}>
        <Search searchStyle={styles} />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: `${styles.menu_icons}` }}>
        <Menu menu={styles} />
      </IconContext.Provider>
    </div>
  );
};

export default TopNavBar;
