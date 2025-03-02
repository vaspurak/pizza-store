import cls from "./Footer.module.scss";
import { Icon } from "@/ui/Icon";
import PizzaIcon from "@/assets/img/logoPizza.svg?react";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.container}>
        <div className={cls.content}>
          <div className={cls.logo}>
            <Icon Svg={PizzaIcon} />
            <p>Vaspurak Pizza</p>
          </div>
          <p>© Copyright 2025 — Vaspurak Pizza</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
