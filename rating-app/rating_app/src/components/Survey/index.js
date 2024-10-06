import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './survey.css';

function Survey () {
  
    const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/surveys')
      .then(response => setSurveys(response.data))
      .catch(error => console.error(error));
  }, []);

 

  return (
    <div>
      {/* Maps out each survery so that it's visible */}
      <h1 className='survey-h1'>Available Surveys</h1>
      <ul>
        {surveys.map(survey => (
          <li key={survey.id}>
            {survey.title}: {survey.description}
          </li>
        ))}
      </ul>
      {/* Displays the survey container */}
      <div className="survey-container">
      <h1 className='survey-h1'>Survey</h1>
      <form >
        
          <div className="question-container">
            <label className='survey-label'>Choose a Survey</label>
          </div>
        <button className='survey-button' type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Survey;