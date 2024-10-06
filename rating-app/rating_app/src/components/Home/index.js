import React, { useState } from 'react';
import './home.css'; 

function Home () {

  // Test data before making backend
  const height = ['6 foot 1'];
  const age = ['30'];
  const gender = ['male'];
  const weight = ['190'];
  const user = ['Reese'];
  


  const images = [
    'https://via.placeholder.com/300x200.png?text=Image+1',
    'https://via.placeholder.com/300x200.png?text=Image+2',
    'https://via.placeholder.com/300x200.png?text=Image+3',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // const button1 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>1</button>
  // const button2 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>2</button>
  // const button3 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>3</button>
  // const button4 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>4</button>
  // const button5 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>5</button>
  // const button6 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>6</button>
  // const button7 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>7</button>
  // const button8 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>8</button>
  // const button9 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>9</button>
  // const button10 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>10</button>

const button1 = <button className= "rating-round-button">1</button>
const button2 = <button className= "rating-round-button">2</button>
const button3 = <button className= "rating-round-button">3</button>
const button4 = <button className= "rating-round-button">4</button>
const button5 = <button className= "rating-round-button">5</button>
const button6 = <button className= "rating-round-button">6</button>
const button7 = <button className= "rating-round-button">7</button>
const button8 = <button className= "rating-round-button">8</button>
const button9 = <button className= "rating-round-button">9</button>
const button10 = <button className= "rating-round-button">10</button>


  return (

    // Add a skip button to image carosel under the rating buttons
    <div className="home-carousel-container">
      <div className="home-card">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="home-carousel-image" />
        <h3 className="home-box-title">| {user}</h3>
        <h6 className='home-h6'> Age: {age} </h6>
        <h6 className='home-h6'> Height: {height}</h6>
        <h6 className='home-h6'> Weight: {weight} </h6>
        <h6 className='home-h6'> Gender: {gender} </h6>
        <br/>
        <div className="rating-button-container">{button1}{button2}{button3}{button4}{button5}{button6}{button7}{button8}{button9}{button10}</div>;
        
           </div>
      <div className="home-carousel-controls">
        
        <button className="home-carousel-button" onClick={prevImage}>Previous</button>
        <button className="home-carousel-button" onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Home;