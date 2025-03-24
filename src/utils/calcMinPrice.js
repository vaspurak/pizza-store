export const calcMinPricePizzas = (sizes, doughs) => {
  // const arrayMinSizes = [...sizes].sort((a, b) => a.price - b.price);
  const priceMinSizes = sizes.toSorted((a, b) => a.price - b.price)[0].price;
  const priceMinDoughs = doughs.toSorted((a, b) => a.price - b.price)[0].price;

  const calcMinPrice = priceMinSizes + priceMinDoughs;

  return calcMinPrice;
};
