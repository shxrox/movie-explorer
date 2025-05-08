import React, { useState } from 'react';

const SearchBar = ({ onSearch, darkMode }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div
      style={{
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px 15px',
          width: '300px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          backgroundColor: darkMode ? '#2e2e2e' : '#fff',
          color: darkMode ? '#f1f1f1' : '#000',
          outline: 'none',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '10px 16px',
          backgroundColor: darkMode ? '#000000' : '#000000',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
