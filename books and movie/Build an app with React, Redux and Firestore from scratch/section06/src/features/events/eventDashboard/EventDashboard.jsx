import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useSelector } from "react-redux";

export default function EventDashboard() {
  const events = useSelector((state) => state.event.events);

  // const handleCreateEvent = (event) => {
  //   setEvents([...events, event]);
  // };

  // const handleUpdateEvent = (updatedEvent) => {
  //   setEvents(
  //     events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
  //   );
  // };

  const handleDeleteEvent = (eventId) => {
    // setEvents(events.filter((evt) => evt.id !== eventId));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
