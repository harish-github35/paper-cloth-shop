import useCategoiresContext from "../../hooks/useCategoriesContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import styled from "styled-components";

const Shop_category_preview_container = styled.main`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

const ShopCategoryPreviewPage = () => {
  const { categoriesMap, isLoading } = useCategoiresContext();

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
