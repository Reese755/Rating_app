import React, { useState, useEffect } from 'react';
import { fetchUsers, rateUser } from './api'; // Import both fetchUsers and the rateUser function

function UserList({ currentUser }) {
    const [users, setUsers] = useState([]);
    const [ratedUsers, setRatedUsers] = useState(new Set());
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch all users except the logged-in user and those already rated
        async function fetchUsersFromAPI() {
            try {
                const fetchedUsers = await fetchUsers(currentUser.id); // Pass the logged-in user's ID
                setUsers(fetchedUsers); // Update the state with the fetched users
            } catch (error) {
                console.error('Error fetching users:', error);
                setErrorMessage('Failed to fetch users. Please try again later.');
            }
        }
        fetchUsersFromAPI();
    }, [currentUser.id]);

    const handleRateUser = async (userId, rating) => {
        try {
            await rateUser(userId, rating); // Use the rateUser function from your API module

            // Update rated users list
            setRatedUsers(prevRatedUsers => new Set([...prevRatedUsers, userId]));

            // Remove the rated user from the displayed users list
            setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error rating user:', error);
            setErrorMessage('Failed to submit rating. Please try again later.');
        }
    };

    if (errorMessage) {
        return <div className="error">{errorMessage}</div>;
    }

    return (
        <div className="user-list-container">
            <h2>Rate Other Users</h2>
            {users.length === 0 ? (
                <p>No users available to rate at this time.</p>
            ) : (
                <div className="user-list">
                    {users.map(user => (
                        <div key={user.id} className="user-card">
                            <img
                                src={user.profile_picture_url || 'default-profile.png'}
                                alt={`${user.name}'s profile`}
                                className="user-profile-picture"
                            />
                            <h3>{user.name}</h3>
                            <p>Age: {user.age || 'N/A'}</p>
                            <p>Location: {user.location || 'N/A'}</p>
                            <div className="rating-buttons">
                                {[1, 2, 3, 4, 5].map(rating => (
                                    <button
                                        key={rating}
                                        onClick={() => handleRateUser(user.id, rating)}
                                    >
                                        {rating} Star{rating > 1 && 's'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserList;