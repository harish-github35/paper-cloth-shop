import { Product } from "../../Types";
import Button from "../button/Button";
import useCartContext from "../../hooks/useCartContext";
import { Product_card_container, Footer } from "./styles";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addItemToCart } = useCartContext();

  const { name, price, imageUrl } = product;

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  return (
    <Product_card_container>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button onClick={handleAddToCart} buttonType="inverted">
        Add to cart
      </Button>
    </Product_card_container>
  );
};

export default ProductCard;
