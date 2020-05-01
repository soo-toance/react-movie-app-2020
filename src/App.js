import React from 'react';

// props.fav = {fav} : es6 문법 
function Food({ fav }) {
  return <h3>I love {fav}!</h3>;
}

// food component에게 fav property(prop)로 potato 전달
// boolean, array 모두 전달 가능 
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="potato" /> 
      <Food fav="carrot" /> 
      <Food fav="ham" /> 
    </div>
  );
}

export default App;
