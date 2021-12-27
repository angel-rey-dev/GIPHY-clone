import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link, Params, useNavigate, useParams } from "react-router-dom";
import { resetState, searchSuggestions } from "../../redux/actions/search";
import styles from "./SearchSuggestions.module.scss";

export default function SearchSuggestions() {
  const navigate = useNavigate();
  const { term }: Params = useParams();

  const { suggestions }: { suggestions: string[] } = useSelector(
    (state: RootStateOrAny) => state.search
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
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
          <button
            // to={`/search/${encodeURI(tag)}`}
            onClick={() => navigate(`/search/${encodeURI(tag)}`)}
            key={index}
            className={styles.tag}
          >
            #{tag}
          </button>
        ))}
    </section>
  );
}
