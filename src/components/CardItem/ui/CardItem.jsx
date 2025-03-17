import { productsName } from "@/const/const";
import cls from "./CardItem.module.scss";
import { Button } from "@/ui/Button";
const CardItem = (props) => {
  const {
    id,
    img = "",
    title = "",
    product = "",
    ingredients = [],
    description = "",
  } = props;

  const ingredientsText = ingredients.join(". ");
  console.log(ingredientsText);

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
          <span>From 0 dollars</span>
        </footer>
      </div>
    </article>
  );
};

export { CardItem };
