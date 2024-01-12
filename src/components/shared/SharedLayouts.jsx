import { Outlet } from "react-router-dom";
import NavBar from "../../features/nav_bar/NavBar";
import TopNavBar from "../../features/top_navbar/TopNavBar";
import Modal from "../Modal";

function SharedLayouts() {
  const style = {
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  return (
    <div className="appGrid">
      <NavBar />
      <div style={style}>
        {/* <Modal/> */}
        <TopNavBar />
        <Outlet />
      </div>
    </div>
  );
}
export default SharedLayouts;
