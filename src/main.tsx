import { Elements } from "@stripe/react-stripe-js";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import router from "./routes";
import { persistor, store } from "./store";
import { GlobalStyles } from "./styles";
import { stripePromise } from "./utils/stripe";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </PersistGate>
  </Provider>
);
