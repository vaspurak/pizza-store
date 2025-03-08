import "./assets/styles/index.scss";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Импортируй из 'react-router-dom'

import { MainLayout } from "./layouts/MainLayout"; // Используй именованный импорт или экспорт по умолчанию в зависимости от твоего файла
import { ThemeProvider } from "./providers/ThemeProvider";
import { Theme } from "./const/theme";

import { Suspense } from "react";
import { MainPage } from "./pages/MainPage";
import { routerNavigations } from "./const/router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routerNavigations.map(({ path, element }) => ({
      path: path,
      element: <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>,
    })),
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider initialTheme={Theme.LIGHT}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
