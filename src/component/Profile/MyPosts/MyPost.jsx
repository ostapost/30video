import s from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  // let posts = [
  //   { id: "1", message: "It's my first Post", likeCount: "0" },
  //   { id: "2", message: "Hi, kurva", likeCount: "10" },
  // ];

  let postElement = props.postsArr.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  return (
    <div className={s.myPost}>
      <b> MY POST </b>
      <textarea></textarea>
      <div>
        <button>Add</button>
      </div>
      <div> New Post</div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
}

export default MyPosts;
