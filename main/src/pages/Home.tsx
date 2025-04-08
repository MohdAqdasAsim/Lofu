import MusicPlayer from "../components/MusicPlayer";
import NavBar from "../components/NavBar";
import QuoteBox from "../components/QuoteBox";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <section className="w-full min-h-screen overflow-y-auto px-4 py-6 flex flex-col items-center gap-10">
      <NavBar />
      <MusicPlayer />
      <TaskList />
      <QuoteBox />
    </section>
  );
};

export default Home;
