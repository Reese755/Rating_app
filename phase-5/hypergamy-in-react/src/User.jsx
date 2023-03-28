function User({createRating, LoggedInUser, user}) {

const button1 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>1</button>
const button2 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>2</button>
const button3 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>3</button>
const button4 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>4</button>
const button5 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>5</button>
const button6 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>6</button>
const button7 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>7</button>
const button8 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>8</button>
const button9 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>9</button>
const button10 = <button className= "rating-button"onClick={(e) => createRating(e, user.id)}>10</button>
    return (
        <>
        <div className="home-boarder-box">
    <div className="home-wrap">
  <div className="home-box">
    <div className="home-box-top">
      <img className="home-box-image" src={user.profile_picture} alt="profile"/>
      <div className="home-title-flex">
        <h3 className="home-box-title">{user.name}</h3>
        <h6> Height: {user.height} </h6>
        <h6> Weight: {user.weight} </h6>
      </div>
    </div>
    <div className="rating-buttons">
    {button1}{button2}{button3}{button4}{button5}{button6}{button7}{button8}{button9}{button10}
    </div>
  </div>
  
</div>
</div>
        </>
    )
}
export default User;