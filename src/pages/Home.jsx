import SideBar from "../components/SideBar";
import CreatePosts from "../components/posts/createpost/CreatePost";
import DisplayPost from "../components/posts/displayPosts/DisplayPost";

function Home() {
  return (
    <>
      <section className="h-screen flex gap-4">
        <div className="w-1/4 bg-gray-500 h-full">
          {" "}
          <SideBar />{" "}
        </div>
        <div className="w-1/2 bg-gray-200 h-full">
          <CreatePosts />
          <DisplayPost />
        </div>
        <div className="w-1/4 bg-gray-500 h-full">03</div>
      </section>
    </>
  );
}
export default Home;
