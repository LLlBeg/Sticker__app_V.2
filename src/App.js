import { Route, Routes } from "react-router-dom";
import "./App.css";
import StickerEditor from "./components/StickerEditor";
import StickerBoard from "./components/StickerBoard";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<StickerBoard />} />
        <Route path="/stickers/:id" element={<StickerEditor />} />
      </Routes>
    </>
  );
}

export default App;
