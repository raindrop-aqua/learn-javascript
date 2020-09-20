import React from "react";
import EventListItem from "./EventListItem";
import InfiniteScroll from "react-infinite-scroller";

export default function EventList({
  events,
  getNextEvents,
  loading,
  moreEvents,
}) {
  return (
    <>
      {events.longth !== 0 && (
        <InfiniteScroll
          pageStart={0}
          loadMore={getNextEvents}
          hasMore={!loading && moreEvents}
          initialLoad={false}
        >
          {events.map((event) => (
            <EventListItem key={event.id} event={event} />
          ))}
        </InfiniteScroll>
      )}
    </>
  );
}
