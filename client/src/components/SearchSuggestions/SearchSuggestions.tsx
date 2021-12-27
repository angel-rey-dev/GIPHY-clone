import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link, Params, useParams } from "react-router-dom";
import { resetState, searchSuggestions } from "../../redux/actions/search";
import styles from "./SearchSuggestions.module.scss";

export default function SearchSuggestions() {
  const { term }: Params = useParams();

  const { suggestions }: { suggestions: string[] } = useSelector(
    (state: RootStateOrAny) => state.search
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchSuggestions({ term: term as string }));
  }, [dispatch, term]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, term]);

  // console.log("suggestions", suggestions);

  return (
    <section className={styles.container}>
      {suggestions &&
        suggestions.map((tag, index) => (
          <Link
            to={`/search/${encodeURI(tag)}`}
            key={index}
            className={styles.tag}
          >
            #{tag}
          </Link>
        ))}
    </section>
  );
}
