import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogsItem = (props) => {
  return (
    <div className={s.dialog_item}>
      <img className={s.image} src={props.img}></img>
      <NavLink to={/dialogs/ + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem;
