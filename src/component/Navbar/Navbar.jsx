import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

// import s from "./Online.module.css";

const Navbar = (props) => {
  const OnlinePhoto = () => {
    return (
      <div className={s.online_point}>
        <img className={s.photo_img} src={props.state.img}></img>
      </div>
    );
  };
  return (
    <nav className={s.nav}>
      {/* <div className={s.el}> */}
      <NavLink
        to="/profile"
        className={(navData) => (navData.isActive ? s.active : s.el)}
      >
        Profile
      </NavLink>
      {/* </div> */}
      <NavLink
        to="/dialogs "
        className={(navData) => (navData.isActive ? s.active : s.el)}
      >
        Messages
      </NavLink>
      <NavLink
        to="/friends"
        className={(navData) => (navData.isActive ? s.active : s.el)}
      >
        Friends
      </NavLink>
      <div>
        <NavLink
          to="/photo"
          className={(navData) => (navData.isActive ? s.active : s.el)}
        >
          Photo
        </NavLink>
        <div className={s.online_photo}>
          <OnlinePhoto />
          <OnlinePhoto />
          <OnlinePhoto />
        </div>
      </div>

      <NavLink
        to="/setting"
        className={(navData) => (navData.isActive ? s.active : s.el)}
      >
        Setting
      </NavLink>
    </nav>
  );
};

export default Navbar;
