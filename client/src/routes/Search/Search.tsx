import styles from "./Search.module.scss";
import { Params, useParams } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { search } from "../../redux/actions/search";
import MainTitle from "../../components/MainTitle/MainTitle";

export default function Search() {
  const { term }: Params = useParams();

  const searchResults = useSelector((state: RootStateOrAny) => state.search);
  console.log(searchResults);
  const dispatch = useDispatch();

  const SearchParams = {
    term: term as string,
    type: "gifs",
    limit: 20,
    offset: 0,
  };

  useEffect(() => {
    dispatch(search({ ...SearchParams }));
  }, [dispatch, term]);

  return (
    <main className={styles.container}>
      <MainTitle title={term as string} />
    </main>
  );
}
