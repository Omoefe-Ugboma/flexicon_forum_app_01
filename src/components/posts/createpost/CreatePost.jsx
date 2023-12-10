import styles from './CreatePosts.module.css';

const CreatePosts = () => {
    return ( <div className={styles.container}>
        <div className={styles.profile_img}></div>
        <div className={styles.create_post}>What do you want to ask or share?</div>
    </div> );
}
 
export default CreatePosts;