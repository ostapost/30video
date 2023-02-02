import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <>
      <img
        className={s.content_img}
        src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8&w=1000&q=80"
      ></img>
      <div className={s.description}> ava + description</div>
    </>
  );
};

export default ProfileInfo;
