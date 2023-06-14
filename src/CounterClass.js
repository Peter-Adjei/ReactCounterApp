import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  handleIncreaseCount =(event) =>{
    event.preventDefault();
    this.setState({count: this.state.count +4})
    
  }
  handleDecreaseCount =(event) =>{
    event.preventDefault();
    this.setState({count: this.state.count -4})
    
  }



  render() {
    return (
      <div>
        <h1>Counter:{this.state.count} </h1>
        <hr/>
        <button onClick={this.handleIncreaseCount}>Increase</button>
        <button onClick={this.handleDecreaseCount}>Decrease</button>
      </div>
    );
  }
}

export default CounterClass;

// import React, {useState} from 'react';

// const CounterFunction = () => {
//     const [count, handleIncrease] = useState(0)
//     return (
//         <div>
//             <h1>Counter: 0</h1>
//             <hr></hr>
//             <button onCl>Increase</button>
//             <button>Decrease</button>
//         </div>
//     );
// }

// export default CounterFunction;


