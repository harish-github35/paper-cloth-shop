import { useParams } from "react-router-dom";

import { useEffect } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { useAppSelector } from "../../redux/useRedux";
import {
  Gotoshoplink,
  Shopcategorycontainer,
  Shopcategoryproductsgrid,
} from "./styles";

const ShopCategoryPage = () => {
  const { slug } = useParams();
  const { categoriesMap, isLoading } = useAppSelector((s) => s.shopData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <p>loading..</p>;

  if (slug && categoriesMap && !Object.keys(categoriesMap).includes(slug)) {
    return (
      <>
        <h1>Oops!</h1>
        <p>Invalid product category</p>
        <Gotoshoplink to="/shop">go to shop</Gotoshoplink>
      </>
    );
  }

  const categoryProducts = categoriesMap && categoriesMap[slug!];

  return (
    <Shopcategorycontainer>
      <h2>{slug?.toUpperCase()}</h2>
      <Shopcategoryproductsgrid>
        {categoryProducts?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Shopcategoryproductsgrid>
    </Shopcategorycontainer>
  );
};

export default ShopCategoryPage;
