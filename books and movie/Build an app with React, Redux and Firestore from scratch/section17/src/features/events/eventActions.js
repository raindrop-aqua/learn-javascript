import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
  LISTEN_TO_EVENT_CHAT,
  CLEAR_COMMENTS,
} from "./eventConstants";
import {
  asyncActionStart,
  asyncActionError,
  asyncActionFinish,
} from "../../app/async/asyncReducer";
import {
  dataFromSnapshot,
  fetchEventsFromFirestore,
} from "../../app/firestore/firestoreService";

export function fetchEvents(predicate, limit, lastDocSnapshot) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const snapshot = await fetchEventsFromFirestore(
        predicate,
        limit,
        lastDocSnapshot
      ).get();
      const lastVisible = snapshot.docs[snapshot.docChanges.length - 1];
      const moreEvents = snapshot.docs.length >= limit;
      const events = snapshot.docs.map((doc) => dataFromSnapshot(doc));
      dispatch({ type: FETCH_EVENTS, payload: { events, moreEvents } });
      dispatch(asyncActionFinish());
      return lastVisible;
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}

export function listenToEvents(events) {
  return {
    type: FETCH_EVENTS,
    payload: events,
  };
}

export function createEvent(event) {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
}

export function updateEvent(event) {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
}

export function deleteEvent(eventId) {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
}

export function listenToEventChat(comments) {
  return {
    type: LISTEN_TO_EVENT_CHAT,
    payload: comments,
  };
}

export function clearComments() {
  return {
    type: CLEAR_COMMENTS,
  };
}
