import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
   
  });
  const [loading,setLoading]=useState(false);

  const { username, email } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(loading);
   if(isFormValid){
    setLoading(false);
   }

    // Handle form submission logic here
  };

  if(loading) return <div>It's loading</div>

  // Check if all required fields are filled out
  const isFormValid = username !== '' && email !== ''

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange} />
      </div>
      
      <button type="submit" disabled={!isFormValid}>Submit</button>
    </form>
  );
};

export default Form;
