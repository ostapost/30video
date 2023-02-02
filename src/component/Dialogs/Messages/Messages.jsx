import s from "./Messages.module.css";

const Messages = (props) => {
  return <div className={s.messag_item}>{props.message}</div>;
};

export default Messages;
