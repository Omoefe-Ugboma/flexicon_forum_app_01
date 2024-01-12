import { IoIosNotifications } from "react-icons/io";
const Menu = ({menu}) => {
  return (
    <div className={menu.menu_Container}>
      <IoIosNotifications />
      <button>Login</button>
      <button>Sign up</button>
    </div>
  );
};

export default Menu;
