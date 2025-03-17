import { CardItem } from "@/components/CardItem";
import cls from "./ProductTape.module.scss";
import { productsName } from "@/const/const";

const ProductTape = (props) => {
  const { title, products = [], isLoading = false, error = undefined } = props;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const items = products.map((el) => {
    const props = {
      id: el.id,
      img: el.photo,
      title: el.name,
      // key: el.id,
      product: el.product,
    };

    switch (el.product) {
      case productsName.PIZZAS:
        return <CardItem key={el.id} {...props} ingredients={el.ingredients} />;

      case productsName.ROLLS:
        return <CardItem key={el.id} {...props} ingredients={el.ingredients} />;

      case productsName.OTHERS:
        return <CardItem key={el.id} {...props} description={el.description} />;

      default:
        null;
    }
  });

  return (
    <section className={cls.products}>
      <h2 className={cls.title}>{title}</h2>
      {error && (
        <div className="error">
          Oops... Failed to retrieve product list. Please check back later.
        </div>
      )}

      <div className={cls.card}>{items}</div>
    </section>
  );
};

export { ProductTape };
