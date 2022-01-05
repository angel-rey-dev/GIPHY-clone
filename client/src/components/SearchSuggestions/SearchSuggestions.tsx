import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchSuggestions } from "../../redux/actions/search";
import styles from "./SearchSuggestions.module.scss";

export default function SearchSuggestions({ term }: { term: string }) {
  const navigate = useNavigate();

  const { suggestions }: { suggestions: string[] } = useSelector(
    (state: RootStateOrAny) => state.search
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchSuggestions({ term: term as string }));
  }, [dispatch, term]);

  return (
    <section className={styles.container}>
      {suggestions &&
        suggestions.map((tag, index) => (
          <button
            type="button"
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
