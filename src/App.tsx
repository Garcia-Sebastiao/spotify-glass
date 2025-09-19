import { BackgroundImage } from "./components/layout/background-image";
import { MainLayout } from "./components/layout/main-layout/main-layont";
import { MusicPlayer } from "./components/layout/music-player/music-player";
import { Sidebar } from "./components/layout/sidebar/sidebar";
import { UserSection } from "./components/layout/user-section/user-section";
import { MixesSection } from "./pages/home/components/mixes-section/mixes-section";
import { NewSongsSection } from "./pages/home/components/new-songs/new-songs";

const sampleTrack = {
  id: "1",
  title: "Acontece",
  artist: "Cartola",
  albumArt: "https://i.ytimg.com/vi/Q62bhP-8o5o/maxresdefault.jpg",
  duration: 270,
};

export default function App() {
  return (
    <div className="w-full h-screen relative">
      <BackgroundImage />

      <div className="w-full relative z-10 flex h-full px-24 py-16">
        <Sidebar />

        <MainLayout>
          <div className="w-full flex gap-5 flex-1 p-6">
            <UserSection />

            <div className="card !px-6 overflow-hidden w-full flex flex-col gap-y-4 flex-1">
              <NewSongsSection />
              <MixesSection />
            </div>
          </div>

          <MusicPlayer track={sampleTrack} />
        </MainLayout>
      </div>
    </div>
  );
}
