import { Upvote, Downvote, Reply } from "../../../assets/icons";
import Button from "../../../components/button/Button";

const PostActions = (props) => {
  const { styles } = props;
  return (
    <div className={styles.post_actions}>
      <div className={styles.voting}>
        <Button icon={() => <Upvote />} />
        {}
        <Button icon={() => <Downvote />} />
      </div>
      <div className={styles.voting}>
        <Button icon={() => <Reply />} />
      </div>
    </div>
  );
};

export default PostActions;
