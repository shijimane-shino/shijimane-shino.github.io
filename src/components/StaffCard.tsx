import React from "react";
import { Card, Image, Label } from "semantic-ui-react";

import LinkLabel from "./LinkLabel";
import WorkLabel from "./WorkLabel";

import * as graphcms from "../utils/graphcms";
import styles from "./StaffCard.module.css";

const StaffCard: React.FC<graphcms.api.Staff> = (props) => (
  <Card>
    <Card.Content textAlign="center">
      <Image src={props.avatar} size="small" circular />
      <Card.Header>
        <div className={styles.header}>{props.name}</div>
      </Card.Header>
      <Card.Description>
        <Label.Group>
          {props.work.map((work) => (
            <WorkLabel key={work.id} work={work} />
          ))}
        </Label.Group>
      </Card.Description>
      <Card.Description>
        {props.link.map((link) => (
          <LinkLabel key={link.id} link={link} />
        ))}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default StaffCard;
