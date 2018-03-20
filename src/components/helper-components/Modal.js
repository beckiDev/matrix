

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { store } from '../../index.js'
import { Provider } from 'react-redux';

export default class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }
  componentWillUpdate(nextProps, nextState) {
    this._render();
  }
  componentWillUnmount() {
    ReactDom.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }
  _render(){
    ReactDom.render(
      <Provider store={store}><div>{this.props.children}</div> </Provider>,
      this.modalTarget
    )
  }
  render() {
    return <noscript />;
  }
}
