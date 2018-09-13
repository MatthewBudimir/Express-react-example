
import React from 'react';
import { render } from 'react-dom';
import 'axios';

import styles from './styles.css';
// import { add, subtract } from './module';
//
/* eslint-disable */
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    // this.handleClick = ::this.handleClick;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("hello");
    const axios = require('axios');
    axios.get(`/update`)
      .then(res => {
        console.log(res)
        this.setState(res.data);
      });
    // fetch('/update').then(data=>console.log(data));
  }

  render() {
    return (
      <div>
        <h1>
          Visited {this.state.count} times
        </h1>

        <button onClick={this.handleClick} >
          {this.props.count}
        </button>
      </div>
    );
  }
}
/* eslint-enable */
// render the app
render(<App />, document.getElementById('app'));

//
// if (module.hot) {
//   module.hot.accept();
// }
//
// const resultA = add(2, 3);
// const resultB = subtract(5, 1);

// console.log(process.env.APP_NAME);
//
// console.log(resultA, resultB);
console.log(styles.localClass); // _19OBmKu4X8SmIISJiYXz8U
console.log(styles.globalClass); // undefined
