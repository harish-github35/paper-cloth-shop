import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";
import useCategoiresContext from "../../hooks/useCategoriesContext";
import {
  Gotoshoplink,
  Shopcategorycontainer,
  Shopcategoryproductsgrid,
} from "./styles";
import { useEffect } from "react";

const ShopCategoryPage = () => {
  const { slug } = useParams();
  const { categoriesMap, isLoading } = useCategoiresContext();

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
