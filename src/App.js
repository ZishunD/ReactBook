// src/App.js
import React, { useState } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import booksData from './data.json';

function App() {
  const [books, setBooks] = useState(booksData);

  const handleSearch = (term) => {
    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#0B346E] text-shadow-lg">Mini Book Library</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
}

export default App;
