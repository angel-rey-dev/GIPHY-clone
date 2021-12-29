import { SetStateAction, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import styles from "./Grid.module.scss";
import Loader from "../Loader/Loader";

type GridProps = {
  pagination: {
    offset: number;
    total_count: number;
    count: number;
  };
  items: Array<any>;
  searchParams: {
    term: string;
    type: string;
    limit: number;
    offset: number;
  };
  setSearchParams: SetStateAction<any>;
  term: string;
};

export default function Grid({
  items,
  pagination,
  searchParams,
  setSearchParams,
  term,
}: GridProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={() => {
        setSearchParams({
          ...searchParams,
          offset: searchParams.offset + searchParams.limit,
        });
        console.log("Act: ", searchParams);
      }}
      hasMore={pagination.offset + pagination.count < pagination.total_count}
      loader={<Loader />}
    >
      <section className={`${styles.container} ${styles.grid}`}>
        {items &&
          items.map((item) => (
            <Link key={item.id} to="/" className={styles.gridItem}>
              <div>
                <img
                  src={item.images.medium}
                  alt={item.title}
                  onLoad={() => setIsLoaded(true)}
                  className={
                    isLoaded
                      ? `${styles.gridItemImage} ${styles.gridItemImageLoaded}`
                      : styles.gridItemImage
                  }
                />
              </div>
            </Link>
          ))}
      </section>
    </InfiniteScroll>
  );
}
