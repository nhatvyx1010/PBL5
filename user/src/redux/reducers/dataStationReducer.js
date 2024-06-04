const initialState = {
    scheduleData: null,
  };
  
  const dataStationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SCHEDULE_DATA':
        return {
          ...state,
          scheduleData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataStationReducer;