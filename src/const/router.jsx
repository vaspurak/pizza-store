import { MainPage } from "@/pages/MainPage";
import { PizzasPage } from "@/pages/PizzasPage";
import { RollsPage } from "@/pages/RollsPage";
import { OthersPage } from "@/pages/OthersPage";
import { NotFountPage } from "@/pages/NotFountPage";

const routerNavigations = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/pizzas",
    element: <PizzasPage />,
  },
  {
    path: "/rolls",
    element: <RollsPage />,
  },
  {
    path: "/others",
    element: <OthersPage />,
  },
  {
    path: "*",
    element: <NotFountPage />,
  },
];
export { routerNavigations };
