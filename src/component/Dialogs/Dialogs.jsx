import s from "./Dialogs.module.css";
import React from "react";
import DialogsItem from "./DialogsItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let messageElement = props.state.message.map((message) => (
    <Messages message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>{dialogsElement}</div>
      <div className={s.messages}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
