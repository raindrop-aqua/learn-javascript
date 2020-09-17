import React from "react";
import { Link } from "react-router-dom";
import { List, Image } from "semantic-ui-react";

export default function EventListIAttendee({ attendee }) {
  return (
    <List.Item as={Link} to={`/profile/${attendee.id}`}>
      <Image
        size='mini'
        circular
        src={attendee.photoURL || "/assets/user.png"}
      />
    </List.Item>
  );
}
