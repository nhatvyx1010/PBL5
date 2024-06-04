import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  // setMonthIndex: (index) => {},
  setMonthIndex: () => {},
  smallCalendarMonth: 0,
  // setSmallCalendarMonth: (index) => {},
  setSmallCalendarMonth: () => {},
  daySelected: null,
  setDaySelected: () => {},
  // setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  // dispatchCalEvent: ({ type, payload }) => {},
  dispatchCalEvent: () => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  filteredEvents: [],
});

export default GlobalContext;
