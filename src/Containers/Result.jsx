import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../Components/Message';

const action = {
  type: 'UPDATE_CHOICE_WITH_MY_INDEX',
  indexSelected: Math.floor(Math.random() * 4)
}

class Result extends Component {
  constructor(props) {
    super(props);
    setInterval(() => this.props.dispatch(action), 1000);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.houses.map(house => <li key={house}>{house}</li>)}
        </ul>
        <Message message={this.props.selectedHouse} />
      </div>
    )
  }
}

export default connect(store => store)(Result);