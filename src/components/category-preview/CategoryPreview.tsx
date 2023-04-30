import { Product } from "../../Types";
import ProductCard from "../product-card/ProductCard";
import {
  Category_preview_container,
  Preview_container,
  Show_all_link,
} from "./styles";

interface Props {
  title: string;
  products: Product[];
}

const CategoryPreview = ({ title, products }: Props) => {
  return (
    <Category_preview_container>
      <h2>
        <span className="title">{title.toUpperCase()}</span>
        <Show_all_link to={`/shop/${title}`}>
          <span className="show-all-link">SHOW ALL &#8594;</span>
        </Show_all_link>
      </h2>
      <Preview_container>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview_container>
    </Category_preview_container>
  );
};

export default CategoryPreview;
