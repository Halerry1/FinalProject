// Hardcoded user data
const adminUser = {
    id: 0,
    username: 'admin',
    email: 'admin@id.com',
    password: '123', // Admin's password
  };
  
  // Function to login the user
  export const login = async (username, password) => {
    // Check if the provided username and password match the admin credentials
    if (username === adminUser.username && password === adminUser.password) {
      localStorage.setItem('user', JSON.stringify(adminUser)); // Store user data in localStorage
      return adminUser;
    }
    
    throw new Error('Invalid username or password');
  };
  
  // Function to get the logged-in user's profile
  export const getProfile = () => {
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage
    
    if (user) {
      return user;
    }
    
    throw new Error('No user logged in');
  };
  
  // Function to logout the user
  export const logout = () => {
    localStorage.removeItem('user'); // Remove user data from localStorage
  };
  
