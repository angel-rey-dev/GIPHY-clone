import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import GoTopButton from "./components/GoTopButton/GoTopButton";
import Header from "./components/Header/Header";
import Categories from "./routes/Categories/Categories";
import Entertainment from "./routes/Entertainment/Entertainment";

// Routes
import Home from "./routes/Home/Home";
import PageNotFound from "./routes/PageNotFound/PageNotFound";
import Reactions from "./routes/Reactions/Reactions";
import Search from "./routes/Search/Search";
import Stickers from "./routes/Stickers/Stickers";
import Translate from "./routes/Translate/Translate";

function App() {
  return (
    <div className="App">
      <Header />
      <GoTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/reactions" element={<Reactions />} />
        <Route path="/search/:term" element={<Search />} />
        <Route path="/stickers" element={<Stickers />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
