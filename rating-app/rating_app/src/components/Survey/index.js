import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <h1 className='survey-h1'>Select a Survey</h1>
      <ul>
        {surveys.map(survey => (
          <li key={survey.id}>
            {survey.title}: {survey.description}
          </li>
        ))}
      </ul>
      {/* Displays the survey container */}
      <div className="survey-container">
      <form >
        
          <div className="question-container">
            <label className='survey-label'>Survey On Physical Asthetics</label>
          </div>
          <p className="survey-p">13 Questions, estimated time: 2 minutes</p>
          <Link to="/survey1" className="survey-button">Start Survey</Link>
      </form>
    </div>
    </div>
  );
};

export default Survey;