import { useGetOthers, useGetPizzas, useGetRolls } from "@/api/rtkApi";
import { ProductTape } from "@/components/ProductTape";

const MainPage = () => {
  const {
    data: productsPizza,
    isLoading: pizzasLoading,
    error: pizzasError,
  } = useGetPizzas();
  const {
    data: productsRolls,
    isLoading: rollsLoading,
    error: rollsError,
  } = useGetRolls();
  const {
    data: productsOther,
    isLoading: otherLoading,
    error: otherError,
  } = useGetOthers();
  return (
    <>
      <ProductTape
        title="Pizzas"
        products={productsPizza}
        isLoading={pizzasLoading}
        error={pizzasError}
      />
      <ProductTape
        title="Rolls"
        products={productsRolls}
        isLoading={rollsLoading}
        error={rollsError}
      />
      <ProductTape
        title="Others"
        products={productsOther}
        isLoading={otherLoading}
        error={otherError}
      />
    </>
  );
};

export default MainPage;
