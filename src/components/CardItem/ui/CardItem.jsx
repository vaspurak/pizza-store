import { productsName } from "@/const/const";
import cls from "./CardItem.module.scss";
import { Button } from "@/ui/Button";
const CardItem = (props) => {
  const {
    // id,
    img = "",
    title = "",
    product = "",
    ingredients = [],
    description = "",
    price = 0,
  } = props;

  const ingredientsText = ingredients.join(". ");

  return (
    <article className={cls.card}>
      <img className={cls.img} src={img} />
      <div className={cls.body}>
        <div className={cls.info}>
          <p className={cls.title}>{title}</p>
          <span className={cls.text}>
            {product === productsName.OTHERS ? description : ingredientsText}
          </span>
        </div>

        <footer className={cls.footer}>
          <Button border className={cls.button}>
            Choose
          </Button>

          {product === productsName.OTHERS ? (
            <span>{price} $</span>
          ) : (
            <span>From {price} $</span>
          )}
        </footer>
      </div>
    </article>
  );
};

export { CardItem };
