// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            className="border p-2 border-hidden shadow-xl rounded-lg w-full mb-7 bg-white focus:text-[#77428D]"
            placeholder="Search for books..."
            value={searchTerm}
            onChange={handleChange}
        />
    );
};

export default SearchBar;
