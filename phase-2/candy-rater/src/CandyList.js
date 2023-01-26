import React from 'react';
import Candy from "./Candy"

function CandyList({candies}) {
console.log(candies)
const candyComponents = candies.map((candy)=> {  
    return ( <Candy key={candy.id} candy={candy}/> )
})


return (
    <div className="cards">
        {candyComponents}
    </div>
    );
}

export default CandyList;