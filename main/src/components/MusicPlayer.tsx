import { useEffect, useState } from "react";

const tracks = [
  {
    name: "Lofi Girl – Chill Beats 🧠",
    url: "https://www.youtube.com/embed/jfKfPfyJRdk",
  },
  {
    name: "Jazzhop Café – Study Mix ☕",
    url: "https://www.youtube.com/embed/7NOSDKb0HlU",
  },
  {
    name: "Coffee Shop Vibes 📚",
    url: "https://www.youtube.com/embed/5qap5aO4i9A",
  },
  {
    name: "Late Night Coding – Dark Mode 💻",
    url: "https://www.youtube.com/embed/BomfVh2PSkM",
  },
  {
    name: "Lo-Fi Rainy Window 🌧️",
    url: "https://www.youtube.com/embed/lTRiuFIWV54",
  },
  {
    name: "Tokyo Night Drive 🚗",
    url: "https://www.youtube.com/embed/n61ULEU7CO0",
  },
  {
    name: "Beats to Relax and Study 🛋️",
    url: "https://www.youtube.com/embed/rUxyKA_-grg",
  },
  {
    name: "Peaceful Piano & Chill 🌙",
    url: "https://www.youtube.com/embed/vAKvG2lQ9iQ",
  },
  {
    name: "Lo-Fi for Deep Focus 🧘‍♂️",
    url: "https://www.youtube.com/embed/MkNeIUgNPQ8",
  },
  {
    name: "Evening Jazz Lofi 🕯️",
    url: "https://www.youtube.com/embed/-5KAN9_CzSA",
  },
];

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  // Load saved track on mount
  useEffect(() => {
    const saved = localStorage.getItem("lofu-track");
    if (saved) {
      const parsed = JSON.parse(saved);
      const match = tracks.find((t) => t.url === parsed.url);
      if (match) setCurrentTrack(match);
    }
  }, []);

  // Save track when changed
  useEffect(() => {
    localStorage.setItem("lofu-track", JSON.stringify(currentTrack));
  }, [currentTrack]);

  return (
    <section className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-4 text-textColor">
        🎶 Lofu Player
      </h2>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-textColor">
          Select a vibe:
        </label>
        <select
          value={currentTrack.name}
          onChange={(e) =>
            setCurrentTrack(tracks.find((t) => t.name === e.target.value)!)
          }
          className="w-full bg-white/10 border border-white/20 rounded-lg p-2 focus:outline-none text-textColor"
        >
          {tracks.map((track) => (
            <option key={track.name} value={track.name}>
              {track.name}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-xl overflow-hidden aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`${currentTrack.url}?autoplay=1&mute=1`}
          title={currentTrack.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-sm text-textColor mt-2 italic">
        Now Playing: <span className="text-textColor">{currentTrack.name}</span>
      </p>
    </section>
  );
};

export default MusicPlayer;
