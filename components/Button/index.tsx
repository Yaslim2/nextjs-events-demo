interface ButtonProps {
  link: string;
}
import Link from "next/link";
import classes from "./styles.module.css";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
