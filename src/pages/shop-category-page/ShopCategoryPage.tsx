import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import { useAppSelector } from "../../redux/useRedux";
import { productsSelector } from "../../utils/selector";
import {
  Gotoshoplink,
  Shopcategorycontainer,
  Shopcategoryproductsgrid,
} from "./styles";

const ShopCategoryPage = () => {
  const { slug } = useParams();
  const products = useAppSelector(productsSelector(slug!));
  const isLoading = useAppSelector((s) => s.shopData.isLoading);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) return <p>loading..</p>;

  if (slug && !products) {
    return (
      <>
        <h1>Oops!</h1>
        <p>Invalid product category</p>
        <Gotoshoplink to="/shop">go to shop</Gotoshoplink>
      </>
    );
  }

  return (
    <Shopcategorycontainer>
      <h2>{slug?.toUpperCase()}</h2>
      <Shopcategoryproductsgrid>
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Shopcategoryproductsgrid>
    </Shopcategorycontainer>
  );
};

export default ShopCategoryPage;
