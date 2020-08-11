import * as React from "react";

import { Card, Image, Label, Button } from "semantic-ui-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faDeviantart,
  faInstagram,
  faSoundcloud,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Credit as CreditInterface } from "../interfaces/credit";
import { CreditWork as CreditWorkInterface } from "../interfaces/creditWork";
import { CreditLink as CreditLinkInterface } from "../interfaces/creditLink";

const iconList = {
  twitter: <FontAwesomeIcon icon={faTwitter} color="#1da1f2" />,
  niconico: (
    <svg viewBox="0 0 32 33" style={{ fill: "#000", width: "1em" }}>
      <path d="M13.377,7.534 C11.349,5.540 9.322,3.547 7.318,1.576 C7.809,1.054 8.288,0.544 8.789,0.010 C11.200,2.378 13.585,4.719 15.985,7.075 C18.389,4.714 20.775,2.370 23.186,0.001 C23.669,0.528 24.141,1.044 24.632,1.580 C22.661,3.518 20.045,5.989 18.000,8.000 C18.006,8.024 17.994,7.976 18.000,8.000 C18.102,8.000 18.898,8.000 19.000,8.000 C22.413,8.000 25.587,8.000 29.000,8.000 C30.683,8.000 32.007,8.798 32.008,10.489 C32.010,15.182 32.008,19.874 32.006,24.567 C32.006,25.427 32.022,26.287 31.991,27.146 C31.944,28.491 30.343,29.934 29.000,30.000 C27.774,30.060 27.228,30.004 26.000,30.000 C25.757,29.999 26.124,29.798 26.000,30.000 C25.482,30.849 24.270,31.722 23.738,32.563 C23.390,33.112 22.819,33.111 22.469,32.557 C21.927,31.701 21.531,30.863 21.000,30.000 C20.897,29.834 20.197,30.000 20.000,30.000 C16.923,30.006 15.077,30.007 12.000,30.000 C11.800,30.000 11.102,29.835 11.000,30.000 C10.474,30.855 9.738,31.692 9.202,32.541 C8.835,33.122 8.270,33.117 7.903,32.532 C7.373,31.690 6.839,30.851 6.320,30.001 C6.205,29.811 6.215,29.999 6.000,30.000 C4.464,30.003 4.069,30.076 3.000,30.000 C1.379,29.885 0.006,28.445 0.005,26.802 C0.001,23.993 0.004,21.185 0.004,18.377 C0.004,15.761 -0.003,13.616 0.000,11.000 C0.002,9.488 0.539,8.281 2.000,8.000 C2.150,7.971 2.846,8.000 3.000,8.000 C6.404,7.998 9.596,8.000 13.000,8.000 C13.105,8.000 13.895,8.000 14.000,8.000 C14.009,7.974 13.368,7.560 13.377,7.534 Z" />
    </svg>
  ),
  pixiv: (
    <svg viewBox="0 0 30 26.563" style={{ fill: "#009cff", width: "1em" }}>
      <path d="M26.267,3.193 C23.912,1.176 20.615,0.012 16.782,0.012 C6.793,0.012 -0.001,7.569 -0.001,7.569 L1.914,10.548 C1.914,10.548 2.973,10.635 2.412,8.881 C2.896,7.984 4.149,6.394 6.000,5.000 C6.000,5.000 6.000,23.979 6.000,25.000 C5.202,25.221 3.842,25.861 4.561,26.566 C5.789,26.566 9.149,26.566 10.061,26.566 C10.787,25.854 9.697,25.200 9.000,25.000 C9.000,24.234 9.000,21.000 9.000,21.000 C9.000,21.000 12.717,21.996 16.782,21.996 C20.354,21.996 23.603,20.954 26.020,19.072 C28.437,17.202 29.995,14.408 29.986,11.215 C29.993,8.080 28.624,5.203 26.267,3.193 ZM23.352,17.506 C21.681,19.124 19.250,20.147 16.446,20.145 C13.318,20.147 10.685,19.553 8.947,18.714 C8.947,18.714 9.000,17.750 9.000,14.000 C9.000,9.943 8.947,3.827 8.947,3.827 C10.854,2.498 13.948,1.679 16.446,1.685 C19.482,1.687 21.866,2.811 23.477,4.518 C25.086,6.234 25.992,8.349 26.000,11.000 C25.990,13.583 25.024,15.875 23.352,17.506 Z" />
    </svg>
  ),
  instagram: <FontAwesomeIcon icon={faInstagram} color="#e1306c" />,
  website: <FontAwesomeIcon icon={faLink} color="#808080" />,
  soundcloud: <FontAwesomeIcon icon={faSoundcloud} color="#fe5000" />,
  youtube: <FontAwesomeIcon icon={faYoutube} color="#ff0000" />,
  deviantart: <FontAwesomeIcon icon={faDeviantart} color="#05cc47" />,
};

const WorkLabelList: React.FC<{
  works: CreditWorkInterface[];
}> = ({ works }) => (
  <Label.Group>
    {works.map((work) => (
      <Label key={work.id}>{work.name}</Label>
    ))}
  </Label.Group>
);

const LinkLabelList: React.FC<{
  links: CreditLinkInterface[];
}> = ({ links }) => (
  <>
    {links.map((link) => (
      <Button
        circular
        key={link.id}
        title={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        icon={iconList[link.category]}
      />
    ))}
  </>
);

const CreditCard: React.FC<CreditInterface> = (props) => (
  <Card style={{ width: "100%", height: "100%" }}>
    <Card.Content textAlign="center">
      <Image src={props.avatar} size="small" circular />
      <Card.Header style={{ margin: "0.5em 0 0" }}>{props.name}</Card.Header>
      <Card.Description>
        <WorkLabelList works={props.work} />
      </Card.Description>
      <Card.Description>
        <LinkLabelList links={props.link} />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default CreditCard;
