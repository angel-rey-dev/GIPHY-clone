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
};

export default function Grid({
  items,
  pagination,
  searchParams,
  setSearchParams,
}: GridProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={() => {
        setTimeout(() => {
          setSearchParams((prevState: any) => ({
            ...prevState,
            offset: prevState.offset + prevState.limit,
          }));
          console.log("Act: ", searchParams);
        }, 1000);
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
