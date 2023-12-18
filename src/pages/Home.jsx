import SideBar from "../components/SideBar";
import CreatePosts from "../features/create_posts/CreatePost";
import Posts from "../features/posts/Posts";

function Home() {
  return (
    <>
      <section className="h-screen flex gap-4">
        <div className="w-1/4 bg-gray-500 h-full">
          {" "}
          <SideBar />{" "}
        </div>
        {/* bg-gray-200 */}
        <div className="w-1/2  h-full">
          <CreatePosts />
          <Posts />
        </div>
        <div className="w-1/4 bg-gray-500 h-full">03</div>
      </section>
    </>
  );
}
export default Home;
