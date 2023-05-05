import styled from "styled-components";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { useAppSelector } from "../../redux/useRedux";
import { categoryMapSelector } from "../../utils/selector";

const Shop_category_preview_container = styled.main`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

const ShopCategoryPreviewPage = () => {
  const categoriesMap = useAppSelector(categoryMapSelector);
  const isLoading = useAppSelector((s) => s.shopData.isLoading);

  if (isLoading) return <p>loading..</p>;

  return (
    <Shop_category_preview_container>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        ))}
    </Shop_category_preview_container>
  );
};

export default ShopCategoryPreviewPage;
