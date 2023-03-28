import './Survey.css';

function Survey() {


return (
  <div className="survey-form">
  <h2>Survey Form</h2>
  <form className="form-form">
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
    </div>
    <div className="form-group">
      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" />
    </div>
    <div className="form-group">
      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback" name="feedback"></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
    )
}

export default Survey;