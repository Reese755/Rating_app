import './profile.css';

function Profile () {

   const profile = ['https://i.imgur.com/UwuQ4pq.jpeg']


    return (
    <>
    <div className="profile-container">
  <h2>Update Profile</h2>


    <div className="profile-image-container" >
        <img className='profile-img' src={profile} alt="profile" />

    </div>

  <form className="profile-form">
    <div className="profile-form-group">
      <label className='profile-label' htmlFor="name">Name: Reese</label>
      <input type="text" id="name" placeholder="Enter your name" />
    </div>

    <div className="profile-form-group">
      <label className='profile-label' htmlFor="age">Age: 30</label>
      <input type="number" id="age" placeholder="Enter your age" />
    </div>

    <div className="profile-form-group">
      <label className='profile-label' htmlFor="weight">Weight (lbs): 190</label>
      <input type="number" id="weight" placeholder="Enter your weight" />
    </div>

    <div className="profile-form-group">
      <label className='profile-label' htmlFor="height">Height (ft): 6'1</label>
      <input type="number" id="height" placeholder="Enter your height" />
    </div>

    <div className="profile-form-group">
      <label className='profile-label' htmlFor="gender">Gender: Male</label>
      <select id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="profile-form-group">
      <label className='profile-label' htmlFor="location">Location: New York</label>
      <input type="text" id="location" placeholder="Enter your location" />
    </div>

    <button type="submit" className="profile-submit-btn">Update Profile</button>
  </form>
</div>

    </>
    );
};

export default Profile;