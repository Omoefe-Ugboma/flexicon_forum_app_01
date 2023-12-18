import styles from "./CreatePosts.module.css";
import ProfileImage from "../../components/profile_img/ProfileImg";
import PlaceHolder from "./components/PlaceHolder";

const CreatePosts = () => {
  return (
    <div className={styles.container}>
      <ProfileImage styles={styles} />
      <PlaceHolder styles={styles}/>
    </div>
  );
};

export default CreatePosts;
