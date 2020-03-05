import React, { FC } from "react";
import { Dimmer, Segment, Loader } from "semantic-ui-react";

const Spinner: FC = () => (
  <Segment className="spinner">
    <Dimmer active inverted>
      <Loader inverted={false}>読込中…</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
