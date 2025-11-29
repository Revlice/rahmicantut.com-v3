import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function DateRedirect() {
  window.location.href = "/date.html"; // public/date.html
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/date",
    element: <DateRedirect />,
    errorElement: <ErrorPage />
  }
]);

export default router;
