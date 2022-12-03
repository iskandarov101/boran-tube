import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import Channel from "./components/Channel/Channel";
import Navbar from "./components/navbar/navbar";
import Search from "./components/Search/Search";
import VideoDetail from "./components/VideoDetail/VideoDetail";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail/>} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
