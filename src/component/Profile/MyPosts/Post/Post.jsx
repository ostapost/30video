import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.post_img}
        src="https://i.pinimg.com/736x/90/4f/b1/904fb1a2af729e82388c220bc52181b8.jpg"
      ></img>
      <div>{props.message}</div>
      <div>
        Like
        <button>{props.likeCount}</button>
      </div>
    </div>
  );
};

export default Post;
