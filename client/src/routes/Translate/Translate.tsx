import styles from "./Translate.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import { translate } from "../../redux/actions/translate";
import { resetState } from "../../redux/actions/search";
import Loader from "../../components/Loader/Loader";

export default function Translate() {
  const { item } = useSelector((state: RootStateOrAny) => state.translate);
  console.log("Translate state", item);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const resetInput = () => {
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    dispatch(translate(input));
    resetInput();
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  //   useEffect(() => {
  //     return () => {
  //       dispatch(resetState());
  //     };
  //   }, [dispatch]);

  return (
    <main className={styles.container}>
      <MainTitle title="Translate" />
      <p className={styles.subTitle}>
        Converts words and phrases to the perfect GIF or Sticker
      </p>

      <form onSubmit={handleSubmit} className={styles.translate}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter text to translate"
            title="Enter text to translate"
            required
          />
          <button type="submit">Translate</button>
        </div>
      </form>

      <section className={styles.gifContainer}>
        {isLoading && <Loader />}
        {!isLoading && item.images && <img src={item.images.medium} alt="Gif" />}
      </section>
    </main>
  );
}
