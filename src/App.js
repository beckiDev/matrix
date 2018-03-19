import React, { Component } from 'react';
import Table from './components/Table'
import { connect } from 'react-redux';
import { fetchEvents } from './actions/index.js'
import './style/App.css';

class App extends Component {
  componentDidMount() {
      this.props.fetchEvents();
  }

  render() {
    return (
      <div className="App container">
        <h3>GetData</h3>
        <button className="btn btn-info"
                onClick={()=>window.location.reload()}>Get Latest Data
        </button><br/>
        <Table events={this.props.events}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.EventsReducer
  }
}

export default connect(mapStateToProps, { fetchEvents })(App);
