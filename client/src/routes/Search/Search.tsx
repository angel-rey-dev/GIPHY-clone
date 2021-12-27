import styles from "./Search.module.scss";
import { Params, useParams } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { resetState, search } from "../../redux/actions/search";
import MainTitle from "../../components/MainTitle/MainTitle";
import Grid from "../../components/Grid/Grid";
import SearchSuggestions from "../../components/SearchSuggestions/SearchSuggestions";

export default function Search() {
  const { term }: Params = useParams();

  const searchResults = useSelector((state: RootStateOrAny) => state.search);
  console.log("Search term", term);
  const dispatch = useDispatch();

  
  const [searchParams, setSearchParams] = useState({
    term: term as string,
    type: "gifs",
    limit: 20,
    offset: 0,
  });
  console.log("Search  SearchParams: ", searchParams);
  
  useEffect(() => {
    dispatch(search({ ...searchParams }));
  }, [dispatch, term, searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, term]);

  return (
    <main className={styles.container}>
      <MainTitle title={term as string} />
      <SearchSuggestions />
      <Grid
        items={searchResults.results}
        pagination={searchResults.pagination}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        key={term as string}
      />
    </main>
  );
}
