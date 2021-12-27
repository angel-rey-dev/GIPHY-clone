import styles from "./Search.module.scss";
import { Params, useParams } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { resetState, search } from "../../redux/actions/search";
import MainTitle from "../../components/MainTitle/MainTitle";
import Grid from "../../components/Grid/Grid";

export default function Search() {
  const { term }: Params = useParams();

  const searchResults = useSelector((state: RootStateOrAny) => state.search);
console.log(searchResults);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useState({
    term: term as string,
    type: "gifs",
    limit: 20,
    offset: 0,
  });

  useEffect(() => {
    dispatch(search({ ...searchParams }));
  }, [dispatch, searchParams]);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return (
    <main className={styles.container}>
      <MainTitle title={term as string} />
      <Grid
        // key={searchParams.term}
        items={searchResults.results}
        pagination={searchResults.pagination}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
    </main>
  );
}
