import style from "./Header.module.css";
import appStyle from "../../App.module.css";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import HeaderCartButton from "./HeaderCartButton";
import Button from "../../Components/Button";
const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.logoContainer}>
          <div className={style.logo}>
            <Logo />
            <h5 className={style.logoHeader}>Orderiii</h5>
          </div>
          <HeaderCartButton />
        </div>
        <div className={style.banner}>
          <h1 className={appStyle.largerText}>Delicious</h1>
          <h3>Satisy your hunger</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            aliquid autem repellat unde quis tenetur itaque dolorem cum
            asperiores molestiae iusto a, numquam, accusamus perferendis! Sunt a
            cum repellat repellendus!
          </p>
          <Button>Order Now!</Button>
        </div>
      </header>
    </>
  );
};
export default Header;
