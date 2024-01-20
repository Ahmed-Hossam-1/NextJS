import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import classes from "./Card.module.css";

function Card(props: { children: any }) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
