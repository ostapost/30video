import MyPost from "./MyPosts/MyPost";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPost postsArr={props.state.posts} />
    </div>
  );
};

export default Profile;
