import * as React from "react";

import Link from "next/link";
import { Card, Image } from "semantic-ui-react";
import moment from "moment/moment";

import { Item as ItemInterface } from "../interfaces/item";

const ItemCard: React.FC<ItemInterface> = (props) => (
  <Link href={"/items/" + props.id}>
    <Card style={{ width: "100%" }}>
      {props.thumbnail && (
        <Image
          src={props.thumbnail.url}
          style={{
            height: "360px",
            objectFit: "cover",
            objectPosition: "center 0",
          }}
        />
      )}
      <Card.Content>
        <Card.Meta>{props.category}</Card.Meta>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>{moment(props.updatedAt).format("LL")}</Card.Meta>
        <Card.Description style={{ whiteSpace: "pre-wrap" }}>
          {props.description}
        </Card.Description>
      </Card.Content>
    </Card>
  </Link>
);

export default ItemCard;
