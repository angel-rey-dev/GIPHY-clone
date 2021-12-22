import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";

export default function Home() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=J50gVBbXQm5oZ4E3M3lS7vDTrq8UmOGt"
    )
      .then((response) => response.json())
      .then(({ data }) => setGifs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className={styles.container}>
      <Banner />
      {gifs.map((gif) => (
        <img src={gif["images"]["downsized_medium"]["url"]} alt="gif" />
      ))}
    </main>
  );
}
