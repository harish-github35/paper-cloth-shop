import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "../Types";
import { getCategoriesAndDocuments } from "../utils/firebase";

type CategoriesMap = Record<string, Product[]>;

interface CategoriesContextType {
  categoriesMap: CategoriesMap | null;
  isLoading: boolean;
}

export const CategoriesContext = createContext<CategoriesContextType>({
  categoriesMap: null,
  isLoading: false,
});

interface Props {
  children: ReactNode;
}

export const CategoriesContextProvider = ({ children }: Props) => {
  const [categoriesMap, setCategoriesMap] = useState<CategoriesMap | null>(
    null
  );
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const g = async () => {
      const categories = await getCategoriesAndDocuments();
      setCategoriesMap(categories);
      setLoading(false);
    };
    g();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap, isLoading }}>
      {children}
    </CategoriesContext.Provider>
  );
};
