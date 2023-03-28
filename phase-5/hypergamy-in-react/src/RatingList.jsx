import Rating from './Rating'

function RatingList({ratings}){
    console.log(ratings)
    const ratingComponents = ratings.map((rating) => {
        return <Rating key={rating.id} rating={rating} />
    })
    
    return (
        <>

            <div className="App-header-main">
            <h1>Here Are Your Rating Statistics:</h1>
            {ratingComponents}
            </div>
            <NavBar />
        </>
    )
}

export default RatingList;