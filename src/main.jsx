import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Импортируй из 'react-router-dom'
import { MainLayout } from "./layouts/MainLayout"; // Используй именованный импорт или экспорт по умолчанию в зависимости от твоего файла
import "./assets/styles/index.scss";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Theme } from "./const/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <p>HOME</p>,
      },
      {
        path: "/pizzas",
        element: <p>PIZZAS</p>,
      },
      {
        path: "/rolls",
        element: <p>RollS</p>,
      },
      {
        path: "/others",
        element: <p>Others</p>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider initialTheme={Theme.LIGHT}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
