import styles from './CreatePosts.module.css';

const CreatePosts = () => {
    return ( <div className={styles.container}>
        <div className={styles.img}></div>
        <div className={styles.post}>What do you want to ask or share?</div>
    </div> );
}
 
export default CreatePosts;