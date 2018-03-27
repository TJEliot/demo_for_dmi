import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
var myDB = require('../../mysqlitedatabase.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  this.saveFunc = this.saveFunc.bind(this);
  }

  componentDidMount() {
    console.log('loaded up');
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  saveFunc(){
    console.log('yes');
    alert('yes');
  }

  render () {
  }
}

ReactDOM.render(<App />, document.getElementById('app'));