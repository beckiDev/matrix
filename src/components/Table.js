import React from 'react';
//import { Link, Route } from 'react-router-dom'
// import TableEvent from './TableEvent.js';

const Table = (props) => {
  const renderRows = (events, renderPlace) => {
    const allRowTitles = [];
    const rowEvents = [];
    for (let i = 0; i < events.length; i++) {
      rowEvents.push([]);
    };
    for (let i = 0; i < events.length; i++) {
      const ev = events[i]
      if (renderPlace === 'th') {
        for (let key in ev) {
          if (allRowTitles.includes(key)) {
            return;
          } else {
            allRowTitles.push(key)
          }
        }
        return (<tr className="MultiGrid">
          {
            allRowTitles.map((item, index) => {
              return <td className="col" key={index}>{item}</td>
            })
          }
        </tr>)
      } else if (renderPlace === 'tb') {
        for (let n in ev) {
          rowEvents[i].push(ev[n]);
        }
      }
    }
    for (let i = 0; i < events.length; i++) {
      return (rowEvents.map((rowItem, j) => {
        return (<tr key={j}>
          {
            rowItem.map((columnItem, i) => {
              return <td key={i}>{columnItem}</td>
            })
          }
        </tr>)
      }))
    }
  }

  if (props.events.length !== 0) {
    const {events} = props;
    return (<div>
      <table className="container">
        <thead>
          {renderRows(events, 'th')}
        </thead>
        <tbody>
          {renderRows(events, 'tb')}
        </tbody>
      </table>
    </div>)
  } else
    return 'Loading...'
}

export default Table;
