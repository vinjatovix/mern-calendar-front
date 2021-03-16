import moment from "moment";
import { types } from "../types/types";

const initialState = {
  events: [
    {
      ud: new Date().getTime(),
      title: "Reunion",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgcolor: "#fafaaf",
      notes: "cualquier cosa",
      user: {
        _id: "12",
        name: "pepe",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };
    default:
      return state;
  }
};
