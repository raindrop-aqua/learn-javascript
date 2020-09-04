import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListIAttendee from "./EventListIAttendee";

export default function EventListItem() {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='/assets/user.png' />
            <Item.Content>
              <Item.Header content='Event Title' />
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name='clock' /> Date
          <Icon name='marker' /> Venue
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          <EventListIAttendee />
          <EventListIAttendee />
          <EventListIAttendee />
        </List>
      </Segment>
      <Segment clearing>
        <div>Description</div>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </Segment.Group>
  );
}
