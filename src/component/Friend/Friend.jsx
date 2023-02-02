import s from "./Friend.module.css";
import React from "react";

const Friend = (props) => {
  return (
    <div className={s.friends}>
      Friends
      <div className={s.friends_online}>
        <img src={props.state.img} alt="" />
      </div>
    </div>
  );
};

export default Friend;
