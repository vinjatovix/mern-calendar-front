import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { NavBar } from "../ui/NavBar";
import { messages } from "../../helpers/calendar-messages-gl";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/gl";
import { CalendarEvent } from "./CalendarEvent";

moment.locale("gl");
const localizer = momentLocalizer(moment);

const events = [
  {
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
];

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );
  const onDoubleClick = (e) => {
    console.log(e);
  };
  const onSelect = (e) => {
    console.log(e);
  };
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "red",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };
    return { style };
  };
  return (
    <div className="CalendarScreen">
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
    </div>
  );
};
