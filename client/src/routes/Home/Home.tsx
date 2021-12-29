import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
// Components
import Banner from "../../components/Banner/Banner";
import Loader from "../../components/Loader/Loader";
// Icons
import { HiTrendingUp } from "react-icons/hi";
import { MdOutlineStickyNote2 } from "react-icons/md";
import {
  getTrendingGifs,
  getTrendingStickers,
} from "../../redux/actions/trending";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const trending = useSelector((state: RootStateOrAny) => state.trending);

  console.log("trending", trending);
  useEffect(() => {
    dispatch(getTrendingGifs(20));
    dispatch(getTrendingStickers(20));
    setIsLoading(false);
  }, [dispatch]);

  return (
    <main className={styles.container}>
      <Banner />
      {isLoading && <Loader />}

      <section className={styles.section}>
        <h2 className={styles.title}>
          <HiTrendingUp />
          Trending
        </h2>
        {/* <div className={styles.row}>
          {trending.gifs.slice(0,6).map((gif: any) => (
            <img
              key={gif.id}
              src={gif.images.medium}
              alt={gif.title}
              className={styles.gif}
            />
          ))}
        </div> */}
        <div className={styles.row}>
          {trending.gifs.slice(0).map((gif: any) => (
            <img
              key={gif.id}
              src={gif.images.medium}
              alt={gif.title}
              className={styles.gif}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>
          <MdOutlineStickyNote2 />
          Stickers
        </h2>
        {/* <div className={styles.row}>
          {trending.gifs.slice(0,6).map((gif: any) => (
            <img
              key={gif.id}
              src={gif.images.medium}
              alt={gif.title}
              className={styles.gif}
            />
          ))}
        </div> */}
        <div className={styles.row}>
          {trending.stickers.slice(0).map((sticker: any) => (
            <img
              key={sticker.id}
              src={sticker.images.medium}
              alt={sticker.title}
              className={styles.gif}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
