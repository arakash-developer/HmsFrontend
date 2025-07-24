import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/scss/style.scss";
import "./assets/css/apexcharts.css";
import "./assets/css/jsvectormap.min.css";
import "./assets/css/prism.css";
import "./assets/css/quill.snow.css";
import "./assets/css/remixicon.css";
import "./assets/css/simplebar.css";
import "./assets/css/style.css";
import "./assets/css/swiper-bundle.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
