export const SET_EVENTS = 'SET_EVENTS';


export function setEvents(items) {
  return {
    type: SET_EVENTS,
    items
  }
}

export function fetchEvents() {
  return dispatch => {
    fetch('http://localhost:4000/events')
    .then( response => response.json())
    .then( item => dispatch(setEvents(item)))
    .catch( err => console.log('ERROR', err))
  }
}
