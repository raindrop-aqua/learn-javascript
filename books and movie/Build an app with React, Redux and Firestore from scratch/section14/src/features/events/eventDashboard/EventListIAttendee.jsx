import React from "react";
import { List, Image } from "semantic-ui-react";

export default function EventListIAttendee({ attendee }) {
  return (
    <List.Item>
      <Image
        size='mini'
        circular
        src={attendee.photoURL || "/assets/user.png"}
      />
    </List.Item>
  );
}
