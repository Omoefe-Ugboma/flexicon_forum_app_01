import styles from "./Posts.module.css";
import data from "../../data/db.json";
import Content from "../../components/content/Content";
import PostInfo from "./components/PostInfo";
import PostActions from "./components/PostActions";

const Posts = () => {
  return (
    <>
      {data.posts.map((post) => {
        return (
          <div className={styles.container} key={post.id}>
            <div className={styles.contents_box}>
              <PostInfo styles={styles} info={post.user_id} />
              <Content content={post.content} />
              <PostActions styles={styles} post={post} />
            </div>
            <div className={styles.media_box}></div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
