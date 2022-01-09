import React, { Suspense } from "react";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";

// Redux
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  getTrendingGifs,
  getTrendingStickers,
} from "../../redux/actions/trending";
import { resetState, search } from "../../redux/actions/search";

// Components
import Banner from "../../components/Banner/Banner";
import Loader from "../../components/Loader/Loader";

import { ISearchParams } from "../Search/Search";

export default function Home() {
  const Preview = React.lazy(() => import("../../components/Preview/Preview"));

  const dispatch = useDispatch();
  const trending = useSelector((state: RootStateOrAny) => state.trending);
  const searchResults = useSelector((state: RootStateOrAny) => state.search);

  const [searchParams] = useState<ISearchParams>({
    term: "funny",
    type: "gifs",
    limit: 8,
    offset: 0,
  });

  useEffect(() => {
    dispatch(getTrendingGifs(8));
    dispatch(getTrendingStickers(8));
    dispatch(search({ ...searchParams }));
  
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, searchParams]);

  const funnyGifs = { gifs: searchResults.results };

  return (
    <main className={styles.container}>
      <section className={styles.mainContent}>
        <Banner />

        <Suspense fallback={<Loader />}>
          <Preview
            trending={trending}
            icon="trending"
            title="Trending"
            type="gifs"
            link="/search/trending"
          />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Preview
            trending={trending}
            icon="stickers"
            title="Stickers"
            type="stickers"
            link="/search/stickers"
          />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Preview
            trending={funnyGifs}
            icon="funny"
            title="Funny"
            type="gifs"
            link="/search/funny"
          />
        </Suspense>

      </section>
    </main>
  );
}
