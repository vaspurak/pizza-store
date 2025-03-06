import PizzaProduct from "@/assets/img/pizzaProduct.svg?react";
import RollProduct from "@/assets/img/rollProduct.svg?react";
import OtherProduct from "@/assets/img/otherProduct.svg?react";

const useNavbarItemsLists = () => {
  const navbarItemsList = [
    {
      path: "/pizzas",
      Icon: PizzaProduct,
      text: "PIzza",
    },
    {
      path: "/rolls",
      Icon: RollProduct,
      text: "Rolls",
    },
    {
      path: "/others",
      Icon: OtherProduct,
      text: "Other",
    },
  ];
  return navbarItemsList;
};

export { useNavbarItemsLists };
