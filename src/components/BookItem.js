// src/components/BookItem.js
import React from 'react';

const BookItem = ({ book }) => {
    return (
        <div className="bg-white border border-hidden p-4 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-[#77428D]">{book.title}</h3>
            <p className="mt-3 text-[#77428D]">{book.author}</p>
            <p className="mt-3 text-gray-500 text-[#77428D]">{book.genre}</p>
        </div>
    );
};

export default BookItem;
