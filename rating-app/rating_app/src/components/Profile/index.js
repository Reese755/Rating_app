import './profile.css';
import CapturePhoto from './CapturePhoto';
import CropImage from './CropImage';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { saveImageToBackend } from './uploadService'; // Your image upload logic

function Profile () {


  const [capturedImage, setCapturedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const token = localStorage.getItem('jwt');
  
    axios.get('http://localhost:3001/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => setUser(res.data))
      .catch(err => console.error('Error fetching profile:', err));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('jwt');
      const response = await axios.patch(
        `http://localhost:3001/users/${user.id}`,
        {
          user: {
            name: user.name,
            age: user.age,
            height: user.height,
            weight: user.weight,
            gender: user.gender,
            location: user.location,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('User updated:', response.data);
      alert('Profile updated!');
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Update failed.');
    }
    setUser({
      name: '',
      age: '',
      height: '',
      weight: '',
      gender: '',
      location: ''
    });
  };
  
  

  const handleCapture = (image) => {
    setCapturedImage(image);
  };

  const handleCropComplete = (croppedImage) => {
    setCroppedImage(croppedImage);
  };


  
  const handleSave = async () => {
    if (croppedImage) {
      const savedImageUrl = await saveImageToBackend(croppedImage);
      console.log('Image saved:', savedImageUrl);
    }
  };



const saveImageToBackend = async (image) => {
  const formData = new FormData();
  formData.append('file', image);

  try {
    const response = await axios.post('http://your-backend-url.com/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

const generateHeights = () => {
  const options = [];
  for (let feet = 3; feet <= 7; feet++) {
    for (let inches = 0; inches <= 11; inches++) {
      if (feet === 7 && inches > 5) break; // cap at 7'5"
      options.push(`${feet}'${inches}"`);
    }
  }
  return options;
};

   const profile = ['https://i.imgur.com/UwuQ4pq.jpeg']


    return (
    <>
    <div className="profile-container">
  <h2>Update Profile</h2>

  <div>
      
      {/* Take a picture */}
      <CapturePhoto onCapture={handleCapture} />

      {/* Crop image once captured */}
      {capturedImage && (
        <CropImage capturedImage={capturedImage} onCropComplete={handleCropComplete} />
      )}

      {/* Save button after cropping */}
      {croppedImage && <button onClick={handleSave}>Save Image</button>}
    </div>
    <div className="profile-image-container" >
        <img className='profile-img' src={profile} alt="profile" />

    </div>

    <form className="profile-form" onSubmit={handleSubmit}>
    <div className="profile-form-group">
  <label className='profile-label' htmlFor="name">
    Name: {user?.name || 'Not set'}
  </label>
  <input type="text" id="name" value={user?.name || ''} onChange={handleChange} placeholder='Enter your name' />
</div>

<div className="profile-form-group">
  <label className='profile-label' htmlFor="age">
    Age: {user?.age || 'Not set'}
  </label>
  <input type="number" id="age" value={user?.age || ''} onChange={handleChange} placeholder='Enter your age' />
</div>

<div className="profile-form-group">
  <label className='profile-label' htmlFor="weight">
    Weight (lbs): {user?.weight || 'Not set'}
  </label>
  <input type="number" id="weight" value={user?.weight || ''} onChange={handleChange} placeholder='Enter your weight'/>
</div>

<div className="profile-form-group">
  <label className='profile-label' htmlFor="height">Height</label>
  <select id="height" value={user?.height || ''} onChange={handleChange}>
    <option value="">Select height</option>
    {generateHeights().map((h, i) => (
      <option key={i} value={h}>{h}</option>
    ))}
  </select>
</div>

<div className="profile-form-group">
  <label className='profile-label' htmlFor="gender">
    Gender: {user?.gender || 'Not set'}
  </label>
  <select id="gender" value={user?.gender || ''} onChange={handleChange}>
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>

<div className="profile-form-group">
  <label className='profile-label' htmlFor="location">
    Location: {user?.location || 'Not set'}
  </label>
  <input type="text" id="location" value={user?.location || ''} onChange={handleChange} placeholder='Enter your location'/>
</div>


    <button type="submit" className="profile-submit-btn" >Update Profile</button>
  </form>
</div>

    </>
    );
};

export default Profile;