// src/components/BookList.js
import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map(book => (
                <BookItem key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
