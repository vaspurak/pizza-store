import cls from "./Navbar.module.scss";
import { useNavbarItemsLists } from "@/utils/useNavbarItemsLists";
import { NavbarItems } from "../NavbarItems/NavbarItems";
import { useMemo } from "react";

const Navbar = () => {
  const navBarItemsList = useNavbarItemsLists();

  const itemsList = useMemo(() => {
    return navBarItemsList.map((item) => (
      <NavbarItems key={item.path} item={item} />
    ));
  }, [navBarItemsList]);

  return <nav className={cls.navbar}>{itemsList}</nav>;
};

export { Navbar };
