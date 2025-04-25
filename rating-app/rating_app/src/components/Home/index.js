import React, { useState, useEffect } from 'react';
import './home.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Home () {

  // Test data before making backend
 
  const userss = [
    {
      name: 'Reese',
      age: 30,
      height: "6'1",
      weight: '190 lbs',
      gender: 'male',
      images: [
        'https://i.imgur.com/UwuQ4pq.jpeg',
        'https://i.imgur.com/72BwKOz.png',
        'https://i.imgur.com/vVqDfQN.jpeg',
      ]
    },

    {
      name: 'Chun-Li',
      age: 40,
      height: "5'4",
      weight: '120 lbs',
      gender: 'female',
      images: [
        'https://cdn.midjourney.com/bb72fa44-466d-43a0-a615-8ba292dace50/0_0.png',
        'https://tinyurl.com/mtfratr4',
        'https://tinyurl.com/3yw5svz5',
      ]
    },

    {
      name: 'Arianna Grande',
      age: 30,
      height: "5'1",
      weight: '106 lbs',
      gender: 'female',
      images: [
        'https://tinyurl.com/44ju4s2t',
        'https://tinyurl.com/yj9p67vn',
        'https://tinyurl.com/473j4juv',
      ]
    },

    {
      name: 'Sydney Sweeney',
      age: 27,
      height: "5'3",
      weight: '117 lbs',
      gender: 'female',
      images: [
        'https://tinyurl.com/yyt69dvk',
        'https://tinyurl.com/bdeb3fau',
        'https://tinyurl.com/3kr6e76c',
      ]
    },

    {
      name: 'Lizzo',
      age: 36,
      height: "5'10",
      weight: '271 lbs',
      gender: 'female',
      images: [
        'https://tinyurl.com/2p9ybrf8',
        'https://tinyurl.com/59sapzbd',
        'https://tinyurl.com/y65pantp',
      ]
    },

    {
      name: 'Jack Black',
      age: 55,
      height: "5'6",
      weight: '245 lbs',
      gender: 'male',
      images: [
        'https://tinyurl.com/3dry4uv9',
        'https://tinyurl.com/bdzh572t',
        'https://tinyurl.com/46ejke9n',
      ]
    },

    {
      name: 'Jason Momoa',
      age: 41,
      height: "6'4",
      weight: '224 lbs',
      gender: 'male',
      images: [
        'https://tinyurl.com/cz82hj73',
        'https://tinyurl.com/e8bywv3u',
        'https://tinyurl.com/3h3rh3c4',
      ]
    },

    {
      name: 'Jay Z',
      age: 55,
      height: "6'1",
      weight: '182 lbs',
      gender: 'male',
      images: [
        'https://tinyurl.com/3udyt7bm',
        'https://tinyurl.com/5xmrb8ac',
        'https://tinyurl.com/48vrvvpr',
      ]
    },

    {
      name: 'Beyonce',
      age: 43,
      height: "5'6",
      weight: '135 lbs',
      gender: 'female',
      images: [
        'https://tinyurl.com/3dmrkcjm',
        'https://tinyurl.com/y8c69rdp',
        'https://tinyurl.com/ycyhwc5f',
      ]
    },
   
  ];


  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(userss); // For filtering users
  const [selectedGender, setSelectedGender] = useState('all'); // Track selected filter
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false); // State for filter dropdown visibility

   useEffect(() => {
    fetch('http://localhost:3001/users', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((err) => console.error('Failed to fetch users:', err));
  }, []);

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  // Function to filter users by gender
   const filterUsersByGender = (gender) => {
    setSelectedGender(gender);
    let filtered = gender === 'all' ? users : users.filter(user => user.gender === gender);
    setFilteredUsers(filtered);
    setCurrentUserIndex(0);
    setCurrentIndex(0);
    setIsFilterDropdownOpen(false);
  };


  // Handles picture cycling events
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredUsers[currentUserIndex].images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredUsers[currentUserIndex].images.length) % filteredUsers[currentUserIndex].images.length);
  };

  // Handles image enlargement events
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Cycles through users in chronological order. Use when testing users
  const switchUser = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex + 1) % userss.length);
    setCurrentIndex(0); // Reset image index when switching users
  };

  // Function to switch to a random user
  // const switchUser = () => {
  //   let randomIndex;
  //   if (filteredUsers.length > 1) {
  //     do {
  //       randomIndex = Math.floor(Math.random() * filteredUsers.length);
  //     } while (randomIndex === currentUserIndex); // Ensure it's not the same user
  //   } else {
  //     randomIndex = 0; // If only one user, stay on the current user
  //   }

  //   setCurrentUserIndex(randomIndex);
  //   setCurrentIndex(0); // Reset image index for the new user
  // };

  // When the backend is up and running, replace the other button const's with this
  
  // const button1 = <button className="rating-button" onClick={(e) => createRating(e, user.id)}>1</button>
  // const button2 = <button className="rating-button" onClick={(e) => createRating(e, user.id)}>2</button>
  // const button3 = <button className="rating-button" onClick={(e) => createRating(e, user.id)}>3</button>
  // const button4 = <button className="rating-button" onClick={(e) => createRating(e, user.id)}>4</button>
  // const button5 = <button className="rating-button" onClick={(e) => createRating(e, user.id)}>5</button>
  // const button6 = <button className="rating-button" onClick={(e) => createRating(e, user.id)}>6</button>
  // const button7 = <button className="rating-button" onClick={(e) => createRating(e, user.id)}>7</button>
  // const button8 = <button className="rating-button" onClick={(e) => createRating(e, user.id)}>8</button>
  // const button9 = <button className="rating-button" onClick={(e) => createRating(e, user.id)}>9</button>
  // const button10 = <button className="rating-button" onClick={(e) => createRating(e, user.id)}>10</button>

  const button1 = <button className="rating-round-button">1</button>;
  const button2 = <button className="rating-round-button">2</button>;
  const button3 = <button className="rating-round-button">3</button>;
  const button4 = <button className="rating-round-button">4</button>;
  const button5 = <button className="rating-round-button">5</button>;
  const button6 = <button className="rating-round-button">6</button>;
  const button7 = <button className="rating-round-button">7</button>;
  const button8 = <button className="rating-round-button">8</button>;
  const button9 = <button className="rating-round-button">9</button>;
  const button10 = <button className="rating-round-button">10</button>;

  return (
    <div className="home-carousel-container">
      <div className="filter-dropdown">
        <FontAwesomeIcon icon={faBars} className="fa-filter-icon" onClick={toggleFilterDropdown} />
        {isFilterDropdownOpen && (
          <div className="dropdown-content">
            <button onClick={() => filterUsersByGender('all')}>All</button>
            <button onClick={() => filterUsersByGender('male')}>Male</button>
            <button onClick={() => filterUsersByGender('female')}>Female</button>
          </div>
        )}
      </div>
      {filteredUsers.length > 0 ? (
        <div className="home-card">
          <div className="home-carousel-image">
            <div className="image-wrapper">
              <img
                src={filteredUsers[currentUserIndex].images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="clickable-image"
                onClick={openModal}
              />
              <div className="left-clickable" onClick={prevImage}></div>
              <div className="right-clickable" onClick={nextImage}></div>
            </div>
          </div>
          <h2 className="home-box-title">| {filteredUsers[currentUserIndex].name}</h2>
          <h5 className="home-h5"> Age: {filteredUsers[currentUserIndex].age} </h5>
          <h5 className="home-h5"> Height: {filteredUsers[currentUserIndex].height}</h5>
          <h5 className="home-h5"> Weight: {filteredUsers[currentUserIndex].weight} </h5>
          <h5 className="home-h5"> Gender: {filteredUsers[currentUserIndex].gender} </h5>

          {isModalOpen && (
            <div className="home-modal-overlay" onClick={closeModal}>
              <div className="home-modal-content" onClick={(e) => e.stopPropagation()}>
                <img
                  src={filteredUsers[currentUserIndex].images[currentIndex]}
                  alt="Large view"
                  className="large-image"
                />
                <button className="close-button" onClick={closeModal}>
                  &times;
                </button>
              </div>
            </div>
          )}
          <div className="rating-button-container" onClick={switchUser}>
            {button1}{button2}{button3}{button4}{button5}{button6}{button7}{button8}{button9}{button10}
          </div>
        </div>
      ) : (
        <div>No users left available for this filter.</div>
      )}
    </div>
  );
};

export default Home;