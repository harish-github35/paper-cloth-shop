import { Product } from "../../Types";
import { addItem } from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/useRedux";
import Button from "../button/Button";
import { Footer, Product_card_container } from "./styles";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const { name, price, imageUrl } = product;

  const addToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <Product_card_container>
      <img loading="lazy" src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button onClick={addToCart} buttonType="inverted">
        Add to cart
      </Button>
    </Product_card_container>
  );
};

export default ProductCard;
