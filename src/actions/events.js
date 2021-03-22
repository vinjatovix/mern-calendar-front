import { endpoints, tokenFetch } from "../helpers/API/api-helpers";
import { types } from "../types/types";

export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, username } = getState().auth;
    try {
      const res = await tokenFetch(endpoints.events, event, "POST");
      const body = await res.json();
      if (body.ok) {
        event.id = body.event.id;
        event.user = {
          _id: uid,
          username: username,
        };
        console.log(event);
        dispatch(eventAddNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

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
