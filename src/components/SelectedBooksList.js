import React from "react";

function SelectedBooksList({ selectedBooks, onRemoveFromCart }) {
  return (
    <div>
      <h2>Selected Books</h2>
      <ul>
        {selectedBooks.map((book) => (
          <li key={book.id}>
            {book.name}
            <button onClick={() => onRemoveFromCart(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedBooksList;