import React from 'react';
import NutritionFacts from "./NutritionFacts"
import {useState} from "react"
function Candy({candy}) {

const {name, type_of_candy, image, number_of_likes, number_of_dislikes, nutrition_facts} = candy


const [toggleFacts, setToggleFacts] = useState(true)

function handleClick() {
setToggleFacts(toggleFacts => !toggleFacts)

}
return (
  <>
    <li className="card">
      <h3>{name}</h3>
      <p><img onClick={handleClick}style={{ width:250 , height: 150 }}src={image} /></p>
      {toggleFacts ? <div>
        <p>Type of Candy: {type_of_candy}</p>
        <p>Number of Likes: {number_of_likes}</p>
        <p>Number of Dislikes: {number_of_dislikes}</p>
      </div> : <NutritionFacts name={name} image={image} nutrition_facts={nutrition_facts}/> } 
    </li>
    </>
    );
}
export default Candy