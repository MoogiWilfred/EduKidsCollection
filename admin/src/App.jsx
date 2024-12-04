import { useState } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null); // Ensure proper handling of the file
  const [message, setMessage] = useState(''); // For feedback

  const onsubmitHandler = async (e) => {
    e.preventDefault();

    // Check for missing fields
    if (!name || !description || !price || !category || !image) {
      alert('Please fill out all fields');
      return;
    }

    // Create form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image);

    try {
      // API call to backend
      const response = await axios.post('http://localhost:4000/api/item/add', formData);

      // Set success message
      setMessage('Item uploaded successfully!');
      console.log(response.data);

      // Clear form inputs after successful submission
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setImage(null);
    } catch (error) {
      console.error(error);
      setMessage('Error uploading item. Please try again.');
    }
  };

  return (
    <div>
      <h1>Admin</h1>
      <p>Upload Dashboard</p>
      {message && <p>{message}</p>} {/* Display feedback */}
      <form onSubmit={onsubmitHandler}>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*" // Restrict file types to images
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
