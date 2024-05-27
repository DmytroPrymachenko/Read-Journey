import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Read-Journey">
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={1500} />
    </Provider>
  </BrowserRouter>
);
