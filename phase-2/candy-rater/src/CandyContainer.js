import React from "react"
import {useState, useEffect} from "react";
import CandyList from "./CandyList"
import AddCandy from "./AddCandy"

function CandyContainer() {

const [candies, setCandies] = useState([])

const [candyFormInfo, setCandyFormInfo] = useState({
    name: "",
    type_of_candy: "",
    image: "",
    number_of_likes: 0,
    number_of_dislikes: 0
}) 

useEffect(() => {
fetch('http://localhost:3000/candies')
.then(response => response.json())
.then(candyData => {
    setCandies(candyData)
})
}, [])

function addNewCandy(event) {
    event.preventDefault()
    fetch('http://localhost:3000/candies', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(candyFormInfo)
    })
    .then(response => response.json())
    .then(newCandy => setCandies([...candies, newCandy]))
}


function updateFormInfo(event) {
    if(event.target.name === 'number_of_likes' || event.target.name === 'number_of_dislikes'){
        setCandyFormInfo({...candyFormInfo, [event.target.name] : Number(event.target.value)});
      }
        else {
          setCandyFormInfo({...candyFormInfo, [event.target.name] : event.target.value});
        }
      }
      

return (
    <>
        <CandyList candies={candies}/>
        <AddCandy addNewCandy={addNewCandy} updateFormInfo={updateFormInfo}/>
        <div className= "container">
            <div class="child" id="name"></div>

        </div>
    </>
    );
}
export default CandyContainer;