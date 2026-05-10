import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Hero } from "./components/Hero/Hero";
import { MessageSection } from "./components/MessageSection/MessageSection";
import { Gallery } from "./components/Gallery/Gallery";
import { FinalSection } from "./components/FinalSection/FinalSection";
import { FlowerSurprise } from "./components/FlowerSurprise/FlowerSurprise";

import type { PageType } from "./types";

import "./App.scss";

function App() {
  const [page, setPage] = useState<PageType>("hero");

  return (
    <main className="app">
      <AnimatePresence mode="wait">
        {page === "hero" && <Hero onNext={() => setPage("message")} />}

        {page === "message" && (
          <MessageSection onNext={() => setPage("gallery")} />
        )}

        {page === "gallery" && <Gallery onNext={() => setPage("final")} />}

        {page === "final" && (
          <FinalSection onNext={() => setPage("flowers")} />
        )}

        {page === "flowers" && (
          <FlowerSurprise onRestart={() => setPage("hero")} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;