import { Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import GoTopButton from "./components/GoTopButton/GoTopButton";
import Footer from "./components/Footer/Footer";

// Routes
import Categories from "./routes/Categories/Categories";
import Home from "./routes/Home/Home";
import PageNotFound from "./routes/PageNotFound/PageNotFound";
import Search from "./routes/Search/Search";
import Detail from "./routes/Detail/Detail";
import Translate from "./routes/Translate/Translate";

function App() {
  return (
    <div className="App">
      <Header />
      <GoTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search/:term" element={<Search />} />
        <Route path="/gifs/:id" element={<Detail />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
