import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Loader } from "semantic-ui-react";
import EventList from "./EventList";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import EventFilters from "./EventFilters";
import { clearEvents, fetchEvents } from "../eventActions";
import EventsFeed from "./EventsFeed";

export default function EventDashboard() {
  const limit = 5;
  const dispatch = useDispatch();
  const { events, moreEvents } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);
  const { authenticated } = useSelector((state) => state.auth);
  const [lastDocSnapshot, setLastDocSnapshot] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(false);
  const [predicate, setPredicate] = useState(
    new Map([
      ["startDate", new Date()],
      ["filter", "all"],
    ])
  );

  function handleSetPredicate(key, value) {
    dispatch(clearEvents());
    setLastDocSnapshot(null);
    setPredicate(new Map(predicate.set(key, value)));
  }

  useEffect(() => {
    setLoadingInitial(true);
    dispatch(fetchEvents(predicate, limit)).then((lastVisible) => {
      setLastDocSnapshot(lastVisible);
      setLoadingInitial(false);
    });
    return () => {
      dispatch(clearEvents());
    };
  }, [dispatch, predicate]);

  function handleFetchNextEvents() {
    dispatch(fetchEvents(predicate, limit, lastDocSnapshot)).then(
      (lastVisible) => {
        setLastDocSnapshot(lastVisible);
      }
    );
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        {loadingInitial && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}

        <EventList
          events={events}
          getNextEvents={handleFetchNextEvents}
          loading={loading}
          moreEvents={moreEvents}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {authenticated && <EventsFeed />}

        <EventFilters
          predicate={predicate}
          setPredicate={handleSetPredicate}
          loading={loading}
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Loader active={loading} />
      </Grid.Column>
    </Grid>
  );
}
