import { useNavigate } from "react-router-dom";
import { Category } from "../../Types";
import {
  Background_image,
  Category_body_container,
  Category_container,
} from "./styles";

interface Props {
  category: Category;
}

const HomeCategoryItem = ({ category }: Props) => {
  const navigate = useNavigate();

  return (
    <Category_container onClick={() => navigate(`/shop/${category.title}`)}>
      <Background_image
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      ></Background_image>
      <Category_body_container>
        <h2>{category.title}</h2>
        <p>Shop now</p>
      </Category_body_container>
    </Category_container>
  );
};

export default HomeCategoryItem;
