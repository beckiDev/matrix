import React from 'react';

//import {rightClick} from './helper-components/displayText';
//import { Link, Route } from 'react-router-dom'

let rightClickTarget = '';

const handleItemClick = (e) =>{

  let contextMenu = document.getElementById('contextMenu');
  const getColumnClass= rightClickTarget.getAttribute("class").split(' ').pop();
  const col = document.getElementsByClassName(getColumnClass);
  console.log(col)
  for(let item of col){
     item.classList.add("sticky");
  }
  contextMenu.style.display = 'none';
}

const openMenu = (e) => {
  e.preventDefault();
  let contextMenu = document.getElementById('contextMenu');
  contextMenu.style.display = 'block';
  contextMenu.style.left = e.clientX + 'px';
  contextMenu.style.top = e.clientY + 'px';
  rightClickTarget = e.target;
}


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
              return <th className={`col col${index}`} onContextMenu={openMenu} key={index}>{item}</th>
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
        return (<tr className="tableRow" key={j}>
          {
            rowItem.map((columnItem, i) => {
              return <td className={`col${i}`} key={i}>{columnItem}</td>
            })
          }
        </tr>)
      }))
    }
  }

  if (props.events.length !== 0) {
    const {events} = props;
    return (
      <div>
      <div id="contextMenu" className="contextMenu">
        <ul>
          <li onClick={handleItemClick}>Freeze column</li>
        </ul>
      </div>
      <div>
        <table className="container">
          <thead>
            {renderRows(events, 'th')}
          </thead>
          <tbody>
            {renderRows(events, 'tb')}
          </tbody>
        </table>
        </div>
    </div>
  )
  } else
    return 'Loading...'
}

export default Table;
