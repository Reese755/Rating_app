import RatingChart from "./RatingChart"

function  Rating({user}){


   

    return (
        <div  className="App-header-main">
            <h2>Average Rating: {user.average_rating}</h2>
            <h2>Number of Ratings: {user.number_of_ratings}</h2>
            <h2>Number of People You Have Rated: {user.number_of_people_you_have_rated}</h2>
            <h2>Average Rating of Others: {user.average_ratings_of_others}</h2>
            <RatingChart user={user}/>
        </div>
    )
}

export default Rating;