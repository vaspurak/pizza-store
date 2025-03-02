import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.scss";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

const MainLayout = () => {
  const { theme } = useTheme();
  return (
    <div id="app" className={`app ${theme}`}>
      <Header />
      <main className={cls.main}>
        <div className={cls.container}>
          <div className={cls.body}>
            <p>Navbar</p>
            <Outlet />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { MainLayout };
