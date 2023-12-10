import styles from "./DisplayPost.module.css";
import data from "../../../data/db.json";
import { Downvote, Reply, Upvote } from "../../../assets/icons";

const DisplayPost = () => {
  console.log(data);
  return (
    <div className={styles.container_1}>
      <div className={styles.content_box}>
        <div className={styles.info}>
          <div className={styles.profile}>
            <div className={styles.profile_img}></div>
            <h5>{data.Users[0].username}</h5>
          </div>
          <div className={styles.time}></div>
        </div>
        <p>{data.Posts[0].content}</p>
        <div className={styles.communication}>
          <div className={styles.voting}>
            <button>
              <Upvote />
            </button>
            <p>{data.Posts[0].upvotes}</p>
            <button>
              <Downvote />
            </button>
          </div>
          <div className={styles.voting}>
            <button>
              <Reply />
            </button>
            <p>{data.Posts[0].replies}</p>
          </div>
        </div>
      </div>

      {/* media */}
      <div className={styles.container_2}>
        <div className={styles.media}></div>
      </div>
    </div>
  );
};

export default DisplayPost;
