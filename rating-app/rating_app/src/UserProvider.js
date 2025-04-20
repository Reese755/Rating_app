import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // List of users
  const [currentUser, setCurrentUser] = useState(null); // Currently logged-in user

  // Fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://your-backend-url.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Update a user's profile
  const updateUser = async (userId, updatedData) => {
    try {
      const response = await fetch(`http://your-backend-url.com/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const updatedUser = await response.json();

      // Update the local state
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === userId ? updatedUser : user))
      );
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <UserContext.Provider value={{ users, currentUser, setCurrentUser, fetchUsers, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
