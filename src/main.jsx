import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Импортируй из 'react-router-dom'
import { MainLayout } from "./layouts/MainLayout"; // Используй именованный импорт или экспорт по умолчанию в зависимости от твоего файла
import "./assets/styles/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>HOME</div>,
      },
      {
        path: "/pizzas",
        element: <div>PIZZAS</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
