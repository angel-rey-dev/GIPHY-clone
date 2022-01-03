import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import GifContainer from "../../components/Gif/Gif";
import Grid from "../../components/Grid/Grid";
import MainTitle from "../../components/MainTitle/MainTitle";
import SearchSuggestions from "../../components/SearchSuggestions/SearchSuggestions";
import { resetState, search } from "../../redux/actions/search";
import { ISearchParams } from "../Search/Search";
import styles from "./Detail.module.scss";

type Gif = {
  id: string;
  title: string;
  type: string;
  images: {
    large: string;
    medium: string;
  };
  user?: any;
  term: string;
};

export default function Detail() {
  const { state } = useLocation();
  const { id, title, type, images } = state as Gif;
  console.log("state", state);

  const searchResults = useSelector((state: RootStateOrAny) => state.search);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useState<ISearchParams>({
    term: title,
    type: "gifs",
    limit: 10,
    offset: 0,
  });

  useEffect(() => {
    dispatch(search({ ...searchParams }));
  }, [dispatch, searchParams, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSearchParams((prevState: any) => ({
      ...prevState,
      offset: 0,
      term: title,
    }));
  }, [title, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, id]);

  return (
    <main className={styles.container}>

      <MainTitle title={title} />

      <GifContainer title={title} image={images.large} key={title} />
      
      <SearchSuggestions term={title} />

      <section className={styles.related}>
        <h2>Related {type.toUpperCase()}'s</h2>
        <Grid
          items={searchResults.results}
          pagination={searchResults.pagination}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
          key={title}
          term={title}
        />
      </section>
    </main>
  );
}
