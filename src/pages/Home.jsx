import SideBar from "../components/Sidebar";

function Home() {
  return (
    <>
      <section className="h-screen flex gap-2">
        <div className="w-1/4 bg-gray-500 h-full">
          {" "}
          <SideBar />{" "}
        </div>
        <div className="w-1/2 bg-gray-200 h-full">02</div>
        <div className="w-1/4 bg-gray-500 h-full">03</div>
      </section>
    </>
  );
}
export default Home;
