import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  getTrendingGifs,
  getTrendingStickers,
} from "../../redux/actions/trending";
// Components
import Banner from "../../components/Banner/Banner";
import Loader from "../../components/Loader/Loader";
import Preview from "../../components/Preview/Preview";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const trending = useSelector((state: RootStateOrAny) => state.trending);

  useEffect(() => {
    dispatch(getTrendingGifs(20));
    dispatch(getTrendingStickers(20));
    setIsLoading(false);
  }, [dispatch]);

  return (
    <main className={styles.container}>
      <Banner />
      {isLoading && <Loader />}

      <Preview
        trending={trending}
        icon="trending"
        title="Trending"
        type="gifs"
        link="/search/trending"
      />
      <Preview
        trending={trending}
        icon="stickers"
        title="Stickers"
        type="stickers"
        link="/search/stickers"
      />
    </main>
  );
}
