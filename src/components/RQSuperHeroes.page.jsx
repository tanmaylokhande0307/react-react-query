import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeroesPage = () => {
  const {data, isLoading } = useQuery("superHeros", () =>
    axios.get("http://localhost:4000/superheroes")
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {console.log(data)}
      {data?.data.map((hero) => {
        return <div>{hero.name}</div>;
      })}
    </>
  );
};
