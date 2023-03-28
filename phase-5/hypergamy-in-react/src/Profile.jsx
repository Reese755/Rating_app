import './Profile.css'

function Profile({user, users, deleteAccount, handleChangeForUpdate, updateUser}) {



return (

<div>
<div className="profile-wrapper">
  <div className="profile">
    <div className="profile-content">
      <h1>Edit Profile</h1>
      
      <form action="">
        {/* <!-- Photo --> */}
        <fieldset>
          <div className="grid-35">
            <label>Your Photo</label>
          </div>
          <div className="grid-65">
            <span className="profile-photo" title="Upload your Avatar!"></span>
            <input type="file" className="profile-btn" />
          </div>
        </fieldset>
        </form>
        <form>
        <fieldset>
          
          <div className="grid-35">
            <label>Name: {user.name}</label>
          </div>
          <div className="grid-65">
            <input type="text" name="name" onChange={handleChangeForUpdate} tabIndex="1" />
            <input type="submit" value="update name" />
          </div>
        </fieldset>
        </form>
        {/* <!--Age --> */}
        <form onSubmit={(event) => {
            event.preventDefault()
            updateUser(user.id)
        }}>
        <fieldset>
          <div className="grid-35">
            <label>Age: {user.age}</label>
          </div>
          <div className="grid-65">
          <input type="number" name="age" onChange={handleChangeForUpdate} tabIndex="2" />
          <input type="submit" value="update age"/>
          </div>
        </fieldset>
        </form>
        {/* <!-- Height --> */}
        <form onSubmit={(event) => {
            event.preventDefault()
            updateUser(user.id)
        }}>
        <fieldset>
          <div className="grid-35">
            <label>Height: {user.height}</label>
          </div>
          <div className="grid-65">
            <input type="text" name="height" onChange={handleChangeForUpdate} tabIndex="3" />
            <input type="submit" value="update height"/>
          </div>
        </fieldset>
        </form>
        {/* <!-- Weight --> */}
        <form onSubmit={(event) => {
            event.preventDefault()
            updateUser(user.id)
        }}>
        <fieldset>
          <div className="grid-35">
            <label>Weight: {user.weight}</label>
          </div>
          <div className="grid-65">
            <input type="number" name="weight" onChange={handleChangeForUpdate} tabIndex="4" />
            <input type="submit" value="update weight"/>
          </div>
        </fieldset>
        </form>
        {/* <!-- Location --> */}
        <form onSubmit={(event) => {
            event.preventDefault()
            updateUser(user.id)
        }}>
        <fieldset>
          <div className="grid-35">
            <label>Location: {user.location}</label>
          </div>
          <div className="grid-65">
            <select name="location" onChange={handleChangeForUpdate} >
            <option selected="selected" value="--------------" disabled>--------------</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option name="location" value="Arkansas">Arkansas</option>
              <option name="location" value="California">California</option>
              <option name="location" value="Colorado">Colorado</option>
              <option name="location" value="Connecticut">Connecticut</option>
              <option name="location" value="Delaware">Delaware</option>
              <option name="location" value="Florida">Florida</option>
              <option name="location" value="Georgia">Georgia</option>
              <option name="location" value="Hawaii">Hawaii</option>
              <option name="location" value="Idaho">Idaho</option>
              <option name="location" value="Illinois">Illinois</option>
              <option name="location" value="Indiana">Indiana</option>
              <option name="location" value="Iowa">Iowa</option>
              <option name="location" value="Kansas">Kansas</option>
              <option name="location" value="Kentucky">Kentucky</option>
              <option name="location" value="Louisiana">Louisiana</option>
              <option name="location" value="Maine">Maine</option>
              <option name="location" value="Maryland">Maryland</option>
              <option name="location" value="Massachusetts">Massachusetts</option>
              <option name="location" value="Michigan">Michigan</option>
              <option name="location" value="Minnesota">Minnesota</option>
              <option name="location" value="Mississippi">Mississippi</option>
              <option name="location" value="Missouri">Missouri</option>
              <option name="location" value="Montana">Montana</option>
              <option name="location" value="Nebraska">Nebraska</option>
              <option name="location" value="Nevada">Nevada</option>
              <option name="location" value="New Hampshire">New Hampshire</option>
              <option name="location" value="New Jersey">New Jersey</option>
              <option name="location" value="New Mexico">New Mexico</option>
              <option name="location" value="New York">New York</option>
              <option name="location" value="North Carolina">North Carolina</option>
              <option name="location" value="North Dakota">North Dakota</option>
              <option name="location" value="Ohio">Ohio</option>
              <option name="location" value="Oklahoma">Oklahoma</option>
              <option name="location" value="Oregon">Oregon</option>
              <option name="location" value="Pennsylvania">Pennsylvania</option>
              <option name="location" value="Rhode Island">Rhode Island</option>
              <option name="location" value="South Carolina">South Carolina</option>
              <option name="location" value="South Dakota">South Dakota</option>
              <option name="location" value="Tennessee">Tennessee</option>
              <option name="location" value="Texas">Texas</option>
              <option name="location" value="Utah">Utah</option>
              <option name="location" value="Vermont">Vermont</option>
              <option name="location" value="Virginia">Virginia</option>
              <option name="location" value="Washington">Washington</option>
              <option name="location" value="West Virginia">West Virginia</option>
              <option name="location" value="Wisconsin">Wisconsin</option>
              <option name="location" value="Wyoming">Wyoming</option>

            </select>
            <input type="submit" value="update location"/>
          </div>
        </fieldset>
        </form>
        {/* <!-- Highest Qualification --> */}
        <form onSubmit={(event) => {
            event.preventDefault()
            updateUser(user.id)
        }}>
        <fieldset>
          <div className="grid-35">
            <label>Gender: {user.gender}</label>
          </div>
          <div className="grid-65">
            <select name="gender" onChange={handleChangeForUpdate}>
            <option  selected="selected" value="--------------" disabled>--------------</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Non-binary">Non-binary</option>
            </select>
            <input type="submit" value="update location"/>
          </div>
        </fieldset>
        </form>
        {/* <!-- School --> */}
        <fieldset>
          <div className="grid-35">
            <label>School Name</label>
          </div>
          <div className="grid-65">
            <input type="text" id="school" tabIndex="7" />
          </div>
        </fieldset>
        {/* <!-- Company Name --> */}
        <fieldset>
          <div className="grid-35">
            <label>Company Name</label>
          </div>
          <div className="grid-65">
            <input type="text" id="company" tabIndex="8" />
          </div>
        </fieldset>

       
        <fieldset>
          <div className="grid-35">
            <label>Delete Account</label>
            <button onClick={deleteAccount}>Delete</button>
          </div>
        </fieldset>
      {/* </form> */}
    </div>
  </div>
</div>
</div>

    )
}

export default Profile;