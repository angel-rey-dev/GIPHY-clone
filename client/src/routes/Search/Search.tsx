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
  // console.log(searchResults);
  const dispatch = useDispatch();

  console.log("searchResults", searchResults);

  const [searchParams, setSearchParams] = useState({
    term: term as string,
    type: "gifs",
    limit: 20,
    offset: 0,
  });

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
      />
    </main>
  );
}
