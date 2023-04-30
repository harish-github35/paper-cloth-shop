import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { UserContextProvider } from "./context/UserContext";
import { CartContextProvider } from "./context/CartContext";
import { CategoriesContextProvider } from "./context/CategoriesContext";
import { GlobalStyles } from "./styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <UserContextProvider>
    <CategoriesContextProvider>
      <CartContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </CartContextProvider>
    </CategoriesContextProvider>
  </UserContextProvider>
);
