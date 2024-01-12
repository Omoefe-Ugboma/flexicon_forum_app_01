import Modal from "../components/Modal";
import CreatePosts from "../features/create_posts/CreatePost";
import Posts from "../features/posts/Posts";

function Home() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "4fr 1fr", gap: "2rem" }}
    >
      <main style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <CreatePosts />
        <Posts />
      </main>
    </div>
  );
}
export default Home;
