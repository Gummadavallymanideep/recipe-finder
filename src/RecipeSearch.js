import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';

function RecipeSearch() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    // Define the API endpoint with the query parameter
    const apiUrl = `https://api.example.com/recipes?q=${query}&apiKey=f492b136fd653a3a122c011b1b45bc2d`;
  
    // Make the API request
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        // Update the recipes state with the fetched data
        setRecipes(data);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        // You can also update the UI to show an error message here
      });
  };

  useEffect(() => {
    // Define the API endpoint with the query parameter
    const apiUrl = `https://api.example.com/recipes?q=${query}&apiKey=f492b136fd653a3a122c011b1b45bc2d`;

    // Check if the query is empty; if so, don't make the request
    if (!query) {
      setRecipes([]); // Clear the recipe list
      return;
    }

    // Make the API request
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        // Update the recipes state with the fetched data
        setRecipes(data);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        // You can also update the UI to show an error message here
      });
  }, [query]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={handleSearch}>
        Search
      </button>
      <RecipeList recipes={recipes} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    background: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default RecipeSearch;
