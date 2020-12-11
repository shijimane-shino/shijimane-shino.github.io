import React from "react";
import Link from "next/link";
import { Card, Image } from "semantic-ui-react";
import moment from "moment/moment";

import { Item as ItemInterface } from "../utils/graphcms/api";
import styles from "./ItemCard.module.css";

const ItemCard: React.FC<ItemInterface> = (props) => (
  <Link href={"/items/" + props.id}>
    <Card>
      {props.thumbnail && (
        <Image className={styles.image} src={props.thumbnail.url} />
      )}
      <Card.Content>
        <Card.Meta>{props.category}</Card.Meta>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>{moment(props.updatedAt).format("LL")}</Card.Meta>
        <Card.Description className={styles.description}>
          {props.description}
        </Card.Description>
      </Card.Content>
    </Card>
  </Link>
);

export default ItemCard;
