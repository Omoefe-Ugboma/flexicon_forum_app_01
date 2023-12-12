import ProfileImage from "../../../components/profile_img/ProfileImg";

const PostInfo = ({ styles, info }) => {
  return (
    <div className={styles.postInfo}>
      <ProfileImage styles={styles} />
      <h5>user {info}</h5>
    </div>
  );
};

export default PostInfo;
