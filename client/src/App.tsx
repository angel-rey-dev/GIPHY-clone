import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Entertainment from "./routes/Entertainment/Entertainment";

// Routes
import Home from "./routes/Home/Home";
import PageNotFound from "./routes/PageNotFound/PageNotFound";
import Reactions from "./routes/Reactions/Reactions";
import Sports from "./routes/Sports/Sports";
import Stickers from "./routes/Stickers/Stickers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/reactions" element={<Reactions />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/stickers" element={<Stickers />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
