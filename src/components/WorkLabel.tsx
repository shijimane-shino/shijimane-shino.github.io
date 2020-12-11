import React from "react";
import { Label } from "semantic-ui-react";

import * as graphcms from "../utils/graphcms";

const WorkLabel: React.FC<{
  work: graphcms.api.Work;
}> = ({ work }) => <Label key={work.id}>{work.name}</Label>;

export default WorkLabel;
