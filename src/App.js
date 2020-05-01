import React from 'react';
import PropTypes from 'prop-types';

// props.fav = {fav} : es6 문법 
function Food({ fav, picture, rating }) {
  return <div>
        <h3>I love {fav}!</h3>
        <h4>{rating} / 10</h4>
        <img src={picture} alt={fav}></img>
  </div> 
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


const foodIlike = [
  {
    id: 1,
    name: "potato",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 5.5
  },
  {
    id: 2,
    name: "carrot",
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&auto=format&fit=crop&w=1161&q=80",
    rating: 4.6  
  },
  {
    id: 3,
    name: "ham",
    image: "https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    rating: 4.3 
  }
];

function renderFood(dish) {
  return <Food 
    key={dish.id} 
    fav={dish.name} 
    picture={dish.image} 
  />
}


// 방법1
//   {foodIlike.map((dish) => (
//   <Food fav={dish.name} picture={dish.image}/>
//   ))}

// 방법 2 
// <div>
// {foodIlike.map(renderFood)}
// </div>

function App() {
  return (
    <div>
      {foodIlike.map((dish) => (
        <Food key={dish.id} fav={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
