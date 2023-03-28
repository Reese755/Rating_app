import './App.css';
import {Route, Switch} from "react-router-dom";
import {useState, useEffect} from "react";
import Login from "./Login"
import Signup from "./Signup"
import NavBar from "./NavBar"
import Survey from "./Survey"
import Rating from "./Rating"
import Home from "./Home"
import Profile from "./Profile"
import About from "./About"



function App() {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [ratings, setRatings] = useState([])
  const [loginFormData, setLoginFormData] = useState({})
  const [signupFormData, setSignupFormData] = useState({})
  const [updateRatingFormData, setUpdateRatingFormData] = useState({})
  const [updateUserFormData, setUpdateUserFormData] = useState({})
  const [selectedGender, setSelectedGender] = useState('All');

  const genderOptions = ['All', 'Male', 'Female', 'Trans', 'Non-binary'];

  
// Handles user log in
function onLogin(event){
  event.preventDefault()
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginFormData)
  })
  .then(response => {
    if(response.ok){
      response.json().then(userData => setUser(userData))
    }
    else if(response.status === 401){
      alert("Error: Invalid username or password! Try again!")
    }
    else{
      alert(`Error: ${response.status} ${response.statusText}`)
    }
  })
}

// handles usser logout
function onLogout(){
  fetch("/logout", {
    method: "DELETE"
  })
  .then(response => {
    if(response.ok){
      setUser(null)
    }
  })
}


// Checks if user is currently logged in
useEffect(() => {
  fetch("/me")
  .then(response => {
    if(response.ok){
      response.json().then(userData => setUser(userData))
    }
  })
}, [])

function updateLoginFormData(event){
  setLoginFormData({...loginFormData, [event.target.name]: event.target.value})
}

function onSignup(event){
  event.preventDefault()
  console.log(signupFormData)
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(signupFormData)
  })
  .then(response => {
    if(response.ok){
      response.json().then(userData => setUser(userData))
    }
    else if(response.status === 422){
      alert("Error: Username already exists or invalid Username! Please try again!")
    }
    else{
      alert(`Error: ${response.status} ${response.statusText}`)
    }
  })
}


function updateSignupFormData(event){
  setSignupFormData({...signupFormData, [event.target.name]: event.target.value})
}

// Gets the ratings for the current user
useEffect(() => {
  fetch('/ratings')
  .then(response => response.json())
  .then(ratingData => {
      setRatings(ratingData)
  })
  }, [])

  // Posts the users ratings of others to the backend
  function createRating(event, id){
    fetch(`/ratings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        value: Number(event.target.textContent),
        user_id: user.id,
        rating_for_user: id
      })
    })
    .then(response => response.json())
    .then(newRating => setRatings(ratings.map(rating => {
      if(rating.id === Number(event.target.textContent)){
        return newRating
      }
      else{
        return rating
      }
    })))
  }

  // Updates the state containing the form data for the new rating to be updated
  function handleChangeForRatingUpdate(event){
    if(event.target.name === 'ratings'){
      setUpdateRatingFormData({ ...updateRatingFormData, [event.target.name]: Number(event.target.value)})
    }
    else{
      setUpdateRatingFormData({ ...updateRatingFormData, [event.target.name]: event.target.value })
    }
  }
//Gets the user's data
  useEffect(() => {
    fetch('/users')
      .then(response => response.json())
      .then(userData => setUsers(userData));
  }, []);


  function updateUser(id) {
    fetch(`/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateUserFormData)
    })
    .then(response => {
      if(response.ok){
        response.json().then(updatedUser => setUser(updatedUser))
      }
      else{
        //alert(`${response.status} ${response.statusText}`)
        response.json().then(errorData => alert(`Error: ${errorData.errors.join(',')}`))
      }
    })
  }

// handles change for updating the user's info to the backend
  function handleChangeForUpdate(event){
    if(event.target.name === 'age' || event.target.name === 'weight'){
      setUpdateUserFormData({ ...updateUserFormData, [event.target.name]: Number(event.target.value)})
    }
    else{
      setUpdateUserFormData({ ...updateUserFormData, [event.target.name]: event.target.value })
    }
  }

// handles delete for user account
function deleteAccount() {
  fetch(`users/${user.id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log('Account deleted successfully');
})
.catch(error => {
  console.error('There was a problem deleting the account:', error);
});
}

// useEffect(() => {
//   fetch('/surveys')
//   .then(response => response.json())
//   .then(surveyData => {
//       setSurveys(surveyData)
//   })
//   }, [])


//   useEffect(() => {
//     fetch('/questions')
//     .then(response => response.json())
//     .then(questionData => {
//         setQuestions(questionData)
//     })
//     }, [])

//     useEffect(() => {
//       fetch('/options')
//       .then(response => response.json())
//       .then(optionData => {
//           setOptions(optionData)
//       })
//       }, [])

  return (
    <>
 
      {user ? <NavBar user={user} onLogout={onLogout}/> : null}

        <Switch> 
          <Route path="/login">
            {
              user ?
              null : 
              <Login onLogin={onLogin} updateLoginFormData={updateLoginFormData}/>
            }
          </Route>
          <Route path="/signup">
            {
              user ?
              "Please log out before signing up for an account" :
              <Signup onSignup={onSignup} updateSignupFormData={updateSignupFormData} />
            }
          </Route>
          <Route path="/survey">
            {user ? <Survey/> : "Please log in to view surveys"}
          </Route>
          <Route path="/ratings">
            {user ? <Rating user={user}/> : "Please log in to view rating"}
          </Route>
          <Route path="/profile">
            {user ? <Profile deleteAccount={deleteAccount} updateUser={updateUser} handleChangeForUpdate={handleChangeForUpdate} user={user} users={users}/> : "Please log in to view profile"}
          </Route>
          <Route path="/about">
            {user ?  <About /> : "Please log in to view about page"}
          </Route>
           <Route path="/">
            {user ? <Home handleChangeForRatingUpdate={handleChangeForRatingUpdate} createRating={createRating} user={user} users={users}/> : "Please log in to view Home Page"}
           </Route>
         
        </Switch>
    </>
  );
}

export default App;
