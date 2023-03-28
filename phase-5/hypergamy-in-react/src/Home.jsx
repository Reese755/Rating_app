import './Home.css';
import React from "react";
import UserList from './UserList'

function Home ({createRating, user, users}) {







return (
    <>
    <UserList LoggedInUser={user} users={users} createRating={createRating}/>
    {/* <div className="home-boarder-box">
    <div className="home-wrap">
  <div className="home-box">
    <div className="home-box-top">
      <img className="home-box-image" src="https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTQzNA&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza"/>
      <div className="home-title-flex">
        <h3 className="home-box-title">Taylor Green</h3>
      </div>
    </div>
    <div className="rating-buttons">
    {button1}{button2}{button3}{button4}{button5}{button6}{button7}{button8}{button9}{button10}
    </div>
  </div>
  
</div>
</div> */}
{/* <img className="home-box-image" src="https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTQzNA&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza"/> */}
    </>
    )
}

export default Home;