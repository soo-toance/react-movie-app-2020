import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  // 변하는 data는 state에 추가 
  state = {
    count: 0
  };

  add= () => {
    // this.state.count = 1; -- react가 state 자동 새로고침 하지 않음.
    // setState 통해 새로고침 유도해야함. - 자동으로 render 호출 (rerender)


    // 참고 : 아래 방식은 performance 이슈 존재함
    // this.setState({ count: this.state.count + 1 });
    
    this.setState(current => ({ count: current.count + 1}));
  };
  minus= () => {
    this.setState(current => ({ count: current.count - 1}));
  };

  render() {
    return <div> 
      <h1> The number is :  {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
  }

}

export default App;
