import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './surveys.css'

function Survey1 () {

     const navigate = useNavigate();

 

    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        q11: '',
        q12: '',
        q13: '',
      });


      const handleChange = (event) => {
        setAnswers({
          ...answers,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(answers);
        alert("Survey submitted!");
        // Navigate back to the first survey page after form submission
         navigate('/survey');
      };

    return (
        <div className="survey-container">
        <h1>Physical Asthetics Survey</h1>
        <form onSubmit={handleSubmit}>
          {/* Question 1 */}
          <div className="question">
            <p>1. How important is height when it comes to attraction?</p>
            <label><input type="radio" name="q1" value="Very Important" onChange={handleChange} /> Very Important</label>
            <label><input type="radio" name="q1" value="Somewhat Important" onChange={handleChange} /> Somewhat Important</label>
            <label><input type="radio" name="q1" value="Mostly Unimportant" onChange={handleChange} /> Mostly Unimportant</label>
            <label><input type="radio" name="q1" value="Not Important" onChange={handleChange} /> Not Important</label>
          </div>
  
          {/* Question 2 */}
          <div className="question">
            <p>2. What is your preference in hair length for attraction?</p>
            <label><input type="radio" name="q2" value="Very Long" onChange={handleChange} /> Very Long</label>
            <label><input type="radio" name="q2" value="Long" onChange={handleChange} /> Long</label>
            <label><input type="radio" name="q2" value="Shoulder Length" onChange={handleChange} /> Shoulder Length</label>
            <label><input type="radio" name="q2" value="Short" onChange={handleChange} /> Short</label>
            <label><input type="radio" name="q2" value="Very Short" onChange={handleChange} /> Very Short</label>
            <label><input type="radio" name="q2" value="It doesn't matter" onChange={handleChange} /> It doesn't matter</label>
          </div>
  
          {/* Question 3 */}
          <div className="question">
            <p>3. How important is weight/fitness when it comes to attraction?</p>
            <label><input type="radio" name="q3" value="Very Important" onChange={handleChange} /> Very Important</label>
            <label><input type="radio" name="q3" value="Important" onChange={handleChange} /> Important</label>
            <label><input type="radio" name="q3" value="Somewhat Important" onChange={handleChange} /> Somewhat Important</label>
            <label><input type="radio" name="q3" value="Somewhat Unimportant" onChange={handleChange} /> Somewhat Unimportant</label>
            <label><input type="radio" name="q3" value="Not Important" onChange={handleChange} /> Not Important</label>
          </div>
  
          {/* Question 4 */}
          <div className="question">
            <p>4. What age range are you most likely to date?</p>
            <label><input type="radio" name="q4" value="18-24" onChange={handleChange} /> 18-24</label>
            <label><input type="radio" name="q4" value="25-30" onChange={handleChange} /> 25-30</label>
            <label><input type="radio" name="q4" value="30-35" onChange={handleChange} /> 30-35</label>
            <label><input type="radio" name="q4" value="35-40" onChange={handleChange} /> 35-40</label>
            <label><input type="radio" name="q4" value="40-45" onChange={handleChange} /> 40-45</label>
            <label><input type="radio" name="q4" value="45-50" onChange={handleChange} /> 45-50</label>
            <label><input type="radio" name="q4" value="50-55" onChange={handleChange} /> 50-55</label>
            <label><input type="radio" name="q4" value="55-60" onChange={handleChange} /> 55-60</label>
            <label><input type="radio" name="q4" value="60-65+" onChange={handleChange} /> 60-65+</label>
          </div>
  
          {/* Question 5 */}
          <div className="question">
            <p>5. What age range do you think women are the most attractive?</p>
            <label><input type="radio" name="q5" value="18-24" onChange={handleChange} /> 18-24</label>
            <label><input type="radio" name="q5" value="25-30" onChange={handleChange} /> 25-30</label>
            <label><input type="radio" name="q5" value="30-35" onChange={handleChange} /> 30-35</label>
            <label><input type="radio" name="q5" value="35-40" onChange={handleChange} /> 35-40</label>
            <label><input type="radio" name="q5" value="40-45" onChange={handleChange} /> 40-45</label>
          </div>
  
          {/* Question 6 */}
          <div className="question">
            <p>6. What age range do you think men are the most attractive?</p>
            <label><input type="radio" name="q6" value="18-24" onChange={handleChange} /> 18-24</label>
            <label><input type="radio" name="q6" value="25-30" onChange={handleChange} /> 25-30</label>
            <label><input type="radio" name="q6" value="30-35" onChange={handleChange} /> 30-35</label>
            <label><input type="radio" name="q6" value="35-40" onChange={handleChange} /> 35-40</label>
            <label><input type="radio" name="q6" value="40-45" onChange={handleChange} /> 40-45</label>
          </div>
  
          {/* Question 7 */}
          <div className="question">
            <p>7. How would you rate your physical attractiveness compared with others your age?</p>
            <label><input type="radio" name="q7" value="Much more attractive" onChange={handleChange} /> Much more attractive</label>
            <label><input type="radio" name="q7" value="More attractive" onChange={handleChange} /> More attractive</label>
            <label><input type="radio" name="q7" value="About the same" onChange={handleChange} /> About the same</label>
            <label><input type="radio" name="q7" value="Less attractive" onChange={handleChange} /> Less attractive</label>
            <label><input type="radio" name="q7" value="Much less attractive" onChange={handleChange} /> Much less attractive</label>
          </div>
  
          {/* Question 8 */}
          <div className="question">
            <p>8. Which would matter more if you were trying to attract someone for dating?</p>
            <label><input type="radio" name="q8" value="How attractive you think you are" onChange={handleChange} /> How attractive you think you are</label>
            <label><input type="radio" name="q8" value="How attractive others think you are" onChange={handleChange} /> How attractive others think you are</label>
          </div>
  
          {/* Question 9 */}
          <div className="question">
            <p>9. What is your age?</p>
            <label><input type="radio" name="q9" value="18-24" onChange={handleChange} /> 18-24</label>
            <label><input type="radio" name="q9" value="25-30" onChange={handleChange} /> 25-30</label>
            <label><input type="radio" name="q9" value="30-35" onChange={handleChange} /> 30-35</label>
            <label><input type="radio" name="q9" value="35-40" onChange={handleChange} /> 35-40</label>
            <label><input type="radio" name="q9" value="40-45" onChange={handleChange} /> 40-45</label>
            <label><input type="radio" name="q9" value="45-50" onChange={handleChange} /> 45-50</label>
            <label><input type="radio" name="q9" value="50-55" onChange={handleChange} /> 50-55</label>
            <label><input type="radio" name="q9" value="55-60" onChange={handleChange} /> 55-60</label>
            <label><input type="radio" name="q9" value="60-65+" onChange={handleChange} /> 60-65+</label>
          </div>
  
          {/* Question 10 */}
          <div className="question">
            <p>10. What is your gender?</p>
            <label><input type="radio" name="q10" value="Male" onChange={handleChange} /> Male</label>
            <label><input type="radio" name="q10" value="Female" onChange={handleChange} /> Female</label>
            <label><input type="radio" name="q10" value="Other" onChange={handleChange} /> Other</label>
            <label><input type="radio" name="q10" value="Prefer not to say" onChange={handleChange} /> Prefer not to say</label>
          </div>
  
          {/* Question 11 */}
          <div className="question">
            <p>11. What is your race?</p>
            <label><input type="radio" name="q11" value="White" onChange={handleChange} /> White</label>
            <label><input type="radio" name="q11" value="Black" onChange={handleChange} /> Black</label>
            <label><input type="radio" name="q11" value="Asian" onChange={handleChange} /> Asian</label>
            <label><input type="radio" name="q11" value="Latino" onChange={handleChange} /> Latino</label>
            <label><input type="radio" name="q11" value="Latino" onChange={handleChange} /> Pacific Islander</label>
            <label><input type="radio" name="q11" value="Latino" onChange={handleChange} /> MENA (Middle Eastern North African)</label>
            <label><input type="radio" name="q11" value="Latino" onChange={handleChange} /> Native American</label>
            <label><input type="radio" name="q11" value="Other" onChange={handleChange} /> Other</label>
            <label><input type="radio" name="q11" value="Prefer not to say" onChange={handleChange} /> Prefer not to say</label>
          </div>
  
          {/* Question 12 */}
          <div className="question">
            <p>12. Do you think race plays a role in physical attraction?</p>
            <label><input type="radio" name="q12" value="Yes" onChange={handleChange} /> Yes</label>
            <label><input type="radio" name="q12" value="No" onChange={handleChange} /> No</label>
          </div>
  
          {/* Question 13 */}
          <div className="question">
            <p>13. How much does personality matter to you when determining someone's attractiveness?</p>
            <label><input type="radio" name="q13" value="Very Important" onChange={handleChange} /> Very Important</label>
            <label><input type="radio" name="q13" value="Important" onChange={handleChange} /> Important</label>
            <label><input type="radio" name="q13" value="Somewhat Important" onChange={handleChange} /> Somewhat Important</label>
            <label><input type="radio" name="q13" value="Not Important" onChange={handleChange} /> Not Important</label>
          </div>
  
          <button className="survey-button" type="submit">Submit Survey</button>
        </form>
      </div>
    );
  }
export default Survey1;