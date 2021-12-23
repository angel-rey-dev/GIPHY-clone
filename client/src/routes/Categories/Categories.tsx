import styles from "./Categories.module.scss";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { getCategories } from "../../redux/actions/categories";
import { useEffect } from "react";

interface ICategory {
  id: string;
  name: string;
  gif: {
    large: string;
    medium: string;
  };
}

export default function Categories() {
  const categories = useSelector((state: RootStateOrAny) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Categories</h2>

      <section className={styles.grid}>
        {categories &&
          categories.map((category: ICategory) => (
            <CategoryCard {...category} key={category.id} />
          ))}
      </section>
    </main>
  );
}
