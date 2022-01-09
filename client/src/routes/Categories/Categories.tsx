import styles from "./Categories.module.scss";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { getCategories } from "../../redux/actions/categories";
import { useEffect } from "react";
import MainTitle from "../../components/MainTitle/MainTitle";

interface ICategory {
  id: string;
  name: string;
  gif: string;
}

export default function Categories() {
  const categories = useSelector((state: RootStateOrAny) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <main className={styles.container}>
      <MainTitle title="Categories" />

      <section className={styles.grid}>
        {categories &&
          categories.map((category: ICategory) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              gif={category.gif}
            />
          ))}
      </section>
    </main>
  );
}
