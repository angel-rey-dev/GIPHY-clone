import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  getTrendingGifs,
  getTrendingStickers,
} from "../../redux/actions/trending";
import { BiHappy } from "react-icons/bi";
// Components
import Banner from "../../components/Banner/Banner";
import Loader from "../../components/Loader/Loader";
import Preview from "../../components/Preview/Preview";
import Grid from "../../components/Grid/Grid";
import { ISearchParams } from "../Search/Search";
import { search } from "../../redux/actions/search";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    term: "funny",
    type: "gifs",
    limit: 10,
    offset: 0,
  });

  const dispatch = useDispatch();
  const trending = useSelector((state: RootStateOrAny) => state.trending);
  const searchResults = useSelector((state: RootStateOrAny) => state.search);

  useEffect(() => {
    dispatch(getTrendingGifs(20));
    dispatch(getTrendingStickers(20));
    dispatch(search({ ...searchParams }));
    setIsLoading(false);
  }, [dispatch, searchParams]);

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

      <section className={styles.related}>
        <h2>
          <BiHappy />
         <span>Funny</span>
        </h2>
        <Grid
          items={searchResults.results}
          pagination={searchResults.pagination}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
          term={"funny"}
        />
      </section>
    </main>
  );
}
