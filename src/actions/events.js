import { endpoints, tokenFetch } from "../helpers/API/api-helpers";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;
    try {
      const res = await tokenFetch(endpoints.events, event, "POST");
      const body = await res.json();
      if (body.ok) {
        event.id = body.event.id;
        event.user = {
          _id: uid,
          name: name,
        };
        dispatch(eventAddNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const res = await tokenFetch(endpoints.events);
      const body = await res.json();
      const events = prepareEvents(body.events);
      console.log(events);
      dispatch(eventsLoaded(events));
    } catch (error) {
      console.log(error);
    }
  };
};

const eventsLoaded = (events) => ({
  type: types.eventsLoaded,
  payload: events,
});

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});
export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});
export const eventClearActiveEvent = () => ({
  type: types.eventClearActiveEvent,
});
export const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event,
});
export const eventDeleted = (event) => ({
  type: types.eventDeleted,
  payload: event,
});
