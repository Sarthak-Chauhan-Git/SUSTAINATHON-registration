import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FormPage from "./FormPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormPage></FormPage>
  </StrictMode>
);
