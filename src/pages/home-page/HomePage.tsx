import { Category } from "../../Types";
import HomeCategoryItem from "../../components/home-category-item/HomeCategoryItem";
import json from "../../data/categories.json";

import { Home_categories_container } from "./styles";

const HomePage = () => {
  // const [data, setData] = useState<Category[] | null>(null);

  // trying to lazy load json is a mistake

  // useEffect(() => {
  //   const h = async () => {
  //     const json = await import("../../data/categories.json");
  //     setData(json.default);
  //   };
  //   h();
  // }, []);

  const data = json as Category[];

  return (
    <Home_categories_container>
      {data.map((category) => (
        <HomeCategoryItem category={category} key={category.id} />
      ))}
    </Home_categories_container>
  );
};

export default HomePage;
