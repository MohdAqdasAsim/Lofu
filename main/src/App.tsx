import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { ThemeProvider } from "./contexts/ThemeProvider";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <section className="relative w-screen min-h-screen flex items-center justify-center bg-picture bg-no-repeat bg-center bg-cover">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />

        {/* Content */}
        <div className="relative z-10 w-[90vw] max-h-[90vh] bg-picture rounded-4xl overflow-auto shadow-main shadow-2xl hide-scrollbar">
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default App;
